import { useEffect, useRef } from 'react'

export function AboutJoin() {
  const headRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, subRef.current, ctaRef.current].filter(Boolean) as HTMLElement[]
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
    <section className="ab-join">
      <div className="ab-join__orb ab-join__orb--1" />
      <div className="ab-join__orb ab-join__orb--2" />
      <div className="ab-container">
        <h2 ref={headRef} className="ab-join__title" data-ab-anim="fade-up">
          Want to Understand{' '}
          <span className="ab-grad">What&rsquo;s Possible</span> for Your Organisation?
        </h2>
        <p ref={subRef} className="ab-join__sub" data-ab-anim="fade-up" data-ab-delay="0.1">
          A focused 30-minute conversation is enough to map your biggest operational bottleneck and
          identify which AI agent delivers the fastest return.
        </p>
        <div ref={ctaRef} className="ab-join__cta" data-ab-anim="fade-up" data-ab-delay="0.2">
          <a href="/#contact" className="btn btn-demo">
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  )
}
