/** AI Adoption for Teams (Workforce) inner page — renders the standalone design bundle in public/inner. */
export function WorkforceAI() {
  return (
    <iframe
      src="/inner/teams.html"
      title="AI Adoption for Teams | BlockVerse"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
    />
  )
}
