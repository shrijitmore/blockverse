import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function WfNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`wf-nav${scrolled ? ' wf-nav--scrolled' : ''}`}>
      <Link to="/" className="wf-nav-logo">
        <img className="wf-nav-logo-img" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
      </Link>
      <div className="wf-nav-right">
        <a href="#approach" className="wf-nav-link">Approach</a>
        <a href="#proof" className="wf-nav-link">Proof</a>
        <a href="#outcomes" className="wf-nav-link">Outcomes</a>
        <a href="#contact" className="wf-nav-cta">Book a Call</a>
      </div>
    </nav>
  )
}
