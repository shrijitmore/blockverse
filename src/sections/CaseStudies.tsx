import { SectionIntro } from '../components/SectionIntro'
import { CASE_STUDIES } from '../data'
import { useInView } from '../hooks'

export function CaseStudies() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

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

      <div className="cs-list">
        {CASE_STUDIES.map((c) => (
          <article className="cs-card" key={c.tag}>
            <span className="cs-glow" aria-hidden="true" />
            <div className="cs-main">
              <span className="cs-tag">{c.tag}</span>
              <h3 className="cs-title">{c.title}</h3>
              <p className="cs-sub">{c.sub}</p>
              <p className="cs-desc">{c.desc}</p>
            </div>
            <div className="cs-side">
              <div className="cs-metric">
                <span className="num">{c.metric}</span>
                <span className="lbl">{c.metricLabel}</span>
              </div>
              <a className="cs-cta" href="#">
                Read case study
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
