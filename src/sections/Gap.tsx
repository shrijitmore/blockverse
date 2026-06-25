import { Fragment, type ReactNode } from 'react'
import { useWordReveal } from '../hooks'

export function Gap() {
  const { sectionRef, registerWord } = useWordReveal<HTMLElement>()

  let i = 0
  const w = (content: ReactNode, extraClass = '') => {
    const idx = i++
    return (
      <Fragment key={idx}>
        <span className={extraClass ? `word ${extraClass}` : 'word'} ref={registerWord(idx)}>
          {content}
        </span>{' '}
      </Fragment>
    )
  }

  return (
    <section className="reveal-section" ref={sectionRef} data-screen-label="Gap">
      <div className="glow-clip" aria-hidden="true">
        <div className="glow c" />
        <div className="glow d" />
      </div>
      <div className="reveal-sticky">
        <div className="gap-block">
          <span className="gap-kicker">{w('The reality')}</span>
          <p className="gap-stats">
            {w(<span className="num">$2.7 trillion</span>)}
            {w('in AI spending.')}
            {w('Adoption rates')}
            {w(<span className="num">under 30%.</span>)}
          </p>
          <div className="gap-divider">
            {w('Then', 'then')}
            <span className="rule" />
          </div>
          <p className="gap-resolve">
            {w(<span className="brand">Blockverse</span>)}
            {w('exists to')}
            {w(<><span className="brace">{'{'}</span> <span className="grad mono">close that gap.</span> <span className="brace">{'}'}</span></>)}
          </p>
        </div>
      </div>
    </section>
  )
}
