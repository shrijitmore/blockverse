import '../styles/about.css'
import { SiteNav } from '../components/SiteNav'
import { AboutHero } from '../sections/about/AboutHero'
import { AboutIntro } from '../sections/about/AboutIntro'
import { AboutTeam } from '../sections/about/AboutTeam'
import { AboutGeo } from '../sections/about/AboutGeo'
import { AboutJoin } from '../sections/about/AboutJoin'
import { useSeo } from '../useSeo'

export function About() {
  useSeo({
    title: 'About Us | Blockverse Technologies',
    description:
      'Blockverse Technologies is a Netherlands-headquartered AI adoption company working with enterprises across 8 countries and 4 continents to embed AI into real work.',
    path: '/about',
  })

  return (
    <main className="about-page">
      <SiteNav />
      <AboutHero />
      <AboutIntro />
      <AboutTeam />
      <AboutGeo />
      <AboutJoin />
    </main>
  )
}
