import type { ReactNode } from 'react'

/** Shared kicker + title header markup, reused by Proven Path, Case Studies and Founders (`.proven-kicker`/`.proven-title`). */
export function SectionIntro({ wrapClass, kicker, title }: { wrapClass: string; kicker: string; title: ReactNode }) {
  return (
    <div className={wrapClass}>
      <span className="proven-kicker">{kicker}</span>
      <h2 className="proven-title">{title}</h2>
    </div>
  )
}
