export function WfCta() {
  return (
    <section className="wf-cta-sec" id="contact">
      <div className="wf-cta-inner">
        <div className="wf-cta-label" data-reveal>Ready to Make Agentic AI Seamless</div>
        <h2 className="wf-cta-headline" data-reveal style={{ transitionDelay: '0.1s' }}>
          Let us bring agents<br />to <em>your workforce.</em>
        </h2>
        <p className="wf-cta-sub" data-reveal style={{ transitionDelay: '0.2s' }}>
          Every programme starts with understanding your organisation. Book a call and tell
          us who your teams are and where agents could help — we will shape the agentic
          adoption journey around it.
        </p>
        <div className="wf-cta-contacts" data-reveal style={{ transitionDelay: '0.2s' }}>
          <div className="wf-cta-contact">
            <div className="wf-cta-contact-name">Gaurav Gupta</div>
            <div className="wf-cta-contact-role">Founder and CEO</div>
            <a href="mailto:Gaurav@blockverseacademy.com" className="wf-cta-contact-email">
              Gaurav@blockverseacademy.com
            </a>
          </div>
          <div className="wf-cta-divider" />
          <div className="wf-cta-contact">
            <div className="wf-cta-contact-name">Nimish Vasishta</div>
            <div className="wf-cta-contact-role">Co-Founder and Investor</div>
            <a href="mailto:Nimish@blockverseacademy.com" className="wf-cta-contact-email">
              Nimish@blockverseacademy.com
            </a>
          </div>
        </div>
        <div className="wf-cta-btn-row" data-reveal style={{ transitionDelay: '0.3s' }}>
          <a
            href="mailto:Gaurav@blockverseacademy.com?subject=Workforce%20Agentic%20AI%20Adoption%20%E2%80%94%20Book%20a%20Call"
            className="wf-cta-btn"
          >
            Book a Call
          </a>
          {/* placeholder until the custom agentic platform site is live */}
          <a href="#" className="wf-cta-btn-ghost">Explore Custom Agents →</a>
        </div>
      </div>
    </section>
  )
}
