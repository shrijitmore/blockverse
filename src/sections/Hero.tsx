import { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HEADLINE_LINES, HERO_SUB, NAV_LINKS } from '../data'

const MAIN_LINES = HEADLINE_LINES.filter((l) => !l.tag)
const TAG_LINES = HEADLINE_LINES.filter((l) => l.tag)
const SUB_PARTS = HERO_SUB.split(/(AI)/)

export function Hero() {
  const photoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const r1 = requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('anim')))
    return () => cancelAnimationFrame(r1)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    function onMove(e: MouseEvent) {
      if (window.innerWidth < 820) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const photo = photoRef.current
        if (!photo) return
        const x = e.clientX / window.innerWidth - 0.5
        const y = e.clientY / window.innerHeight - 0.5
        photo.style.transform = `scale(1.05) translate(${x * -14}px, ${y * -10}px)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" data-screen-label="Hero">
      <div className="glow a" aria-hidden="true" />
      <div className="glow b" aria-hidden="true" />
      <img ref={photoRef} className="hero-photo" src="/assets/BoyTransparent.png" alt="Smiling boy holding two ice cream cones" />

      <header className="nav">
        <img className="logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
        <nav>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                {link === 'About Us' ? (
                  <Link to="/about">{link}</Link>
                ) : link === 'Businesses' ? (
                  <Link to="/industries">{link}</Link>
                ) : (
                  <a href="#">{link}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="btn btn-call">
          Book a Call
        </button>
      </header>

      <div className="hero-inner">
        <div className="copy">
          <h1 className="headline">
            {MAIN_LINES.map((line, i) => (
              <span className={`line${line.dark ? ' dark' : ''}`} key={i} style={{ animationDelay: line.delay }}>
                {line.text}
                {line.accent ? <> <span className="grad-in">{line.accent}</span></> : null}
              </span>
            ))}
          </h1>

          <p className="headline-tag">
            {TAG_LINES.map((line, i) => (
              <span className={`line${line.dark ? ' dark' : ''}${line.spaced ? ' spaced' : ''}`} key={i} style={{ animationDelay: line.delay }}>
                {line.text}
                {line.accent ? <span className="tag-accent">{line.accent}</span> : null}
              </span>
            ))}
          </p>

          <div className="cta-row">
            <button type="button" className="btn btn-demo">
              Learn How
            </button>
            <button type="button" className="btn btn-learn">
              Agentic AI
            </button>
          </div>

          <p className="sub">
            {SUB_PARTS.map((part, i) =>
              part === 'AI' ? (
                <Fragment key={i}>
                  <span className="brace">{'{'}</span> <em className="sub-accent">{part}</em>{' '}
                  <span className="brace">{'}'}</span>
                </Fragment>
              ) : (
                <Fragment key={i}>{part}</Fragment>
              ),
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
