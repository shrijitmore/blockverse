import { useEffect, useRef } from 'react'
import 'jsvectormap/dist/jsvectormap.css'

const STATS = [
  { num: 'HQ', label: 'Netherlands', sub: 'KvK 86755730\nVAT: NL864077014B01' },
  { num: '8', label: 'Active Global Markets', sub: 'Active clients and partners\nacross 4 continents.' },
  { num: '8+', label: 'Industries Live', sub: 'Finance, Healthcare, Real Estate,\nEdTech, Logistics & more.' },
]

const LOCATIONS = [
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇨🇭', name: 'Switzerland' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇸🇪', name: 'Sweden' },
]

const MAP_MARKERS = [
  { name: 'Netherlands', coords: [52.3676, 4.9041] as [number, number] },
  { name: 'Switzerland', coords: [47.3769, 8.5417] as [number, number] },
  { name: 'India', coords: [12.9716, 77.5946] as [number, number] },
  { name: 'Singapore', coords: [1.3521, 103.8198] as [number, number] },
  { name: 'Australia', coords: [-33.8688, 151.2093] as [number, number] },
  { name: 'UAE', coords: [25.2048, 55.2708] as [number, number] },
  { name: 'Canada', coords: [43.6532, -79.3832] as [number, number] },
  { name: 'Sweden', coords: [59.3293, 18.0686] as [number, number] },
]

export function AboutGeo() {
  const mapRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headRef.current, statsRef.current, tagsRef.current].filter(Boolean) as HTMLElement[]
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

  useEffect(() => {
    if (!mapRef.current) return
    let map: unknown = null

    async function loadMap() {
      const { default: jsVectorMap } = await import('jsvectormap')
      await import('jsvectormap/dist/maps/world.js')
      if (!mapRef.current) return
      mapRef.current.innerHTML = ''
      map = new jsVectorMap({
        selector: mapRef.current,
        map: 'world',
        backgroundColor: 'transparent',
        draggable: true,
        zoomButtons: true,
        zoomOnScroll: false,
        regionStyle: {
          initial: { fill: '#1a2240', stroke: 'rgba(255,255,255,0.06)', strokeWidth: 1, fillOpacity: 1 },
          hover: { fill: '#1e2a50' },
        },
        markers: MAP_MARKERS,
        markerStyle: {
          initial: {
            image: '/assets/about/bvlogo-Photoroom.png',
          },
        },
        onRegionTooltipShow(event: Event, _tooltip: unknown, code: string) {
          const active = ['NL', 'CH', 'IN', 'SG', 'AU', 'AE', 'CA', 'SE']
          if (!active.includes(code)) event.preventDefault()
        },
      })
    }

    loadMap().catch(console.error)
    return () => {
      if (map && (map as { destroy?: () => void }).destroy) {
        (map as { destroy: () => void }).destroy()
      }
    }
  }, [])

  return (
    <section className="ab-geo">
      <div className="ab-container">
        <div ref={headRef} className="ab-section-head ab-section-head--center" data-ab-anim="fade-up">
          <span className="ab-kicker">OUR REACH</span>
          <h2 className="ab-section-title">
            Operating across{' '}
            <span className="ab-grad">8 Countries &amp; 4 Continents</span>
          </h2>
          <p className="ab-section-sub">
            Headquartered in Europe, deploying custom AI agents for enterprise partners across the globe.
          </p>
        </div>

        <div ref={statsRef} className="ab-geo__stats" data-ab-anim="fade-up" data-ab-delay="0.2">
          {STATS.map((s, i) => (
            <div key={s.label} className="ab-geo__stat">
              {i > 0 && <div className="ab-geo__stat-divider" />}
              <div className="ab-geo__stat-num">{s.num}</div>
              <h4 className="ab-geo__stat-label">{s.label}</h4>
              <p className="ab-geo__stat-sub">
                {s.sub.split('\n').map((l, j) => (
                  <span key={j}>{l}<br /></span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div ref={tagsRef} className="ab-geo__tags" data-ab-anim="fade-up" data-ab-delay="0.3">
          {LOCATIONS.map((l) => (
            <div key={l.name} className="ab-geo__tag">
              <span className="ab-geo__tag-flag">{l.flag}</span>
              <span className="ab-geo__tag-name">{l.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ab-geo__map-wrap">
        <div className="ab-geo__map-glow" />
        <div ref={mapRef} id="ab-world-map" className="ab-geo__map" />
      </div>
    </section>
  )
}
