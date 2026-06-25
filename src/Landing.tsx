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
import { useSeo } from './useSeo'

export function Landing() {
  const { hash } = useLocation()

  useSeo({
    title: 'Blockverse Technologies | Customised AI Adoption Systems',
    description:
      'Blockverse Technologies helps companies adopt AI and embed it in their real work — custom AI adoption systems built into how leaders, teams, and workflows already run, not bolted on after.',
    path: '/',
  })

  // Support /#how and /#contact links (from inner pages or direct load) — wait a tick for layout.
  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60)
    return () => clearTimeout(t)
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
