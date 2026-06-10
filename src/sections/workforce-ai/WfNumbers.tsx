const NUMBERS = [
  { val: '500+', label: 'Professionals trained' },
  { val: '4.75', suffix: '/5', label: 'Average workshop rating' },
  { val: '85%', label: 'Applied AI to work within one week' },
  { val: '100%', label: 'Corporate programmes led to pilots' },
]

export function WfNumbers() {
  return (
    <section className="wf-numbers">
      <div className="wf-numbers-inner">
        {NUMBERS.map((n, i) => (
          <div className="wf-num-cell" data-reveal key={n.val} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="wf-num-val">
              {n.val}
              {n.suffix && <span style={{ fontSize: '0.5em', color: 'var(--wfa-muted)' }}>{n.suffix}</span>}
            </div>
            <div className="wf-num-label">{n.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
