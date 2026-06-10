const STEPS = [
  {
    letter: '1',
    title: 'Assist',
    items: ['Agents support real tasks', 'Person stays in control', 'Confidence builds early'],
    tag: 'Trust · Confidence',
  },
  {
    letter: '2',
    title: 'Automate',
    items: ['Repetitive steps handed off', 'Clear briefs and guardrails', 'Time returned to people'],
    tag: 'Hand-off · Time',
  },
  {
    letter: '3',
    title: 'Orchestrate',
    items: ['Agents run multi-step work', 'Connected across tools', 'Embedded in real workflows'],
    tag: 'Workflow · Scale',
  },
  {
    letter: '4',
    title: 'Oversee',
    items: ['Human in the loop', 'Governance and accountability', 'Safe, responsible adoption'],
    tag: 'Governance · Trust',
  },
]

export function WfFramework() {
  return (
    <section className="wf-framework">
      <div className="wf-framework-top">
        <h2 data-reveal>How agents enter<br />the workforce.</h2>
        <p data-reveal style={{ transitionDelay: '0.1s' }}>
          One clear model for where agentic AI fits — from a first assisted task to fully
          orchestrated workflows your teams trust and oversee.
        </p>
      </div>
      <div className="wf-framework-grid">
        {STEPS.map((s, i) => (
          <div className="wf-fw-cell" data-reveal key={s.letter} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
            <div className="wf-fw-letter">{s.letter}</div>
            <div className="wf-fw-title">{s.title}</div>
            <ul className="wf-fw-items">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <span className="wf-fw-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
