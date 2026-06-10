const DIFFS = [
  {
    num: '01',
    h: 'Co-created on your real work',
    p: 'Agentic use cases are built around your actual tasks, data, and workflows — not retrofitted generic examples.',
  },
  {
    num: '02',
    h: 'Led by practitioners',
    p: 'Sessions are run by people who have owned real outcomes, not career consultants selling theory.',
  },
  {
    num: '03',
    h: 'Measured by adoption',
    p: 'We track whether people actually use the agents in day-to-day work — not attendance or satisfaction scores.',
  },
  {
    num: '04',
    h: 'Built to reach production',
    p: 'Where others stop at training, we move high-impact agentic use cases into pilots and into production.',
  },
]

export function WfDiff() {
  return (
    <section className="wf-diff">
      <div className="wf-diff-top">
        <div className="wf-diff-label" data-reveal>Why Organisations Choose BlockVerse</div>
        <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
          Working agents —<br />not frameworks on a shelf.
        </h2>
      </div>
      <div className="wf-diff-rows">
        {DIFFS.map((d, i) => (
          <div className="wf-diff-row" data-reveal key={d.num} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="wf-diff-num">{d.num}</div>
            <div className="wf-diff-h">{d.h}</div>
            <div className="wf-diff-p">{d.p}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
