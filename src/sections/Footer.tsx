import { Link } from 'react-router-dom'
import { FOOTER_COLUMNS } from '../data'
import { SocialLinks } from '../components/icons'

const isExternal = (href: string) => /^https?:\/\//.test(href)

export function Footer() {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="foot-main">
        <div className="foot-brand">
          <img className="logo" src="/assets/logo.png" alt="Blockverse Technologies.ai" />
          <p>We help companies adopt AI and embed it in their real work.</p>
          <SocialLinks kinds={['linkedin', 'instagram', 'youtube']} className="foot-soc" />
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div className="foot-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) =>
              isExternal(link.to) ? (
                <a href={link.to} key={link.label}>
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
