import { MARQUEE_ROWS } from '../data'

export function Brands() {
  return (
    <section className="brands" data-screen-label="Brands">
      <p className="brands-head">
        Supporting creative ops for <em>real</em> creatives
      </p>

      {MARQUEE_ROWS.map((row, i) => (
        <div className={`mq${row.reverse ? ' rev' : ''}`} key={i}>
          <div className="mq-track">
            {[0, 1].map((rep) =>
              row.logos.map((logo, j) => (
                <span
                  className={`mq-logo${logo.cls ? ` ${logo.cls}` : ''}`}
                  aria-hidden={rep === 1 || undefined}
                  key={`${rep}-${j}`}
                >
                  {logo.name}
                </span>
              )),
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
