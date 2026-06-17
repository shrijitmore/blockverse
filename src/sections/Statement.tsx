import { Fragment } from 'react'
import { useWordReveal } from '../hooks'

type Word = { t: string; accent?: boolean }

const WORDS: Word[] = [
  { t: 'AI' },
  { t: 'adoption' },
  { t: 'across' },
  { t: 'leaders,', accent: true },
  { t: 'teams', accent: true },
  { t: 'and' },
  { t: 'workflows', accent: true },
  { t: '—' },
  { t: 'built', accent: true },
  { t: 'into' },
  { t: 'how' },
  { t: 'your' },
  { t: 'business' },
  { t: 'actually' },
  { t: 'runs.' },
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
                {word.accent ? <span className="pink mono">{word.t}</span> : word.t}
              </span>{' '}
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  )
}
