import { InnerPageFrame } from '../components/InnerPageFrame'
import { useSeo } from '../useSeo'

/** Executive AI Capability inner page — renders the standalone design bundle in public/inner. */
export function ExecutiveAI() {
  useSeo({
    title: 'Executive AI Capability | Blockverse Technologies',
    description:
      'Take your leaders from AI-curious to AI-fluent with working sessions built on your data and your decisions — adoption gets a mandate, not a maybe.',
    path: '/executive-ai-capability',
  })

  return <InnerPageFrame src="/inner/executive.html" title="Executive AI Capability | Blockverse" />
}
