import '../styles/about.css'
import { AboutHero } from '../sections/about/AboutHero'
import { AboutStory } from '../sections/about/AboutStory'
import { AboutHow } from '../sections/about/AboutHow'
import { AboutTeam } from '../sections/about/AboutTeam'
import { AboutGeo } from '../sections/about/AboutGeo'
import { AboutJoin } from '../sections/about/AboutJoin'

export function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutHow />
      <AboutTeam />
      <AboutGeo />
      <AboutJoin />
    </main>
  )
}
