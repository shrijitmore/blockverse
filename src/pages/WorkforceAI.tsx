import { InnerPageFrame } from '../components/InnerPageFrame'
import { useSeo } from '../useSeo'

/** AI Adoption for Teams (Workforce) inner page — renders the standalone design bundle in public/inner. */
export function WorkforceAI() {
  useSeo({
    title: 'AI Adoption for Teams | Blockverse Technologies',
    description:
      'Role-by-role AI enablement inside the tools your teams already use — hands-on playbooks that turn "we have AI" into "we use AI."',
    path: '/workforce-ai-adoption',
  })

  return <InnerPageFrame src="/inner/teams.html" title="AI Adoption for Teams | Blockverse" />
}
