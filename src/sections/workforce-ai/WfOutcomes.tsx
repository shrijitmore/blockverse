const OUTCOMES = [
  {
    num: '01',
    title: 'From scattered agent pilots to structured adoption',
    desc: 'Siloed experiments give way to a shared approach with clear governance and agents embedded in real workflows.',
  },
  {
    num: '02',
    title: 'People who can brief, supervise, and trust agents',
    desc: 'Teams develop the habits and confidence to direct agents responsibly — and know exactly when to keep a human in the loop.',
  },
  {
    num: '03',
    title: 'Repetitive work handed to agents, safely',
    desc: 'Multi-step admin moves to agents while skilled people reinvest their time in interpretation, strategy, and collaboration.',
  },
  {
    num: '04',
    title: 'Agentic use cases grounded in real workflows',
    desc: 'Teams leave with pilot-ready opportunities — mapped against actual data, risk levels, and business impact.',
  },
  {
    num: '05',
    title: 'Agentic AI becomes a shared workforce capability',
    desc: 'Not an isolated experiment or a distant initiative. A living capability that grows across functions and teams.',
  },
]

export function WfOutcomes() {
  return (
    <section className="wf-outcomes" id="outcomes">
      <div className="wf-outcomes-top">
        <h2 data-reveal>What shifts when agents<br />join the <em>workforce.</em></h2>
        <p data-reveal style={{ transitionDelay: '0.1s' }}>
          Based on adoption outcomes observed across pharma, consumer goods, financial
          services, and HR functions.
        </p>
      </div>
      <div className="wf-outcomes-rows">
        {OUTCOMES.map((o, i) => (
          <div className="wf-outcome-row" data-reveal key={o.num} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="wf-o-num">{o.num}</div>
            <div className="wf-o-title">{o.title}</div>
            <div className="wf-o-desc">{o.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
