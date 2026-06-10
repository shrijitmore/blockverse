const PHRASES = [
  'Board Members',
  'Chief Executive Officers',
  'Private · Practical · Bespoke',
  '6 Sessions · 3 Months',
  'No Fixed Curriculum',
  'AI Fluency for Leaders',
  'Your Challenges Drive the Content',
  '1-on-1 with the CEO',
]

export function ExecMarquee() {
  const items = [...PHRASES, ...PHRASES]
  return (
    <div className="exec-marquee-strip">
      <div className="exec-marquee-track">
        {items.map((phrase, i) => (
          <span key={i}>
            {phrase}
            <span className="exec-dot"> ◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
