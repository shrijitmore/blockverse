import { Fragment } from 'react'
import { SectionIntro } from '../components/SectionIntro'
import { SocialLinks } from '../components/icons'
import { FOUNDERS } from '../data'
import { useInView } from '../hooks'

export function Founders() {
  const { ref, inView } = useInView<HTMLElement>(0.15)

  return (
    <section className={`founders${inView ? ' in' : ''}`} ref={ref} data-screen-label="Founders">
      <SectionIntro
        wrapClass="founders-head"
        kicker="The founders"
        title={
          <>
            Two operators. <span className="accent">One obsession.</span>
          </>
        }
      />

      <div className="founders-row">
        {FOUNDERS.map((f, i) => (
          <Fragment key={f.name}>
            {i > 0 && <span className="amp">&amp;</span>}
            <div className="founder">
              <span className="f-initial">{f.initial}</span>
              <div className="portrait-wrap">
                <span className="f-photo" />
              </div>
              <div className="f-meta">
                <h3 className="f-name">{f.name}</h3>
                <span className="f-role">{f.role}</span>
                <p className="f-bio">{f.bio}</p>
                <p className="f-quote">{f.quote}</p>
                <SocialLinks kinds={['linkedin', 'x']} className="f-social" />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
