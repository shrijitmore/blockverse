const FOUNDERS = [
  { initial: 'GG', name: 'Gaurav Gupta', role: 'Founder & CEO', email: 'Gaurav@blockverseacademy.com' },
  { initial: 'NV', name: 'Nimish Vasishta', role: 'Co-Founder & Investor', email: 'Nimish@blockverseacademy.com' },
]

export function WfFounders() {
  return (
    <section className="wf-founders">
      <div className="wf-founders-top">
        <div className="wf-founders-label" data-reveal>The People Behind the Programme</div>
        <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
          Practitioners who have owned <em>real outcomes.</em>
        </h2>
      </div>
      <div className="wf-founders-grid">
        {FOUNDERS.map((f, i) => (
          <div className="wf-founder-card" data-reveal key={f.email} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
            <div className="wf-founder-photo">{f.initial}</div>
            <div>
              <div className="wf-founder-name">{f.name}</div>
              <div className="wf-founder-role">{f.role}</div>
              <a href={`mailto:${f.email}`} className="wf-founder-email">{f.email}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
