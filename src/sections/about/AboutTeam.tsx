import { useEffect, useRef } from 'react'
import { LinkedInIcon } from '../../components/icons'

const TEAM = [
  {
    name: 'Gaurav Gupta',
    role: 'Founder & CEO',
    email: 'gaurav@blockverseacademy.com',
    location: 'Netherlands 🇳🇱',
    linkedin: 'https://www.linkedin.com/in/gaurav-gupta-blockverse/',
    photo: '/assets/about/gaurav.jpeg',
  },
  {
    name: 'Nimish Vasishta',
    role: 'Co-founder & Investor',
    email: 'nimish@blockverseacademy.com',
    location: 'Switzerland 🇨🇭',
    linkedin: 'https://www.linkedin.com/in/nimish-vasishta-blockverse/',
    photo: '/assets/about/nimish.jpeg',
  },
]

export function AboutTeam() {
  const gridRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, gridRef.current].filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseFloat(e.target.getAttribute('data-ab-delay') || '0')
            setTimeout(() => e.target.classList.add('ab-visible'), delay * 1000)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="ab-team">
      <div className="ab-team__watermark" aria-hidden="true">
        <span className="ab-team__wm ab-team__wm--nl">
          <span className="ab-team__wm-flag">🇳🇱</span>
          <span className="ab-team__wm-name">Netherlands</span>
        </span>
        <span className="ab-team__wm ab-team__wm--ch">
          <span className="ab-team__wm-flag">🇨🇭</span>
          <span className="ab-team__wm-name">Switzerland</span>
        </span>
      </div>
      <div className="ab-container">
        <div ref={headRef} className="ab-section-head ab-section-head--center" data-ab-anim="fade-up">
          <span className="ab-kicker">LEADERSHIP</span>
          <h2 className="ab-section-title">
            <span className="ab-grad">Founding</span> Team
          </h2>
        </div>

        <div ref={gridRef} className="ab-team__grid" data-ab-anim="fade-up" data-ab-delay="0.3">
          {TEAM.map((m) => (
            <div key={m.name} className="ab-profile-card">
              <div
                className="ab-profile-card__bg"
                style={{ backgroundImage: `url('${m.photo}')` }}
              />
              <div className="ab-profile-card__overlay" />
              <div className="ab-profile-card__content">
                <h3 className="ab-profile-card__name">{m.name}</h3>
                <p className="ab-profile-card__role">{m.role}</p>
                <div className="ab-profile-card__reveal">
                  <p className="ab-profile-card__bio">{m.email}</p>
                  <div className="ab-profile-card__footer">
                    <p className="ab-profile-card__loc">{m.location}</p>
                    <a
                      href={m.linkedin}
                      className="ab-profile-card__linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ab-team__enquiries" data-ab-anim="fade-up" data-ab-delay="0.4">
          <span className="ab-team__enquiries-label">General Enquiries</span>
          <a href="mailto:support@blockverseacademy.com" className="ab-team__email">
            support@blockverseacademy.com
          </a>
        </div>
      </div>
    </section>
  )
}
