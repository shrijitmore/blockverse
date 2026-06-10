const PILLARS = [
  {
    num: '01',
    title: 'Private',
    body: 'No audience. No cohort. No pressure. A space to explore freely and build fluency entirely on your terms.',
  },
  {
    num: '02',
    title: 'Practical',
    body: 'Live work on your actual decisions — board preparation, market analysis, strategic challenges. Real work, not simulations.',
  },
  {
    num: '03',
    title: 'Bespoke',
    body: 'No fixed curriculum. Every session shaped around you. Your role, your industry, your world.',
  },
]

export function ExecPillars() {
  return (
    <section className="exec-pillars">
      <div className="exec-pillars-header" data-reveal>
        <h2>Built for how<br />executives learn.</h2>
        <p>Your challenges drive the content.<br />Your aspirations set the pace.</p>
      </div>
      <div className="exec-pillars-grid">
        {PILLARS.map((p, i) => (
          <div className="exec-pillar" data-reveal key={p.num} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
            <div className="exec-pillar-fill" />
            <div className="exec-pillar-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
