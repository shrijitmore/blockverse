import { Fragment } from 'react'
import { useWordReveal } from '../hooks'

const WORDS = [
  'with',
  'fluent',
  'leaders,',
  'confident',
  'teams',
  'and',
  'custom',
  null, // { agentic } — rendered specially
  'systems',
  'built',
  'around',
  'their',
  'workflows.',
]

export function Statement() {
  const { sectionRef, registerWord } = useWordReveal<HTMLElement>()

  return (
    <section className="reveal-section" ref={sectionRef} data-screen-label="Statement">
      <div className="glow c" aria-hidden="true" />
      <div className="glow d" aria-hidden="true" />
      <div className="reveal-sticky">
        <p className="statement">
          {WORDS.map((word, i) => (
            <Fragment key={i}>
              <span className="word" ref={registerWord(i)}>
                {word === null ? (
                  <>
                    <span className="brace">{'{'}</span> <span className="grad mono">agentic</span>{' '}
                    <span className="brace">{'}'}</span>
                  </>
                ) : i === 0 ? (
                  <span className="pink mono">{word}</span>
                ) : (
                  word
                )}
              </span>{' '}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}
