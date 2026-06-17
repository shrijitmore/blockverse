import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AboutGeo } from './sections/about/AboutGeo'
import { Brands } from './sections/Brands'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Gap } from './sections/Gap'
import { Hero } from './sections/Hero'
import { Layers } from './sections/Layers'
import { Mega } from './sections/Mega'
import { Statement } from './sections/Statement'

export function Landing() {
  const { hash } = useLocation()

  // Support /#contact links from inner pages (router navigation skips native anchor scroll)
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <main>
      <div className="page-glow" aria-hidden="true" />
      <Hero />
      <Statement />
      <Brands />
      <Mega />
      <Layers />
      <Gap />
      <AboutGeo />
      <Contact />
      <Footer />
    </main>
  )
}
