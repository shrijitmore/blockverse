const ROLES = [
  'HR and People Teams',
  'Regulatory and Quality Functions',
  'Commercial and Sales Teams',
  'Finance and Operations',
  'Leadership and Executive Groups',
  'Cross-Functional Cohorts',
]

export function WfWho() {
  return (
    <section className="wf-who">
      <div className="wf-who-inner">
        <div className="wf-who-left">
          <div className="wf-who-label" data-reveal>Who We Work With</div>
          <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
            Any function.<br />Any sector.<br /><em>Real work.</em>
          </h2>
          <p data-reveal style={{ transitionDelay: '0.2s' }}>
            We have built agentic AI adoption programmes for teams across highly regulated
            industries and fast-moving commercial environments. The approach adapts. The
            outcomes do not.
          </p>
        </div>
        <div className="wf-who-roles" data-reveal="right">
          {ROLES.map((role) => (
            <div className="wf-who-role" key={role}>
              {role} <span className="wf-arr">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
