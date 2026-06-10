import { SocialLinks } from '../components/icons'
import { FOOTER_COLUMNS } from '../data'

export function Footer() {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="foot-cta">
        <h2>
          Let&rsquo;s build it <span className="accent">in.</span>
        </h2>
        <p>Customized AI adoption, architected for how your business actually runs — not bolted on after.</p>
        <div className="btns">
          <button type="button" className="btn btn-demo">
            Book a Demo
          </button>
          <button type="button" className="btn btn-learn">
            Book a Call
          </button>
        </div>
      </div>

      <div className="foot-main">
        <div className="foot-brand">
          <img className="logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
          <p>We help companies adopt AI and embed it in their real work.</p>
          <SocialLinks kinds={['linkedin', 'x', 'youtube']} className="foot-soc" />
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="foot-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="foot-bottom">
        <span>&copy; 2026 Blockverse Technologies. All rights reserved.</span>
        <div className="legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
        <span className="tag">Built in, not bolted on.</span>
      </div>

      <div className="foot-wm" aria-hidden="true">
        blockverse
      </div>
    </footer>
  )
}
