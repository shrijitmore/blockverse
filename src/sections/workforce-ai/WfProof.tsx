const CASES = [
  {
    tag: 'Global Pharma · Regulated',
    title: 'Agent-ready adoption for cross-functional pharma teams',
    desc: 'Teams across Regulatory, Quality, R&D, and Commercial moved beyond siloed trials toward responsible adoption — with governance, source validation, and human accountability built in around the agents.',
    results: [
      { val: 'Pilot-ready', label: 'Use cases from real workflows' },
      { val: 'Human-led', label: 'Oversight by design' },
    ],
  },
  {
    tag: 'Consumer Goods · HR & Business',
    title: 'Workforce adoption for HR and people teams',
    desc: 'HR teams handed repetitive, multi-step admin to AI and reinvested the time in strategy, talent, and culture — with clear rules for where agents help and where people stay in charge.',
    results: [
      { val: 'Less admin', label: 'More strategic contribution' },
      { val: 'Responsible', label: 'Governance-aware adoption' },
    ],
  },
]

export function WfProof() {
  return (
    <section className="wf-proof" id="proof">
      <div className="wf-proof-top">
        <div>
          <div className="wf-proof-label" data-reveal>Proof in the Field</div>
          <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
            Adoption that moved<br />into <em>real workflows.</em>
          </h2>
        </div>
        <p data-reveal style={{ transitionDelay: '0.2s' }}>
          A snapshot of how global teams moved from fragmented AI experiments to
          structured, responsible, agent-ready adoption inside their day-to-day work.
        </p>
      </div>
      <div className="wf-proof-grid">
        {CASES.map((c, i) => (
          <div className="wf-case-card" data-reveal key={c.tag} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
            <span className="wf-case-tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="wf-case-result">
              {c.results.map((r) => (
                <div key={r.val}>
                  <div className="wf-case-result-val">{r.val}</div>
                  <div className="wf-case-result-label">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
