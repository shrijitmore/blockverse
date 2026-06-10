const TIERS = [
  {
    num: '1',
    title: 'Leaders Set Direction',
    body: 'Leaders gain the confidence to decide where agents add value, set guardrails, and govern agentic adoption with independence.',
  },
  {
    num: '2',
    title: 'Teams Work With Agents',
    body: 'People learn to brief, supervise, and trust agents inside the workflows they already own — lifting output without losing control.',
  },
  {
    num: '3',
    title: 'A Shared Capability',
    body: 'Agentic AI spreads through culture and shared habits — not isolated experiments that fade after a single workshop.',
  },
]

export function WfTiers() {
  return (
    <section className="wf-tiers">
      <div className="wf-tiers-top">
        <div className="wf-tiers-label" data-reveal>Agentic Adoption at Every Level</div>
        <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
          One programme.<br />Three levels of <em>adoption.</em>
        </h2>
      </div>
      <div className="wf-tiers-grid">
        {TIERS.map((t, i) => (
          <div className="wf-tier-card" data-reveal key={t.num} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
            <div className="wf-tier-num">{t.num}</div>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
