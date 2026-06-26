import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { MobileMenu } from './MobileMenu'

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
      <a href="https://agentic.blockversetechnologies.ai/" className="btn btn-call nav-book">
        Book a Call
      </a>
      <MobileMenu />
    </header>
  )
}
