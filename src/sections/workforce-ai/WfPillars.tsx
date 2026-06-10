const PILLARS = [
  {
    num: '01',
    title: 'Behavioural First',
    body: 'We map how each person learns to trust, brief, and supervise an agent. Adoption is a behaviour, not a deployment.',
  },
  {
    num: '02',
    title: 'Workflow Mapped',
    body: 'Every session is built around real tasks, decisions, and roles. Agents slot directly into the work your people already do.',
  },
  {
    num: '03',
    title: 'Pilot to Production',
    body: 'We do not stop at workshops. We identify high-impact agentic use cases, run pilots, measure outcomes, and scale what works.',
  },
]

export function WfPillars() {
  return (
    <section className="wf-pillars">
      <div className="wf-pillars-header" data-reveal>
        <h2>Three things that make agentic adoption stick.</h2>
        <p>No generic demos. No abandoned pilots. No agents nobody trusts.</p>
      </div>
      <div className="wf-pillars-grid">
        {PILLARS.map((p, i) => (
          <div className="wf-pillar" data-reveal key={p.num} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
            <div className="wf-pillar-fill" />
            <div className="wf-pillar-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
