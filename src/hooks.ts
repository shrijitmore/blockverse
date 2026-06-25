import { useCallback, useEffect, useRef, useState } from 'react'

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const DIM = 0.18

/** Word-by-word scroll reveal, driven by a section's scroll progress. Shared by Statement + Gap. */
export function useWordReveal<T extends HTMLElement = HTMLElement>() {
  const sectionRef = useRef<T>(null)
  const wordRefs = useRef<(HTMLElement | null)[]>([])

  const registerWord = useCallback(
    (i: number) => (el: HTMLElement | null) => {
      wordRefs.current[i] = el
    },
    [],
  )

  useEffect(() => {
    const reduce = prefersReducedMotion()

    function update() {
      const sec = sectionRef.current
      const words = wordRefs.current
      if (!sec || !words.length) return
      if (reduce) {
        words.forEach((w) => w && (w.style.opacity = '1'))
        return
      }
      const rect = sec.getBoundingClientRect()
      const track = sec.offsetHeight - window.innerHeight
      const p = clamp(track > 0 ? -rect.top / track : 0, 0, 1)
      const reveal = (p / 0.78) * (words.length + 1)
      words.forEach((w, i) => {
        if (!w) return
        const wp = clamp(reveal - i, 0, 1)
        w.style.opacity = (DIM + (1 - DIM) * wp).toFixed(3)
      })
    }

    let raf = 0
    const loop = () => {
      update()
      raf = requestAnimationFrame(loop)
    }

    update()

    // Mobile browsers coalesce/throttle `scroll` events heavily during
    // momentum scrolling, which can freeze a scroll-driven reveal mid-fade.
    // Run a continuous rAF loop instead, but only while the section is
    // actually in view, so it's free the rest of the time.
    const sec = sectionRef.current
    let io: IntersectionObserver | undefined
    if (sec && !reduce) {
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting
          if (visible && !raf) {
            raf = requestAnimationFrame(loop)
          } else if (!visible && raf) {
            cancelAnimationFrame(raf)
            raf = 0
          }
        },
        { threshold: 0 },
      )
      io.observe(sec)
    }

    window.addEventListener('resize', update)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      io?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return { sectionRef, registerWord }
}

/** Observes every `[data-reveal]` descendant of the container and adds `.is-visible` once each scrolls into view. */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (prefersReducedMotion()) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return { containerRef }
}

/** Adds `inView` once an element first crosses `threshold`, then disconnects. Shared by Mega/ProvenPath/CaseStudies/Founders. */
export function useInView<T extends HTMLElement = HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            io.disconnect()
          }
        })
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, inView }
}

/** Tab deck with a sliding indicator. When `autoPlay`, advances every `intervalMs` while in view; otherwise manual-only. */
export function useAutoRotateTabs(count: number, intervalMs = 5000, autoPlay = true) {
  const sectionRef = useRef<HTMLElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)

  const registerTab = useCallback(
    (i: number) => (el: HTMLButtonElement | null) => {
      tabRefs.current[i] = el
    },
    [],
  )

  const moveIndicator = useCallback(() => {
    const tab = tabRefs.current[active]
    const indicator = indicatorRef.current
    if (!tab || !indicator) return
    indicator.style.width = `${tab.offsetWidth}px`
    indicator.style.transform = `translateX(${tab.offsetLeft - 6}px)`
  }, [active])

  useEffect(() => {
    moveIndicator()
    window.addEventListener('resize', moveIndicator)
    document.fonts?.ready.then(moveIndicator).catch(() => {})
    return () => window.removeEventListener('resize', moveIndicator)
  }, [moveIndicator])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setInView(entry.isIntersecting)),
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!autoPlay || !inView || prefersReducedMotion()) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % count), intervalMs)
    return () => window.clearInterval(id)
  }, [autoPlay, inView, count, intervalMs])

  return { sectionRef, indicatorRef, registerTab, active, setActive, running: autoPlay && inView }
}
