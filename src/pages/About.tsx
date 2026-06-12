import '../styles/about.css'
import { SiteNav } from '../components/SiteNav'
import { AboutHero } from '../sections/about/AboutHero'
import { AboutStory } from '../sections/about/AboutStory'
import { AboutHow } from '../sections/about/AboutHow'
import { AboutTeam } from '../sections/about/AboutTeam'
import { AboutGeo } from '../sections/about/AboutGeo'
import { AboutJoin } from '../sections/about/AboutJoin'

export function About() {
  return (
    <main className="about-page">
      <SiteNav />
      <AboutHero />
      <AboutStory />
      <AboutHow />
      <AboutTeam />
      <AboutGeo />
      <AboutJoin />
    </main>
  )
}
