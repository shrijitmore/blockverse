import { Link } from 'react-router-dom'
import { FOOTER_COLUMNS } from '../data'

const isExternal = (href: string) => /^https?:\/\//.test(href)

export function Footer() {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="foot-cta">
        <h2>
          Let&rsquo;s build it <span className="accent">in.</span>
        </h2>
        <p>Customized AI adoption, architected for how your business actually runs — not bolted on after.</p>
        <div className="btns">
          <Link to="/#contact" className="btn btn-demo">
            Book a Demo
          </Link>
          <Link to="/#contact" className="btn btn-learn">
            Book a Call
          </Link>
        </div>
      </div>

      <div className="foot-main">
        <div className="foot-brand">
          <img className="logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
          <p>We help companies adopt AI and embed it in their real work.</p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="foot-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) =>
              isExternal(link.to) ? (
                <a href={link.to} key={link.label} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link to={link.to} key={link.label}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        ))}
      </div>

      <div className="foot-bottom">
        <span>&copy; 2026 Blockverse Technologies. All rights reserved.</span>
        <span className="tag">Built in, not bolted on.</span>
      </div>

      <div className="foot-wm" aria-hidden="true">
        blockverse
      </div>
    </footer>
  )
}
