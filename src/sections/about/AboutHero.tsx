import { useEffect, useRef } from 'react'

export function AboutHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [titleRef.current, scrollRef.current].filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseFloat(e.target.getAttribute('data-ab-delay') || '0')
            setTimeout(() => e.target.classList.add('ab-visible'), delay * 1000)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="ab-hero">
      <div className="ab-hero__bg">
        <div className="ab-hero__sky" />
        <div className="ab-hero__orb ab-hero__orb--1" />
        <div className="ab-hero__orb ab-hero__orb--2" />
        <div className="ab-hero__orb ab-hero__orb--3" />
        <div className="ab-hero__shape ab-hero__shape--1" />
        <div className="ab-hero__shape ab-hero__shape--2" />
        <div className="ab-hero__shape ab-hero__shape--3" />
        <div className="ab-hero__shape ab-hero__shape--4" />
        <div className="ab-hero__shape ab-hero__shape--5" />
        <div className="ab-hero__grid-line ab-hero__grid-line--h1" />
        <div className="ab-hero__grid-line ab-hero__grid-line--h2" />
        <div className="ab-hero__grain" />
      </div>

      <div className="ab-container">
        <div className="ab-hero__content">
          <h1
            ref={titleRef}
            className="ab-hero__title"
            data-ab-anim="fade-up"
            data-ab-delay="0.3"
          >
            AI adoption across{' '}
            <span className="ab-hero__title-accent">leaders, teams and workflows</span> — built into how your business
            actually runs.
          </h1>
        </div>
      </div>

      <div ref={scrollRef} className="ab-hero__scroll" data-ab-anim="fade-up" data-ab-delay="1.4">
        <div className="ab-hero__scroll-mouse">
          <div className="ab-hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
