import '../styles/workforce-ai.css'
import { useScrollReveal } from '../hooks'
import { WfNav } from '../sections/workforce-ai/WfNav'
import { WfHero } from '../sections/workforce-ai/WfHero'
import { WfMarquee } from '../sections/workforce-ai/WfMarquee'
import { WfStatement } from '../sections/workforce-ai/WfStatement'
import { WfPillars } from '../sections/workforce-ai/WfPillars'
import { WfFramework } from '../sections/workforce-ai/WfFramework'
import { WfTiers } from '../sections/workforce-ai/WfTiers'
import { WfOutcomes } from '../sections/workforce-ai/WfOutcomes'
import { WfNumbers } from '../sections/workforce-ai/WfNumbers'
import { WfProof } from '../sections/workforce-ai/WfProof'
import { WfDiff } from '../sections/workforce-ai/WfDiff'
import { WfWho } from '../sections/workforce-ai/WfWho'
import { WfPartners } from '../sections/workforce-ai/WfPartners'
import { WfFounders } from '../sections/workforce-ai/WfFounders'
import { WfAgentic } from '../sections/workforce-ai/WfAgentic'
import { WfCta } from '../sections/workforce-ai/WfCta'
import { WfFooter } from '../sections/workforce-ai/WfFooter'

export function WorkforceAI() {
  const { containerRef } = useScrollReveal<HTMLDivElement>()

  return (
    <div className="wf-page" ref={containerRef}>
      <WfNav />
      <WfHero />
      <WfMarquee />
      <WfStatement />
      <WfPillars />
      <WfFramework />
      <WfTiers />
      <WfOutcomes />
      <WfNumbers />
      <WfProof />
      <WfDiff />
      <WfWho />
      <WfPartners />
      <WfFounders />
      <WfAgentic />
      <WfCta />
      <WfFooter />
    </div>
  )
}
