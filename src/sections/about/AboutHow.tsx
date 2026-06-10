import { useEffect, useRef } from 'react'

const HOW_CARDS = [
  {
    num: '01',
    title: 'Purpose-Built Intelligence',
    desc: 'Custom-trained on your unique workflows, never adapted from templates.',
    span: false,
  },
  {
    num: '02',
    title: 'Native Workflow Embedding',
    desc: 'Deeply integrated into your existing stack so your team never has to switch tools.',
    span: false,
  },
  {
    num: '03',
    title: 'Rapid ROI',
    desc: 'Operational ROI within weeks. We baseline metrics before launch to prove results.',
    span: false,
  },
  {
    num: '04',
    title: 'Continuous Improvement',
    desc: 'Active post-deployment tuning ensures your agents continuously adapt and improve.',
    span: false,
  },
  {
    num: '05',
    title: 'Total Accountability',
    desc: 'We stand behind measurable business outcomes, not just code delivery.',
    span: true,
  },
]

export function AboutHow() {
  const layoutRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, layoutRef.current].filter(Boolean) as HTMLElement[]
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
    <section className="ab-how">
      <div className="ab-container">
        <div ref={headRef} className="ab-section-head ab-section-head--center" data-ab-anim="fade-up">
          <span className="ab-kicker">HOW WE WORK</span>
          <h2 className="ab-section-title">
            What Makes Our <span className="ab-grad">Deployments</span> Unrivaled
          </h2>
        </div>

        <div ref={layoutRef} className="ab-how__layout" data-ab-anim="fade-up" data-ab-delay="0.3">
          <div className="ab-how__image-col">
            <div className="ab-how__image-gradient" />
          </div>
          <div className="ab-how__cards-col">
            {HOW_CARDS.map((c) => (
              <div key={c.num} className={`ab-how__card${c.span ? ' ab-how__card--span' : ''}`}>
                <span className="ab-how__card-num">{c.num}</span>
                <h3 className="ab-how__card-title">{c.title}</h3>
                <p className="ab-how__card-text">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
