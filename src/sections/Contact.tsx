import { useState } from 'react'
import type { FormEvent } from 'react'
import { SectionIntro } from '../components/SectionIntro'

const CONTACTS = [
  { name: 'Gaurav Gupta', role: 'Founder and CEO', email: 'Gaurav@blockverseacademy.com' },
  { name: 'Nimish Vasishta', role: 'Co-Founder and Investor', email: 'Nimish@blockverseacademy.com' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitted(true)
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
          {CONTACTS.map((c) => (
            <div className="contact-person" key={c.email}>
              <div className="contact-person-name">{c.name}</div>
              <div className="contact-person-role">{c.role}</div>
              <a href={`mailto:${c.email}`} className="contact-person-email">
                {c.email}
              </a>
            </div>
          ))}
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
            <button type="submit" className="btn btn-demo">
              Book a Call
            </button>
            <p className="contact-note">Confidential. Used solely to prepare for your call.</p>
          </form>
        ) : (
          <div className="contact-card contact-success">
            <div className="contact-success-icon">✓</div>
            <h3>Request received.</h3>
            <p>
              Gaurav will reach out within 1–2 business days to schedule your call.
              <br />
              <a href="mailto:Gaurav@blockverseacademy.com">Gaurav@blockverseacademy.com</a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
