import { useState } from 'react'

const STEPS = ['About You', 'Your AI Starting Point', 'Your World', 'Shape the Programme', 'Defining Success']

const LEVELS = [
  { value: 'aware', name: 'Aware', desc: "AI is important — I haven't engaged with it personally yet" },
  { value: 'curious', name: 'Curious', desc: "I've explored a little and want to understand what's possible" },
  { value: 'literate', name: 'Literate', desc: 'I have a working understanding and use AI occasionally' },
  { value: 'fluent', name: 'Fluent', desc: 'I use AI regularly and hold informed conversations about it' },
  { value: 'shaping', name: 'Shaping', desc: 'I actively shape AI decisions and strategy in my organisation' },
]

const BALANCE_OPTS = [
  { value: 'practical', label: 'Mostly Practical' },
  { value: 'balanced', label: 'Balanced Mix' },
  { value: 'conceptual', label: 'Mostly Conceptual' },
]

const TIME_OPTS = [
  { value: '<30', label: '<30 min' },
  { value: '30-60', label: '30–60 min' },
  { value: '1-2h', label: '1–2 hours' },
  { value: '2h+', label: '2+ hours' },
]

const FOCUS_AREAS = [
  'AI in my day-to-day decision-making',
  'AI strategy and investment decisions for my organisation',
  'Workforce implications — reskilling, role redesign, structure',
  'AI governance, ethics, and responsible use',
  'Becoming more effective and productive personally',
  'Leading and communicating AI change to teams and boards',
]

