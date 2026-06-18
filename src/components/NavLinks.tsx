import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data'

const LINK_ROUTES: Record<string, string> = {
  'What We Do': '/industries',
  'Built-In Method': '/#how',
  'About Us': '/about',
  'Agentic AI Systems': 'https://agentic.blockversetechnologies.ai/',
}

const isExternal = (href: string) => /^https?:\/\//.test(href)

/** Shared top-nav link list (`.nav-links`), used by the landing Hero and SiteNav. */
export function NavLinks() {
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
              <Link to={href}>{link}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
