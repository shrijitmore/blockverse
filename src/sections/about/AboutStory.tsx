import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    num: '01',
    title: 'Custom Agentic AI Solutions',
    desc: 'AI agents custom-trained on your specific processes, data, and standards.',
    bg: 'agents',
  },
  {
    num: '02',
    title: 'Executive AI Capability',
    desc: 'Fluency training for senior leaders to identify and sponsor high-impact AI opportunities.',
    bg: 'exec',
  },
  {
    num: '03',
    title: 'Workforce AI Adoption',
    desc: 'Change management to embed AI behavior directly into daily workflows.',
    bg: 'skills',
  },
]

export function AboutStory() {
  const gridRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, gridRef.current].filter(Boolean) as HTMLElement[]
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
    <section className="ab-story">
      <div className="ab-story__bg-grid" />
      <div className="ab-container">
        <div ref={headRef} className="ab-section-head" data-ab-anim="fade-up">
          <span className="ab-kicker">ABOUT US</span>
          <h2 className="ab-section-title">
            What We <span className="ab-grad">Focus On.</span>
          </h2>
        </div>

        <div ref={gridRef} className="ab-services__grid" data-ab-anim="fade-up" data-ab-delay="0.3">
          {SERVICES.map((s) => (
            <div key={s.num} className="ab-services__card">
              <div className={`ab-services__card-bg ab-services__card-bg--${s.bg}`} />
              <div className="ab-services__card-overlay" />
              <div className="ab-services__card-content">
                <span className="ab-services__card-num">{s.num}</span>
                <div className="ab-services__card-text">
                  <h3 className="ab-services__card-title">{s.title}</h3>
                  <p className="ab-services__card-reveal">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