export function ExecForm() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [org, setOrg] = useState('')
  const [level, setLevel] = useState('')
  const [context, setContext] = useState('')
  const [balance, setBalance] = useState('')
  const [time, setTime] = useState('')
  const [focusAreas, setFocusAreas] = useState<string[]>([])
  const [success, setSuccess] = useState('')

  const toggleFocusArea = (area: string) => {
    setFocusAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]))
  }

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) {
      setStep(0)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="exec-form-sec" id="apply">
      <div className="exec-form-header">
        <h2 data-reveal>Start your<br />personalised intake.</h2>
        <p data-reveal style={{ transitionDelay: '0.1s' }}>
          Every engagement is bespoke. This short intake helps us understand your priorities, your starting point,
          and what success looks like for you. Your responses are confidential.
        </p>
      </div>
      <div className="exec-form-wrap" data-reveal>
        <div className="exec-form-sidebar">
          <div className="exec-form-sidebar-title">Your Intake</div>
          <div className="exec-form-progress" style={{ marginBottom: '32px' }}>
            <div className="exec-form-progress-bar" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
          <div className="exec-sidebar-steps">
            {STEPS.map((title, i) => (
              <div className={`exec-sidebar-step${i === step ? ' exec-active' : ''}`} key={title}>
                <div className="exec-step-dot">{i + 1}</div>
                <div className="exec-step-title">{title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="exec-form-main">
          {!submitted ? (
            <>
              {step === 0 && (
                <div className="exec-form-panel exec-active">
                  <div className="exec-fp-title">About You</div>
                  <div className="exec-fp-sub">Just the basics so we can personalise your experience.</div>
                  <div className="exec-fg-row">
                    <div className="exec-fg">
                      <label>Full Name *</label>
                      <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="exec-fg">
                      <label>Preferred Email *</label>
                      <input type="email" placeholder="you@organisation.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <div className="exec-fg-row">
                    <div className="exec-fg">
                      <label>Role / Title</label>
                      <input type="text" placeholder="e.g. CEO, Board Chair" value={role} onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <div className="exec-fg">
                      <label>Organisation</label>
                      <input type="text" placeholder="Your organisation" value={org} onChange={(e) => setOrg(e.target.value)} />
                    </div>
                  </div>
                  <div className="exec-form-nav-row">
                    <span />
                    <button className="exec-btn-next" onClick={() => setStep(1)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="exec-form-panel exec-active">
                  <div className="exec-fp-title">Where would you place yourself?</div>
                  <div className="exec-fp-sub">No right or wrong answers. This helps us meet you where you are.</div>
                  <div className="exec-level-opts">
                    {LEVELS.map((opt) => (
                      <label className={`exec-l-opt${level === opt.value ? ' exec-checked' : ''}`} key={opt.value}>
                        <input type="radio" name="lvl" value={opt.value} checked={level === opt.value} onChange={() => setLevel(opt.value)} />
                        <div>
                          <div className="exec-l-opt-name">{opt.name}</div>
                          <div className="exec-l-opt-desc">{opt.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="exec-form-nav-row">
                    <button className="exec-btn-prev" onClick={() => setStep(0)}>← Back</button>
                    <button className="exec-btn-next" onClick={() => setStep(2)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="exec-form-panel exec-active">
                  <div className="exec-fp-title">Your World</div>
                  <div className="exec-fp-sub">
                    Describe your role, the challenges you're navigating, and what's pressing right now. The more
                    you share, the more relevant every session becomes.
                  </div>
                  <div className="exec-fg">
                    <label>Your Context</label>
                    <textarea
                      placeholder="My role involves... The challenges I'm navigating... What's most pressing right now is..."
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                    />
                  </div>
                  <div className="exec-form-nav-row">
                    <button className="exec-btn-prev" onClick={() => setStep(1)}>← Back</button>
                    <button className="exec-btn-next" onClick={() => setStep(3)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="exec-form-panel exec-active">
                  <div className="exec-fp-title">Shape the Programme</div>
                  <div className="exec-fp-sub">These preferences help us design sessions that work for you.</div>
                  <div className="exec-fg" style={{ marginBottom: '28px' }}>
                    <label>Preferred balance</label>
                    <div className="exec-sp-opts">
                      {BALANCE_OPTS.map((opt) => (
                        <label className={`exec-sp-opt${balance === opt.value ? ' exec-checked' : ''}`} key={opt.value}>
                          <input type="radio" name="bal" value={opt.value} checked={balance === opt.value} onChange={() => setBalance(opt.value)} />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="exec-fg" style={{ marginBottom: '28px' }}>
                    <label>Time between sessions</label>
                    <div className="exec-t-opts">
                      {TIME_OPTS.map((opt) => (
                        <label className={`exec-t-opt${time === opt.value ? ' exec-checked' : ''}`} key={opt.value}>
                          <input type="radio" name="time" value={opt.value} checked={time === opt.value} onChange={() => setTime(opt.value)} />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="exec-fg">
                    <label>
                      Focus areas{' '}
                      <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0, fontSize: '11px' }}>
                        (select all that apply)
                      </span>
                    </label>
                    <div className="exec-c-opts">
                      {FOCUS_AREAS.map((area) => (
                        <label className={`exec-c-opt${focusAreas.includes(area) ? ' exec-checked' : ''}`} key={area}>
                          <input type="checkbox" checked={focusAreas.includes(area)} onChange={() => toggleFocusArea(area)} />
                          <span>{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="exec-form-nav-row">
                    <button className="exec-btn-prev" onClick={() => setStep(2)}>← Back</button>
                    <button className="exec-btn-next" onClick={() => setStep(4)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="exec-form-panel exec-active">
                  <div className="exec-fp-title">Defining Success</div>
                  <div className="exec-fp-sub">What would success look like after completing this programme?</div>
                  <div className="exec-fg">
                    <label>Your Definition of Success</label>
                    <textarea
                      placeholder="After six sessions, I want to be able to... I want to feel... I want to lead..."
                      value={success}
                      onChange={(e) => setSuccess(e.target.value)}
                    />
                  </div>
                  <div className="exec-form-nav-row">
                    <button className="exec-btn-prev" onClick={() => setStep(3)}>← Back</button>
                    <button className="exec-btn-sub" onClick={handleSubmit}>Submit Intake →</button>
                  </div>
                  <p className="exec-f-note">🔒 Confidential · Used solely to design your programme</p>
                </div>
              )}
            </>
          ) : (
            <div className="exec-success-panel">
              <div className="exec-s-icon">✓</div>
              <h3>Intake received.</h3>
              <p>
                Gaurav will review your responses and reach out within 1–2 business days to schedule your first
                conversation.
                <br /><br />
                <a href="mailto:Gaurav@blockverseacademy.com">Gaurav@blockverseacademy.com</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
