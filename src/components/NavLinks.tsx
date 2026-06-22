import type { MouseEvent } from 'react'
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

/** Shared top-nav link list (`.nav-links`), used by the landing Hero and SiteNav. */
export function NavLinks() {
  const { pathname } = useLocation()

  // On the landing page, smooth-scroll to the section instead of relying on hash navigation.
  const handleHashClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== '/') return // let the Link navigate to '/', Landing scrolls on mount
    const id = href.slice(2)
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }
  }

  return (
    <ul className="nav-links">
      {NAV_LINKS.map((link) => {
        const href = LINK_ROUTES[link] ?? '#'
        return (
          <li key={link}>
            {isExternal(href) ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ) : (
              <Link to={href} onClick={isHash(href) ? (e) => handleHashClick(e, href) : undefined}>
                {link}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
