import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'

/** Fixed top nav for inner pages (About, Industries) — logo links back to the landing page. */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav site-nav${scrolled ? ' site-nav--scrolled' : ''}`}>
      <Link to="/" aria-label="Blockverse home">
        <img className="logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
      </Link>
      <nav>
        <NavLinks />
      </nav>
      <Link to="/#contact" className="btn btn-call">
        Book a Call
      </Link>
    </header>
  )
}
