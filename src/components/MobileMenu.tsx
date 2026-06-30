import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data'

const LINK_ROUTES: Record<string, string> = {
  'What We Do': '/#how',
  'Built-In Method': '/built-in-method',
  'About Us': '/about',
  'Our Agentic Systems': 'https://agentic.blockversetechnologies.ai/',
}

const isExternal = (href: string) => /^https?:\/\//.test(href)
const isHash = (href: string) => href.startsWith('/#')

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false) }, [pathname])

  const handleHashClick = (href: string) => {
    setOpen(false)
    if (pathname === '/') {
      const id = href.slice(2)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        window.history.replaceState(null, '', href)
      }, 100)
    }
  }

  const drawer = (
    <div className={`mobile-drawer${open ? ' is-open' : ''}`}>
      <div className="mobile-drawer__backdrop" onClick={() => setOpen(false)} />
      <div className="mobile-drawer__panel">
        <div className="mobile-drawer__top">
          <img className="mobile-drawer__logo" src="/assets/logo.png" alt="Blockverse" />
          <button
            className="mobile-drawer__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {NAV_LINKS.map((link) => {
            const href = LINK_ROUTES[link] ?? '#'
            return isExternal(href) ? (
              <a
                key={link}
                href={href}
                className="mobile-drawer__link"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ) : isHash(href) ? (
              <a
                key={link}
                href={href}
                className="mobile-drawer__link"
                onClick={(e) => { e.preventDefault(); handleHashClick(href) }}
              >
                {link}
              </a>
            ) : (
              <Link
                key={link}
                to={href}
                className="mobile-drawer__link"
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            )
          })}
        </nav>

        <a
          href={pathname === '/' ? '#contact' : '/#contact'}
          className="btn btn-call mobile-drawer__cta"
          onClick={() => setOpen(false)}
        >
          Book a Call
        </a>
      </div>
    </div>
  )

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        type="button"
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      {createPortal(drawer, document.body)}
    </>
  )
}
