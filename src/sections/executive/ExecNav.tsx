import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function ExecNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`exec-nav${scrolled ? ' exec-nav--scrolled' : ''}`}>
      <Link to="/" className="exec-nav-logo">
        <img className="exec-nav-logo-img" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
      </Link>
      <div className="exec-nav-right">
        <a href="#about" className="exec-nav-link">Programme</a>
        <a href="#who" className="exec-nav-link">Who It's For</a>
        <a href="#apply" className="exec-nav-apply">Apply Now</a>
      </div>
    </nav>
  )
}
