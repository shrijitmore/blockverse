import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HEADLINE_LINES, HERO_BUILT, HERO_NOT_BOLTED } from '../data'
import { NavLinks } from '../components/NavLinks'
import { MobileMenu } from '../components/MobileMenu'

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
        photo.style.transform = `scaleX(-1) scale(1.04) translate(${x * -14}px, ${y * -10}px)`
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
        <Link to="/" aria-label="Blockverse home">
          <img className="logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
        </Link>
        <nav>
          <NavLinks />
        </nav>
        <a href="#contact" className="btn btn-call nav-book">
          Book a Call
        </a>
        <MobileMenu />
      </header>

      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="headline">
            {HEADLINE_LINES.map((line, i) => (
              <span className="line" key={i} style={{ animationDelay: line.delay }}>
                {line.text}
                {line.accent ? <> <span className="grad-in">{line.accent}</span></> : null}
              </span>
            ))}
          </h1>

          <div className="hero-tags-row">
            <p className="headline-tag">
              <span className="line spaced" style={{ animationDelay: HERO_BUILT.delay }}>
                {HERO_BUILT.lead} <span className="tag-accent">{HERO_BUILT.accent}</span>
              </span>
            </p>
            <p className="headline-tag headline-tag--bolted-mobile">
              <span className="line" style={{ animationDelay: HERO_NOT_BOLTED.delay }}>
                {HERO_NOT_BOLTED.l1} {HERO_NOT_BOLTED.l2}
              </span>
            </p>
          </div>

          <p className="sub">
            We help companies adopt <span className="grad-in">Ai</span>
            <br />
            and embed it in their real work
          </p>

          <div className="cta-row">
            <a href="https://agentic.blockversetechnologies.ai/" className="btn btn-agentic">
              Our Agentic Systems
            </a>
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-bolted hero-bolted--desktop" style={{ animationDelay: HERO_NOT_BOLTED.delay }}>
            <span>{HERO_NOT_BOLTED.l1}</span>
            <span>{HERO_NOT_BOLTED.l2}</span>
          </p>
          <a href="#how" className="hero-learn">
            <span>Learn How</span>
            <span className="hero-learn__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
