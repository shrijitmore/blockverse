export function WfAgentic() {
  return (
    <section className="wf-agentic" id="agentic">
      <div className="wf-agentic-rule" />
      <div className="wf-agentic-inner">
        <div>
          <div className="wf-agentic-label" data-reveal>From Adoption to Agents</div>
          <h2 data-reveal style={{ transitionDelay: '0.1s' }}>
            Then we build<br /><em>your agents.</em>
          </h2>
          <p data-reveal style={{ transitionDelay: '0.2s' }}>
            Adoption and agents go hand in hand. As your teams get fluent, we build the
            agentic systems that run inside their real workflows — end to end, on our
            custom agentic platform.
          </p>
          {/* placeholder until the custom agentic platform site is live */}
          <a href="#" className="wf-agentic-btn" data-reveal style={{ transitionDelay: '0.3s' }}>
            Explore Custom Agents
            <svg viewBox="0 0 24 24"><path d="M5 12h12.17l-5.59-5.59L13 5l8 8-8 8-1.41-1.41L17.17 13H5z" /></svg>
          </a>
        </div>
        <div className="wf-agentic-card" data-reveal="right" style={{ transitionDelay: '0.1s' }}>
          <div className="wf-agentic-card-eyebrow">Custom Agentic Platform</div>
          <h4>Agents your workforce actually uses</h4>
          <ul className="wf-agentic-feats">
            <li>Agents mapped to your real tasks and decisions</li>
            <li>Built on the workflows your teams already adopted</li>
            <li>Governance and human oversight by design</li>
            <li>Pilot-ready, then scaled into production</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
