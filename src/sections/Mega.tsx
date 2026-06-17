import { useInView } from '../hooks'

const LINES = [
  { text: 'One system.', delay: '0s' },
  { text: 'Three layers.', delay: '0.55s' },
]

const CARDS = [
  {
    no: '01',
    label: 'Leaders',
    title: 'Set direction. Create belief. Drive the mandate.',
    sub: "If leaders aren't fluent, AI stays optional.",
  },
  {
    no: '02',
    label: 'Teams',
    title: 'Turn access into real usage.',
    sub: 'This is where adoption actually begins — inside everyday tasks.',
  },
  {
    no: '03',
    label: 'Agentic AI Workflows',
    title: 'Make it stick by building it into the work.',
    sub: "If it's not embedded, it won't last.",
  },
]

export function Mega() {
  const { ref, inView } = useInView<HTMLElement>(0.3)

  return (
    <section className={`mega armed${inView ? ' in' : ''}`} ref={ref} data-screen-label="Mega">
      <h2 className="mega-head">
        {LINES.map((line) => (
          <span className="mega-line" key={line.text}>
            <span className="mega-inner" style={{ transitionDelay: line.delay }}>
              {line.text}
            </span>
          </span>
        ))}
      </h2>

      <div className="mega-cards">
        {CARDS.map((c, i) => (
          <div className="mega-card" key={c.no} style={{ transitionDelay: `${0.6 + i * 0.12}s` }}>
            <span className="mega-card__no">{c.no}</span>
            <span className="mega-card__label">{c.label}</span>
            <h3 className="mega-card__title">{c.title}</h3>
            <p className="mega-card__sub">{c.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
