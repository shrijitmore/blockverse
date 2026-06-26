import { useEffect, useRef } from 'react'

const PARAGRAPHS = [
  'Blockverse Technologies is a Netherlands-headquartered AI adoption company, with entities in Switzerland and India, working with enterprises globally to embed AI into real work.',
  'Over the past four years, we have partnered with leading organizations and governments to drive measurable business outcomes.',
  'We combine adoption-first AI programmes, workflow-mapped use cases, and custom AI systems—built and run inside the organisation—to transform how work gets done. Our approach is grounded in real workflows, built alongside client teams, and carried through to working systems in production.',
  'We operate with a practitioner-led model, bringing together deep business experience and technical capability to solve real problems. Every engagement is anchored in accountability, governance, and measurable outcomes—designed to meet the standards enterprises expect while delivering results that endure.',
]

export function AboutIntro() {
  const headRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, bodyRef.current].filter(Boolean) as HTMLElement[]
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
      { threshold: 0.1 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="ab-intro">
      <div className="ab-container">
        <div ref={headRef} className="ab-section-head" data-ab-anim="fade-up">
          <span className="ab-kicker">ABOUT US</span>
          <h2 className="ab-section-title">
            About <span className="ab-grad">Blockverse</span> Technologies
          </h2>
        </div>

        <div ref={bodyRef} className="ab-intro__body" data-ab-anim="fade-up" data-ab-delay="0.2">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="ab-intro__p">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
