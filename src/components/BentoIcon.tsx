import type { BentoCard } from '../data'

const ICONS: Record<BentoCard['icon'], React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.6 8.4 10.3 10.3 8.4 15.6 13.7 13.7" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v5.5l-4.6 8.3A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.8-3.2L14 8.5V3" />
      <path d="M7.5 14.5h9" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.4 1.2-1.9 4.8-1.9 4.8s3.6-.5 4.8-1.9" />
      <path d="M12.5 14.5 9.5 11.5a12.5 12.5 0 0 1 6-9.2c2.5-.2 4.2.2 4.2.2s.4 1.7.2 4.2a12.5 12.5 0 0 1-9.2 6z" />
      <circle cx="15" cy="9" r="1.6" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
      <path d="M19 7h-3.5M19 7v3.5" />
    </>
  ),
}

export function BentoIcon({ icon }: { icon: BentoCard['icon'] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[icon]}
    </svg>
  )
}
