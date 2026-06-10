import { AboutGeo } from './sections/about/AboutGeo'
import { Brands } from './sections/Brands'
import { CaseStudies } from './sections/CaseStudies'
import { Footer } from './sections/Footer'
import { Gap } from './sections/Gap'
import { Hero } from './sections/Hero'
import { Layers } from './sections/Layers'
import { Mega } from './sections/Mega'
import { ProvenPath } from './sections/ProvenPath'
import { Statement } from './sections/Statement'

export function Landing() {
  return (
    <main>
      <div className="page-glow" aria-hidden="true" />
      <Hero />
      <Statement />
      <Brands />
      <Mega />
      <Layers />
      <Gap />
      <ProvenPath />
      <CaseStudies />
<AboutGeo />
      <Footer />
    </main>
  )
}
