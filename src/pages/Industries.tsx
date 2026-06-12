import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/industries.css'
import { SiteNav } from '../components/SiteNav'
import { INDUSTRIES } from '../data'

// ── Component ────────────────────────────────────────────
export function Industries() {
  const [activeId, setActiveId] = useState('ind-pharma')
  const tabsRef = useRef<HTMLElement>(null)
  const goTopRef = useRef<HTMLButtonElement>(null)

  // IntersectionObserver for [data-ind-anim] elements
  useEffect(() => {
    const els = document.querySelectorAll('[data-ind-anim]')
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseFloat(e.target.getAttribute('data-ind-delay') || '0')
            setTimeout(() => e.target.classList.add('ind-visible'), delay * 1000)
            obs.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [activeId]) // re-run when active section changes

  // Go to top button visibility
  useEffect(() => {
    const btn = goTopRef.current
    if (!btn) return
    const onScroll = () => {
      btn.classList.toggle('visible', window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sticky tabs shadow
  useEffect(() => {
    const tabs = tabsRef.current
    if (!tabs) return
    const onScroll = () => tabs.classList.toggle('scrolled', window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleTabClick(id: string) {
    setActiveId(id)
    // Scroll to section top after small delay for render
    setTimeout(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="ind-page">
      <SiteNav />
      {/* Hero */}
      <section className="ind-hero" id="ind-hero">
        <div className="ind-hero__bg">
          <div className="ind-hero__gradient" />
          <div className="ind-hero__orb ind-hero__orb--1" />
          <div className="ind-hero__orb ind-hero__orb--2" />
          <div className="ind-hero__orb ind-hero__orb--3" />
          <div className="ind-hero__grain" />
        </div>
        <div className="ind-hero__content">
          <h1
            className="ind-hero__title"
            data-ind-anim="fade-up"
            data-ind-delay="0.2"
          >
            Every Industry Has Its Own
            <br />
            <span className="ind-hero__title-accent">Breaking Point.</span>
          </h1>
          <p
            className="ind-hero__sub"
            data-ind-anim="fade-up"
            data-ind-delay="0.4"
          >
            Real sector depth, not generic playbooks. Every challenge here is one
            we&#39;ve mapped and built around.
          </p>
        </div>
        <div
          className="ind-hero__scroll"
          data-ind-anim="fade-up"
          data-ind-delay="1"
        >
          <div className="ind-hero__scroll-line" />
          <span>Explore Industries</span>
        </div>
      </section>

      {/* Sticky Tabs */}
      <nav className="ind-tabs" ref={tabsRef}>
        <div className="ind-tabs__inner">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              className={`ind-tab${activeId === ind.id ? ' active' : ''}`}
              onClick={() => handleTabClick(ind.id)}
              type="button"
            >
              {ind.tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Industry Sections */}
      {INDUSTRIES.map((ind) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`ind-section${ind.gray ? ' ind-section--gray' : ''}${
            activeId === ind.id ? ' active' : ''
          }`}
        >
          <div className="container">
            <div className="ind-intro">
              <div className="ind-intro__content">
                <div className="ind-tag" data-ind-anim="fade-up">
                  <span className="ind-tag__pill">{ind.tag}</span>
                </div>
                <h2
                  className="ind-section__headline"
                  data-ind-anim="fade-up"
                  data-ind-delay="0.1"
                >
                  {ind.headline}
                  <span className="ind-section__headline-accent">{ind.accent}</span>
                </h2>
                <div
                  className="ind-block ind-block--problem"
                  data-ind-anim="fade-up"
                  data-ind-delay="0.2"
                >
                  <p>{ind.intro}</p>
                </div>
              </div>
              <div
                className="ind-intro__visual"
                data-ind-anim="fade-up"
                data-ind-delay="0.25"
              >
                <div className="ind-intro__img-wrap">
                  <img
                    src={ind.image}
                    alt={ind.tag}
                    className="ind-intro__img"
                  />
                  <div className="ind-intro__img-glow" />
                </div>
              </div>
            </div>

            <div
              className="ind-block ind-block--cta"
              data-ind-anim="fade-up"
              data-ind-delay="0.4"
            >
              <Link to="/contact" className="ind-cta-btn">
                <span>{ind.cta} &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="ind-closing">
        <div className="ind-closing__bg">
          <div className="ind-closing__sky" />
          <div className="ind-closing__orb ind-closing__orb--1" />
          <div className="ind-closing__orb ind-closing__orb--2" />
        </div>
        <div className="container">
          <div className="ind-closing__content">
            <span
              className="section-label-purple"
              data-ind-anim="fade-up"
            >
              Explore Solutions
            </span>
            <h2
              className="ind-closing__title"
              data-ind-anim="slide-up"
            >
              Not Sure Where You Fit?
              <br />
              <span className="ind-closing__title-gradient">
                We&#39;ve Got That Covered.
              </span>
            </h2>
            <div
              className="ind-closing__actions"
              data-ind-anim="fade-up"
              data-ind-delay="0.3"
            >
              <Link to="/about" className="ind-hero-btn">
                <span>Find What Fits Your Operation &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Go to Top */}
      <button
        ref={goTopRef}
        className="ind-go-top"
        aria-label="Go to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  )
}
