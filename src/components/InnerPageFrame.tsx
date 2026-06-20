import { Link } from 'react-router-dom'

/** Wraps a standalone design bundle (public/inner/*.html) with a slim home bar that links back to the landing page. */
export function InnerPageFrame({ src, title }: { src: string; title: string }) {
  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', background: '#06122e' }}>
      <header
        style={{
          flex: 'none',
          height: 50,
          display: 'flex',
          alignItems: 'center',
          padding: '0 22px',
          background: '#06122e',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Link to="/" aria-label="Back to Blockverse home" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src="/assets/logo.png" alt="Blockverse Technologies.ai" style={{ height: 28, display: 'block' }} />
        </Link>
      </header>
      <iframe src={src} title={title} style={{ flex: 1, width: '100%', border: 'none', display: 'block' }} />
    </div>
  )
}
