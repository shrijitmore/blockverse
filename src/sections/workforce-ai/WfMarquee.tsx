const PHRASES = [
  'Agents in Real Workflows',
  'Behavioural First',
  'Human in the Loop',
  'Governance by Design',
  '500+ Professionals Trained',
  'Adoption from Day One',
  'Pilot to Production',
]

export function WfMarquee() {
  const items = [...PHRASES, ...PHRASES]
  return (
    <div className="wf-marquee-strip">
      <div className="wf-marquee-track">
        {items.map((phrase, i) => (
          <span key={i}>
            {phrase}
            <span className="wf-dot"> ◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
