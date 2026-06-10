const OUTCOMES = [
  {
    num: '01',
    title: 'Gain instant credibility on AI',
    desc: 'Be the leader in the room who gets it — in client conversations, at conferences, at the boardroom table.',
  },
  {
    num: '02',
    title: 'Translate hype into decisions',
    desc: 'Stop nodding politely. Start asking the questions that actually matter — and govern AI proposals with independence.',
  },
  {
    num: '03',
    title: 'Use AI as a strategic advisor',
    desc: 'Market analysis, scenario planning, board preparation, talent strategy. Actual tools. Actual prompts. Actual results.',
  },
  {
    num: '04',
    title: 'Lead AI across your organisation',
    desc: 'Workforce implications, role redesign, reskilling — with the vocabulary, confidence, and 90-day plan to drive it.',
  },
  {
    num: '05',
    title: 'Save 5–10 hours every week',
    desc: 'By embedding AI into research, drafting, analysis, and communication — the tasks currently eating your time.',
  },
]

export function ExecOutcomes() {
  return (
    <section className="exec-outcomes">
      <div className="exec-outcomes-top">
        <h2 data-reveal>What you'll do<br /><em>differently.</em></h2>
        <p data-reveal style={{ transitionDelay: '0.1s' }}>
          This depends on you — which is the whole point. But here's what AI-capable senior leaders consistently
          walk away with.
        </p>
      </div>
      <div className="exec-outcomes-rows">
        {OUTCOMES.map((o, i) => (
          <div className="exec-outcome-row" data-reveal key={o.num} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="exec-o-num">{o.num}</div>
            <div className="exec-o-title">{o.title}</div>
            <div className="exec-o-desc">{o.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
