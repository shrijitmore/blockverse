const ROLES = [
  'Chief Executive Officers',
  'Board Members & Chairpersons',
  'C-Suite Executives',
  'Senior Advisors & NEDs',
  'Partners & Managing Directors',
  'Founders at Scale',
]

export function ExecWho() {
  return (
    <section className="exec-who" id="who">
      <div className="exec-who-inner">
        <div className="exec-who-left">
          <div className="exec-who-label" data-reveal>Who This Is For</div>
          <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
            Senior leaders who don't have time<br /><em>to wait.</em>
          </h2>
          <p data-reveal style={{ transitionDelay: '0.2s' }}>
            AI is already on every board agenda and in every client conversation. This programme is for those who
            choose to lead it — not follow it.
          </p>
        </div>
        <div className="exec-who-roles" data-reveal="right">
          {ROLES.map((role) => (
            <div className="exec-who-role" key={role}>
              {role} <span>→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
