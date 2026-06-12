import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data'

const LINK_ROUTES: Record<string, string> = {
  Businesses: '/industries',
  'About Us': '/about',
}

/** Shared top-nav link list (`.nav-links`), used by the landing Hero and SiteNav. */
export function NavLinks() {
  return (
    <ul className="nav-links">
      {NAV_LINKS.map((link) => (
        <li key={link}>
          {LINK_ROUTES[link] ? <Link to={LINK_ROUTES[link]}>{link}</Link> : <a href="#">{link}</a>}
        </li>
      ))}
    </ul>
  )
}
