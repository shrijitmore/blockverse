import { useState } from 'react'
import { SectionIntro } from '../components/SectionIntro'
import { INDUSTRIES } from '../data'
import { useInView } from '../hooks'

export function CaseStudies() {
  const { ref, inView } = useInView<HTMLElement>(0.15)
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id)
  const ind = INDUSTRIES.find((i) => i.id === activeId) ?? INDUSTRIES[0]

  return (
    <section className={`cases${inView ? ' in' : ''}`} ref={ref} data-screen-label="Case Studies">
      <SectionIntro
        wrapClass="cs-head"
        kicker="Case studies"
        title={
          <>
            Proof, not <span className="accent">promises.</span>
          </>
        }
      />

      <div className="cs-tabs" role="tablist">
        {INDUSTRIES.map((i) => (
          <button
            key={i.id}
            type="button"
            role="tab"
            aria-selected={i.id === activeId}
            className={`cs-tab${i.id === activeId ? ' is-active' : ''}`}
            onClick={() => setActiveId(i.id)}
          >
            {i.tab}
          </button>
        ))}
      </div>

      <div className="cs-list">
        <article className="cs-card" key={ind.id}>
          <span className="cs-glow" aria-hidden="true" />
          <header className="cs-panel-head">
            <span className="cs-tag">{ind.tag}</span>
            <h3 className="cs-panel-title">
              {ind.headline} <span className="accent">{ind.accent}</span>
            </h3>
          </header>
          <div className="cs-panel-body">
            <div className="cs-challenges">
              <span className="cs-col-label">Common Challenges</span>
              <p className="cs-col-heading">{ind.challengeHeading}</p>
              <div className="cs-challenge-list">
                {ind.challenges.map((ch, i) => (
                  <div className="cs-challenge-row" key={i}>
                    <span className="cs-ch-num">{ch.num}</span>
                    <div className="cs-ch-body">
                      <span className="cs-ch-function">{ch.fn}</span>
                      <span className="cs-ch-title">{ch.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs-impact">
              <p className="cs-col-heading">{ind.impactHeading}</p>
              <div className="cs-impact-list">
                {ind.impacts.map((imp, i) => (
                  <div className="cs-impact-item" key={i}>
                    <span className="cs-impact-val">{imp.val}</span>
                    <span className="cs-impact-desc">{imp.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
