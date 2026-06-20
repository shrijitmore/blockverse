import '../styles/built-in-method.css'
import { SiteNav } from '../components/SiteNav'
import { Footer } from '../sections/Footer'

export function BuiltInMethod() {
  return (
    <main className="b-wrap">
      <SiteNav />

      <div className="b-page">
        {/* HEADER */}
        <header className="b-pad">
          <div className="b-head-top">
            <img className="b-logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
            <span className="b-kicker">The Methodology</span>
          </div>
          <div className="b-hero">
            <div>
              <h1 className="b-anton">
                The <span className="b-grad">Built-In</span> Method<span className="b-tm">™</span>
              </h1>
              <div className="b-tagline">
                Built in, <span className="b-pf b-grad">not bolted on.</span>
              </div>
              <p className="b-lede">AI adoption works best when it is designed around real work.</p>
              <p className="b-lede">
                The Built-In Method™ helps companies weave AI into the workflows, decisions, systems, and daily
                behaviours that already run the business.
              </p>
              <p className="b-lede">
                We start by mapping where work happens today — the handovers, approvals, documents, data flows, and
                repeated decisions. Then we redesign those workflows with AI built in, creating customised agentic
                systems that support teams, improve execution, and make adoption feel natural.
              </p>
              <p className="b-lede">This is AI shaped around your business.</p>
              <p className="b-lede">
                <b>Built into work.</b> <span className="b-grad">Not bolted on.</span>
              </p>
            </div>
            <img className="b-boy" src="/assets/BoyTransparent.png" alt="A child enjoying ice cream — no manual required" />
          </div>
        </header>

        {/* PRINCIPLE */}
        <div className="b-pad" style={{ paddingTop: 0 }}>
          <div className="b-glass b-principle">
            <div className="b-q">
              Nobody reads the manual. When AI is <span className="b-grad">built in, it gets used</span> — on instinct.
            </div>
            <div className="b-sub">
              A child needs no manual to enjoy an ice cream. Bolted-on AI ships a manual nobody opens. The Built-In
              Method removes the manual — one system, three layers.
            </div>
          </div>
        </div>

        {/* METHOD */}
        <div className="b-pad" style={{ paddingTop: 6 }}>
          <div className="b-section-label">The method — one system, three layers</div>
          <div className="b-layers">
            <div className="b-layer b-glass">
              <div className="b-num b-grad">
                01<small>Fluency</small>
              </div>
              <div>
                <h3>Executive AI Capability</h3>
                <span className="b-role">Leaders set direction</span>
                <p>
                  Fluent leaders sponsor and govern AI with confidence — built around the decisions they actually make.
                  Decision-making is now the <b>#1 workplace use of AI</b>, so fluency starts at the top, or adoption
                  never sticks.
                </p>
              </div>
            </div>
            <div className="b-layer b-glass">
              <div className="b-num b-grad">
                02<small>Adoption</small>
              </div>
              <div>
                <h3>Workforce AI Adoption</h3>
                <span className="b-role">Teams work with agents</span>
                <p>
                  Role-by-role enablement inside the tools people already open every day. Not training, not awareness —
                  behaviour. People learn to brief, supervise, and trust agents until using them is instinct.
                </p>
              </div>
            </div>
            <div className="b-layer b-glass">
              <div className="b-num b-grad">
                03<small>Agents</small>
              </div>
              <div>
                <h3>
                  Custom <span className="b-brace">{'{'}</span> Agentic <span className="b-brace">{'}'}</span> Systems
                </h3>
                <span className="b-role">Work gets done</span>
                <p>
                  Agents custom-built into your existing stack — ERP, CRM, HRIS — vendor-neutral and sovereign. They
                  don't suggest; they execute, end to end, inside the workflows your teams already adopted.
                </p>
              </div>
            </div>
          </div>
          <div className="b-seam b-anton">
            <span className="b-grad">One system · Three layers</span>
          </div>
        </div>

        {/* WHY DIFFERENT */}
        <div className="b-pad" style={{ paddingTop: 6 }}>
          <div className="b-section-label">Why it's different</div>
          <div className="b-vs">
            <div className="b-side b-bolt-side">
              <div className="b-vlabel">Bolted on</div>
              <div className="b-vtext">
                Built into someone else's platform. Agentforce lives in Salesforce. Copilot lives in Microsoft. You bend
                your business to their tool.
              </div>
            </div>
            <div className="b-vmid">
              <span className="b-vbadge">vs</span>
            </div>
            <div className="b-side b-built-side">
              <div className="b-vlabel">Built in</div>
              <div className="b-vtext">
                Built into <b>your</b> business — every system, every team, vendor-neutral. The AI bends to how you
                already work.
              </div>
            </div>
          </div>
          <div className="b-compare">
            <div className="b-col b-bolt">
              <h4 className="b-anton">Bolted on</h4>
              <ul>
                <li>Built into someone else's platform — Agentforce in Salesforce, Copilot in Microsoft</li>
                <li>Generic templates, retrofitted later</li>
                <li>Installed, then ignored — shadow AI</li>
                <li>Measured by seats sold, not work done</li>
              </ul>
            </div>
            <div className="b-col b-built">
              <h4 className="b-anton">Built in</h4>
              <ul>
                <li>
                  Built into <b>your</b> business — every system, every team, vendor-neutral
                </li>
                <li>Custom-trained on your workflows and data</li>
                <li>Adopted on instinct — because it fits the work</li>
                <li>Measured by outcomes and usage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROOF */}
        <div className="b-pad" style={{ paddingTop: 6 }}>
          <div className="b-section-label">Proof, not promises</div>
          <div className="b-proof">
            <div className="b-stat b-glass">
              <div className="b-big b-grad">89%</div>
              <div className="b-lbl">AR collection rate · $574k net annual benefit, one client</div>
            </div>
            <div className="b-stat b-glass">
              <div className="b-big b-grad">18k+</div>
              <div className="b-lbl">Emergency dispatches across 886 cities, autonomously</div>
            </div>
            <div className="b-stat b-glass">
              <div className="b-big b-grad">50%</div>
              <div className="b-lbl">Faster hiring cycles — zero extra recruiters</div>
            </div>
            <div className="b-stat b-glass">
              <div className="b-big b-grad">500+</div>
              <div className="b-lbl">Professionals trained · 4.75 average rating</div>
            </div>
          </div>
        </div>

        {/* HOW WE WORK */}
        <div className="b-pad" style={{ paddingTop: 6 }}>
          <div className="b-section-label" style={{ textAlign: 'center' }}>
            How we work
          </div>
          <h2 className="b-work-title">
            A proven path to <span className="b-grad">scale.</span>
          </h2>
          <p className="b-work-sub">How we build it in — measurable ROI in weeks, not months.</p>
          <div className="b-works">
            <div className="b-work b-glass">
              <span className="b-corner" />
              <div className="b-work-head">
                <span className="b-ic">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <polygon points="15.5,8.5 11,11 8.5,15.5 13,13" />
                  </svg>
                </span>
                <span className="b-wnum">01</span>
              </div>
              <h3>Discover &amp; Design</h3>
              <p>
                We map your unique organisational terrain — understanding business goals, identifying high-friction
                processes, and crafting bespoke AI architectures tailored to your specific people and operational
                realities.
              </p>
              <img className="b-work-img" src="/assets/Discover_and_Design.png" alt="Discover and design" />
              <span className="b-watermark">01</span>
            </div>

            <div className="b-work b-glass">
              <span className="b-corner" />
              <div className="b-work-head">
                <span className="b-ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
                    <path d="M7.5 15h9" />
                  </svg>
                </span>
                <span className="b-wnum">02</span>
              </div>
              <h3>Pilot</h3>
              <p>
                Deploying in controlled, high-impact environments. We test, learn, and refine the agentic systems
                against real-world scenarios — establishing crucial guardrails and observability metrics.
              </p>
              <img className="b-work-img" src="/assets/Pilot.jpeg" alt="Pilot" />
              <span className="b-watermark">02</span>
            </div>

            <div className="b-work b-glass">
              <span className="b-corner" />
              <div className="b-work-head">
                <span className="b-ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3c3.5 1.5 6 5 6 9l-2.5 2.5h-7L6 12c0-4 2.5-7.5 6-9z" />
                    <circle cx="12" cy="10" r="1.6" />
                    <path d="M9 17l-1.5 3M15 17l1.5 3" />
                  </svg>
                </span>
                <span className="b-wnum">03</span>
              </div>
              <h3>Deploy</h3>
              <p>
                Integration into your existing enterprise systems. We bridge the gap between prototype and production —
                API connections, security layers, and minimal disruption to ongoing operations.
              </p>
              <span className="b-watermark">03</span>
            </div>

            <div className="b-work b-glass">
              <span className="b-corner" />
              <div className="b-work-head">
                <span className="b-ic">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19V5M4 19h16" />
                    <path d="M7 15l4-4 3 3 5-6" />
                    <path d="M19 11V8h-3" />
                  </svg>
                </span>
                <span className="b-wnum">04</span>
              </div>
              <h3>Scale &amp; Optimise</h3>
              <p>
                Continuous improvement through usage analytics. We monitor agent performance, expand impact across
                adjacent workflows, and dynamically optimise the systems to drive ongoing ROI.
              </p>
              <span className="b-watermark">04</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="b-pad" style={{ paddingTop: 0 }}>
          <div className="b-glass b-cta">
            <div>
              <h3>
                Tell us where the friction is. <span className="b-grad">We'll build in the rest.</span>
              </h3>
              <p>
                A focused 30-minute conversation maps your biggest operational bottleneck — and where built-in AI pays
                back first.
              </p>
              <div className="b-contact">
                blockverseacademy.com · support@blockverseacademy.com · Netherlands · GCC · India
              </div>
            </div>
            <a href="/#contact" className="b-btn b-anton">
              Map your friction →
            </a>
          </div>
        </div>

        <div className="b-footnote">
          Adoption figures: Microsoft Work Trend Index, 2026. Results are from specific client engagements and are, by
          design, atypical — outcomes depend on your workflows, data, and starting point. The Built-In Method™ is a
          methodology of Blockverse Technologies.ai.
        </div>
      </div>

      <Footer />
    </main>
  )
}
