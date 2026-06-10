import { useInView } from '../hooks'

const LINES = [
  { text: 'One system.', delay: '0s' },
  { text: 'Three layers.', delay: '0.55s' },
  { text: 'No seams.', delay: '1.1s' },
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
    </section>
  )
}
