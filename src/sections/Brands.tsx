import { MARQUEE_ROWS } from '../data'

export function Brands() {
  return (
    <section className="brands" data-screen-label="Brands">
      <p className="brands-head">
        Our Clients &amp; <em>Partners</em>
      </p>

      {MARQUEE_ROWS.map((row, i) => (
        <div className={`mq${row.reverse ? ' rev' : ''}`} key={i}>
          <div className="mq-track">
            {[0, 1].map((rep) =>
              row.logos.map((logo, j) => (
                <span className="mq-logo" aria-hidden={rep === 1 || undefined} key={`${rep}-${j}`}>
                  <img src={logo.src} alt={rep === 0 ? logo.name : ''} />
                </span>
              )),
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
