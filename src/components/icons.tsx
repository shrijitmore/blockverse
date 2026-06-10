type IconProps = { className?: string }

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9z" />
    </svg>
  )
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H22l-7.3 8.34L23 21h-6.9l-5.2-6.8L4.9 21H2l7.8-8.9L1.6 3H8.6l4.7 6.2zM17.7 19.2h1.7L7.2 4.7H5.4z" />
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  )
}

export function MicIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  )
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.4-.43-5.02a2.6 2.6 0 0 0-1.83-1.84C19.12 4.7 12 4.7 12 4.7s-7.12 0-8.74.44A2.6 2.6 0 0 0 1.43 6.98C1 8.6 1 12 1 12s0 3.4.43 5.02a2.6 2.6 0 0 0 1.83 1.84c1.62.44 8.74.44 8.74.44s7.12 0 8.74-.44a2.6 2.6 0 0 0 1.83-1.84C23 15.4 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z" />
    </svg>
  )
}

const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  x: XIcon,
  youtube: YouTubeIcon,
} as const

export type SocialKind = keyof typeof SOCIAL_ICONS

const SOCIAL_LABELS: Record<SocialKind, string> = {
  linkedin: 'LinkedIn',
  x: 'X',
  youtube: 'YouTube',
}

export function SocialLinks({ kinds, className }: { kinds: SocialKind[]; className?: string }) {
  return (
    <div className={className}>
      {kinds.map((kind) => {
        const Icon = SOCIAL_ICONS[kind]
        return (
          <a key={kind} href="#" aria-label={SOCIAL_LABELS[kind]}>
            <Icon />
          </a>
        )
      })}
    </div>
  )
}
