import '../styles/executive.css'
import { useScrollReveal } from '../hooks'
import { ExecNav } from '../sections/executive/ExecNav'
import { ExecHero } from '../sections/executive/ExecHero'
import { ExecMarquee } from '../sections/executive/ExecMarquee'
import { ExecStatement } from '../sections/executive/ExecStatement'
import { ExecPillars } from '../sections/executive/ExecPillars'
import { ExecOutcomes } from '../sections/executive/ExecOutcomes'
import { ExecWho } from '../sections/executive/ExecWho'
import { ExecGaurav } from '../sections/executive/ExecGaurav'
import { ExecForm } from '../sections/executive/ExecForm'
import { ExecBrochure } from '../sections/executive/ExecBrochure'
import { ExecFooter } from '../sections/executive/ExecFooter'

export function ExecutiveAI() {
  const { containerRef } = useScrollReveal<HTMLDivElement>()

  return (
    <div className="executive-page" ref={containerRef}>
      <ExecNav />
      <ExecHero />
      <ExecMarquee />
      <ExecStatement />
      <ExecPillars />
      <ExecOutcomes />
      <ExecWho />
      <ExecGaurav />
      <ExecForm />
      <ExecBrochure />
      <ExecFooter />
    </div>
  )
}
