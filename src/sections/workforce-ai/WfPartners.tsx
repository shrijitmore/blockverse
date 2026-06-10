const PARTNERS = [
  'Google',
  'Deloitte',
  'Signify',
  'CompTIA',
  'Sun Pharma',
  'General Mills',
  'Government of the Netherlands',
  'XtraAdvice',
  'International Women in Tech',
  'Polish Professional Women',
]

export function WfPartners() {
  return (
    <section className="wf-partners">
      <div className="wf-partners-inner">
        <div className="wf-partners-label" data-reveal>Trusted by Global Teams &amp; Institutions</div>
        <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
          500+ professionals trained across 7 companies and institutions.
        </h2>
        <div className="wf-partners-list" data-reveal style={{ transitionDelay: '0.2s' }}>
          {PARTNERS.map((p) => (
            <span className="wf-partner-chip" key={p}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
