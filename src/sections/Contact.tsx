import { useState } from 'react'
import type { FormEvent } from 'react'
import { SectionIntro } from '../components/SectionIntro'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || submitting) return
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch('/api/submit-intake.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
          page: 'Landing Contact',
        }),
      })
      if (!res.ok) throw new Error('bad response')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact-sec" id="contact" data-screen-label="Contact">
      <SectionIntro
        wrapClass="contact-head"
        kicker="Book a call"
        title={
          <>
            Tell us where the friction is. <span className="accent">We&rsquo;ll map the rest.</span>
          </>
        }
      />

      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-blurb">
            Every engagement starts with a conversation about how your business actually runs. Share a little
            context and we&rsquo;ll come back with where AI can take real work off your teams.
          </p>
          <div className="contact-person">
            <div className="contact-person-name">What happens next</div>
            <div className="contact-person-role">
              We review your note and reach out within 1–2 business days to schedule the call.
            </div>
          </div>
        </div>

        {!submitted ? (
          <form className="contact-card" onSubmit={handleSubmit}>
            <div className="contact-row">
              <label className="contact-field">
                <span>Full Name *</span>
                <input type="text" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label className="contact-field">
                <span>Work Email *</span>
                <input type="email" placeholder="you@organisation.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
            </div>
            <label className="contact-field">
              <span>Company</span>
              <input type="text" placeholder="Your organisation" value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>
            <label className="contact-field">
              <span>Where does the work get stuck?</span>
              <textarea
                placeholder="The processes, teams, or tools where you want AI to make a difference…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-demo" disabled={submitting}>
              {submitting ? 'Sending…' : 'Book a Call'}
            </button>
            {error && (
              <p className="contact-note" style={{ color: 'var(--pink)' }}>
                Something went wrong sending your note. Please email support@blockversetechnologies.ai directly.
              </p>
            )}
            <p className="contact-note">Confidential. Used solely to prepare for your call.</p>
          </form>
        ) : (
          <div className="contact-card contact-success">
            <div className="contact-success-icon">✓</div>
            <h3>Request received.</h3>
            <p>We&rsquo;ll reach out within 1–2 business days to schedule your call.</p>
          </div>
        )}
      </div>
    </section>
  )
}
