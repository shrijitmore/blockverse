import { Link } from 'react-router-dom'
import { LAYERS } from '../data'
import { useAutoRotateTabs } from '../hooks'

export function Layers() {
  const { sectionRef, indicatorRef, registerTab, active, setActive, running } = useAutoRotateTabs(LAYERS.length)

  return (
    <section className={`layers${running ? ' run' : ''}`} ref={sectionRef} data-screen-label="Layers">
      <p className="layers-eyebrow">Start where the pain is sharpest.</p>

      <div className="tabs" role="tablist">
        <div className="tab-indicator" ref={indicatorRef} aria-hidden="true" />
        {LAYERS.map((l, i) => (
          <button
            key={l.tabLabel}
            ref={registerTab(i)}
            type="button"
            role="tab"
            data-i={i}
            className={`tab${i === active ? ' is-active' : ''}`}
            aria-selected={i === active}
            onClick={() => setActive(i)}
          >
            <span className="tab-no">{l.tabNo}</span> {l.tabLabel}
            <span className="tab-progress" />
          </button>
        ))}
      </div>

      <div className="layers-body">
        <div className="panels">
          {LAYERS.map((l, i) => (
            <div
              className={`panel${i === active ? ' is-active' : ''}`}
              key={l.layerNum}
            >
              <div className="layer-num">{l.layerNum}</div>
              <h3 className="panel-head">
                {l.headline} <em>{l.emphasis}</em>
              </h3>
              <p className="panel-text">{l.body}</p>
              {l.cta && (
                <Link to={l.cta.to} className="panel-cta">
                  {l.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="layer-imgs">
          {LAYERS.map((l, i) => (
            l.image ? (
              <img
                key={l.tabNo}
                src={l.image}
                alt={l.tabLabel}
                className={`layer-img${i === active ? ' is-active' : ''}`}
              />
            ) : null
          ))}
        </div>
      </div>
    </section>
  )
}
