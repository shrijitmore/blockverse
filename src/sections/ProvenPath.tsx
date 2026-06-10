import { BentoIcon } from '../components/BentoIcon'
import { SectionIntro } from '../components/SectionIntro'
import { BENTO_CARDS, PARTICLES } from '../data'
import { useInView } from '../hooks'

const TINTS: Record<'pink' | 'amber', string> = {
  pink: 'rgba(255,141,170,.7)',
  amber: 'rgba(255,179,107,.7)',
}

export function ProvenPath() {
  const { ref, inView } = useInView<HTMLElement>(0.2)

  return (
    <section className={`proven${inView ? ' in' : ''}`} ref={ref} data-screen-label="Proven Path">
      <div className="p-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <i
            key={i}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              ...(p.tint ? { background: TINTS[p.tint] } : null),
            }}
          />
        ))}
      </div>

      <SectionIntro
        wrapClass="proven-head"
        kicker="How we work"
        title={
          <>
            A proven path to <span className="accent">scale.</span>
          </>
        }
      />

      <div className="bento">
        {BENTO_CARDS.map((card) => (
          <article className={`bcard ${card.col}`} key={card.title}>
            <span className="bcard-glow" aria-hidden="true" />
            <span className="bwm">{card.num}</span>
            <span className="bnum">{card.num}</span>
            <div className="bcard-top">
              <span className="bicon">
                <BentoIcon icon={card.icon} />
              </span>
              <h3 className="btitle">{card.title}</h3>
            </div>
            <p className="bdesc">{card.desc}</p>
            {card.image && (
              <div className="bvisual">
                <img src={card.image} alt={card.title} className="bvisual-img" />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
