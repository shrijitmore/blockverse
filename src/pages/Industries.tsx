import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/industries.css'

// ── Types ───────────────────────────────────────────────
type Challenge = { num: string; fn: string; title: string }
type Impact = { val: string; desc: string }
type IndustryData = {
  id: string
  tab: string
  tag: string
  headline: string
  accent: string
  intro: string
  challengeHeading: string
  challenges: Challenge[]
  impactHeading: string
  impacts: Impact[]
  cta: string
  gray: boolean
  gradientBg: string
  image: string
}

// ── Industry data ────────────────────────────────────────
const INDUSTRIES: IndustryData[] = [
  {
    id: 'ind-pharma',
    tab: 'Pharma',
    tag: 'Pharmaceuticals',
    headline: 'Operational Efficiency ',
    accent: 'Across the Value Chain',
    intro: "Pharmaceutical businesses run complex distributor networks, compliance-heavy back offices, and specialist hiring cycles. Each of these has become a friction point we've studied closely.",
    challengeHeading: 'Where Pharma Operations Stall',
    challenges: [
      { num: '01', fn: 'Accounts Receivable', title: 'Distributor collections drag on for weeks' },
      { num: '02', fn: 'Compliance', title: 'Back-office documentation piles up before every audit' },
      { num: '03', fn: 'HR & Talent', title: 'Specialist hiring stalls on compliance overhead' },
      { num: '04', fn: 'Operations', title: 'SOP readiness is never fully visible' },
      { num: '05', fn: 'Finance Ops', title: 'Territory reporting waits on manual data pulls' },
      { num: '06', fn: 'Supply Chain', title: 'Demand signals from the field arrive too late' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Faster', desc: 'distributor invoice recovery with automated multi-touch follow-up' },
      { val: '100% Tracked', desc: 'compliance documentation and SOP readiness without manual checks' },
      { val: 'Weeks Saved', desc: 'per specialist hire through automated screening and scheduling' },
    ],
    cta: 'Explore Pharma Solutions',
    gray: false,
    gradientBg: 'linear-gradient(135deg,#0d1f4e 0%,#1a3a7e 60%,#153060 100%)',
    image: '/assets/industries/pharma.png',
  },
  {
    id: 'ind-bpo',
    tab: 'BPO',
    tag: 'BPO & Outsourcing',
    headline: 'Scale Output Without ',
    accent: 'Scaling Headcount',
    intro: 'BPO operators face relentless pressure to deliver more at lower cost. The pain is almost always in the same places: volume, reporting, and hiring. Here is where we look first.',
    challengeHeading: 'Where BPO Margins Erode',
    challenges: [
      { num: '01', fn: 'Operations', title: 'Processing queues grow faster than teams can clear them' },
      { num: '02', fn: 'Client Reporting', title: 'SLA reports are a monthly fire drill' },
      { num: '03', fn: 'Workforce', title: 'Productivity visibility is always retrospective' },
      { num: '04', fn: 'HR & Talent', title: 'High-volume hiring strains HR every quarter' },
      { num: '05', fn: 'Quality', title: 'Errors are caught at the end of the batch, not during it' },
      { num: '06', fn: 'Finance Ops', title: 'Client billing reconciliation is manual and dispute-prone' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: '3x', desc: 'processing throughput without adding to the ops headcount' },
      { val: '65%', desc: 'less time on manual SLA reporting across client accounts' },
      { val: 'Faster', desc: 'high-volume hiring cycles with automated screening at scale' },
    ],
    cta: 'Explore BPO Solutions',
    gray: true,
    gradientBg: 'linear-gradient(135deg,#2d0a4e 0%,#4a1a7e 60%,#380d60 100%)',
    image: '/assets/industries/bpo.png',
  },
  {
    id: 'ind-manufacturing',
    tab: 'Manufacturing',
    tag: 'Manufacturing',
    headline: 'From Demand Signal ',
    accent: 'to Shop Floor Action',
    intro: "Manufacturing loses margin to demand misreads, procurement delays, and back-office overhead. The signals exist in the business. The problem is they don't reach decisions fast enough.",
    challengeHeading: 'Where Manufacturing Loses Margin',
    challenges: [
      { num: '01', fn: 'Supply Chain', title: 'Demand signals arrive after the damage is done' },
      { num: '02', fn: 'Procurement', title: 'Purchase order processing is entirely manual' },
      { num: '03', fn: 'Operations', title: 'Plant performance is visible only in hindsight' },
      { num: '04', fn: 'Planning', title: 'Supply disruptions catch planning teams off guard' },
      { num: '05', fn: 'Finance Ops', title: 'Multi-plant consolidation creates month-end chaos' },
      { num: '06', fn: 'HR & Talent', title: 'Skilled operator hiring spikes faster than HR can handle' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Proactive', desc: 'demand sensing that surfaces mismatches before they hit the floor' },
      { val: '40%', desc: 'less time on procurement documentation and vendor follow-up' },
      { val: 'Real-time', desc: 'OEE and plant performance visibility for operations leadership' },
    ],
    cta: 'Explore Manufacturing Solutions',
    gray: false,
    gradientBg: 'linear-gradient(135deg,#0a2e1f 0%,#1a4e38 60%,#0d3828 100%)',
    image: '/assets/industries/manufacturing.png',
  },
  {
    id: 'ind-realestate',
    tab: 'Real Estate',
    tag: 'Real Estate',
    headline: 'More Qualified Leads. ',
    accent: 'Faster Closures.',
    intro: "Real estate growth is constrained by slow lead response, poor qualification, and legal bottlenecks. Every delayed response and missed follow-up is a deal that moved to a competitor.",
    challengeHeading: 'Where Real Estate Deals Are Lost',
    challenges: [
      { num: '01', fn: 'Sales', title: 'Inquiry response time is too slow' },
      { num: '02', fn: 'Sales', title: "Sales teams spend time on leads that won't close" },
      { num: '03', fn: 'Legal', title: 'Due diligence and agreement review slow every closing' },
      { num: '04', fn: 'Business Dev', title: "New project launches don't build enough early pipeline" },
      { num: '05', fn: 'Sales', title: 'Site visit follow-up depends on individual agents' },
      { num: '06', fn: 'Finance Ops', title: 'Milestone payment tracking is entirely manual' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: '3x', desc: 'higher lead-to-site-visit conversion through faster follow-up' },
      { val: 'Minutes', desc: 'average response time on inbound inquiries instead of hours' },
      { val: 'Faster', desc: 'agreement and due diligence review with automated legal checks' },
    ],
    cta: 'Explore Real Estate Solutions',
    gray: true,
    gradientBg: 'linear-gradient(135deg,#2e1a00 0%,#4e3000 60%,#3a2200 100%)',
    image: '/assets/industries/realestate.png',
  },
  {
    id: 'ind-healthcare',
    tab: 'Healthcare',
    tag: 'Healthcare',
    headline: 'More Patients Seen. ',
    accent: 'Less Admin in Between.',
    intro: 'Healthcare providers lose revenue to no-shows, scheduling gaps, and administrative work that pulls clinical staff away from care. The operational layer is where we find the most recoverable value.',
    challengeHeading: 'Where Healthcare Revenue Leaks',
    challenges: [
      { num: '01', fn: 'Patient Experience', title: 'No-shows drain revenue that was already booked' },
      { num: '02', fn: 'Patient Acquisition', title: 'New patient acquisition is too passive' },
      { num: '03', fn: 'Administration', title: 'Admin burden pulls clinical staff away from patients' },
      { num: '04', fn: 'HR & Talent', title: 'Specialist hiring adds weeks to urgent vacancies' },
      { num: '05', fn: 'Finance Ops', title: 'Insurance claims sit in queues for weeks' },
      { num: '06', fn: 'Operations', title: 'Cancellation slots are rarely filled in time' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Higher', desc: 'appointment fill rate through intelligent scheduling and waitlist management' },
      { val: 'Reduced', desc: 'no-show rates with automated personalised patient reminders' },
      { val: '50%', desc: 'less admin time per patient across billing and documentation workflows' },
    ],
    cta: 'Explore Healthcare Solutions',
    gray: false,
    gradientBg: 'linear-gradient(135deg,#001a2e 0%,#002e4e 60%,#00223c 100%)',
    image: '/assets/industries/healthcare.png',
  },
  {
    id: 'ind-financial',
    tab: 'Banking & Finance',
    tag: 'Banking & Finance',
    headline: 'Built for Finance Teams That ',
    accent: "Can't Afford to Wait",
    intro: "From collections and corporate treasury to wealth management and portfolio intelligence, the highest-stakes operations in finance still run on manual effort. We've mapped where that costs the most.",
    challengeHeading: 'What We Hear from Finance Teams',
    challenges: [
      { num: '01', fn: 'Accounts Receivable', title: 'Collections follow-up is manual and inconsistent' },
      { num: '02', fn: 'Treasury', title: 'Cash position data is always a step behind' },
      { num: '03', fn: 'Wealth Management', title: 'Portfolio reports reach clients too late' },
      { num: '04', fn: 'Finance Ops', title: 'MIS takes days and still gets challenged' },
      { num: '05', fn: 'Compliance', title: 'Audit-readiness requires a last-minute sprint' },
      { num: '06', fn: 'Finance Ops', title: 'Month-end close is dominated by intercompany matching' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: '18%', desc: 'average increase in AR recovery with automated follow-up sequences' },
      { val: 'Real-time', desc: 'treasury and portfolio visibility instead of end-of-day pulls' },
      { val: 'Days to Hours', desc: 'MIS and reporting cycles compressed across finance ops' },
    ],
    cta: 'Explore Finance Solutions',
    gray: true,
    gradientBg: 'linear-gradient(135deg,#1a1a00 0%,#2e2e00 60%,#242400 100%)',
    image: '/assets/industries/finance.png',
  },
  {
    id: 'ind-education',
    tab: 'Education',
    tag: 'Education & EdTech',
    headline: 'Fill Every Seat. ',
    accent: 'Without Filling Every Inbox.',
    intro: "EdTech companies and institutions fight hard for every enrolment and lose too many through inconsistent outreach and slow admissions follow-up. Here is where the conversion gap actually lives.",
    challengeHeading: 'Where EdTech Enrolments Are Lost',
    challenges: [
      { num: '01', fn: 'Admissions', title: 'Most inquiries drop off before an application starts' },
      { num: '02', fn: 'Admissions', title: "Counsellor outreach can't scale during peak season" },
      { num: '03', fn: 'Admissions', title: 'Incomplete applications stall without recovery' },
      { num: '04', fn: 'HR & Talent', title: 'Faculty hiring spikes with every cohort launch' },
      { num: '05', fn: 'Operations', title: "Student disengagement isn't caught early enough" },
      { num: '06', fn: 'Marketing', title: "No visibility into which programmes attract the best leads" },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Higher', desc: 'inquiry-to-enrolment conversion through systematic follow-up' },
      { val: '3x', desc: 'faster admissions outreach without increasing counsellor headcount' },
      { val: 'Automated', desc: 'faculty hiring pipelines that activate with each new cohort launch' },
    ],
    cta: 'Explore Education Solutions',
    gray: true,
    gradientBg: 'linear-gradient(135deg,#1a002e 0%,#2e0050 60%,#240040 100%)',
    image: '/assets/industries/education.png',
  },
  {
    id: 'ind-logistics',
    tab: 'Logistics',
    tag: 'Transport & Logistics',
    headline: 'Right Goods. Right Place. ',
    accent: 'Right Time.',
    intro: 'Logistics operations are won or lost on forecast accuracy, fleet utilisation, and billing speed. The gaps between these three are where we find the most recoverable margin.',
    challengeHeading: 'Where Logistics Margin Disappears',
    challenges: [
      { num: '01', fn: 'Planning', title: 'Demand forecasts are reactive, not predictive' },
      { num: '02', fn: 'Fleet Ops', title: 'Empty miles are treated as a fixed cost' },
      { num: '03', fn: 'Accounts Receivable', title: 'Freight invoice recovery takes far too long' },
      { num: '04', fn: 'Operations', title: 'POD reconciliation and billing are entirely manual' },
      { num: '05', fn: 'Planning', title: 'Disruptions arrive as surprises, not signals' },
      { num: '06', fn: 'Finance Ops', title: 'Carrier payments require manual verification chains' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Optimised', desc: 'fleet utilisation through lane-level demand intelligence' },
      { val: 'Faster', desc: 'freight invoice recovery with zero manual follow-up per account' },
      { val: '60%', desc: 'less manual effort in POD reconciliation and billing per shipment' },
    ],
    cta: 'Explore Logistics Solutions',
    gray: false,
    gradientBg: 'linear-gradient(135deg,#002e2e 0%,#004e4e 60%,#003a3a 100%)',
    image: '/assets/industries/logistics.png',
  },
  {
    id: 'ind-retail',
    tab: 'Retail',
    tag: 'Retail & E-Commerce',
    headline: 'More Reorders. Less ',
    accent: 'Revenue Left on the Table.',
    intro: "Retail growth is constrained by slow reorder cycles, B2B collections backlogs, and outreach that doesn't convert. These are the recurring gaps we've heard from retail teams across categories.",
    challengeHeading: 'Where Retail Revenue Stalls',
    challenges: [
      { num: '01', fn: 'Sales', title: 'Repeat purchase rates drop without outreach' },
      { num: '02', fn: 'AR', title: 'B2B receivables accumulate without structured follow-up' },
      { num: '03', fn: 'Sales', title: 'New account acquisition hits a bandwidth ceiling' },
      { num: '04', fn: 'Planning', title: 'Reorders are triggered by stockouts, not signals' },
      { num: '05', fn: 'Marketing', title: "Seasonal campaigns run on last year's calendar" },
      { num: '06', fn: 'Operations', title: 'Dispute resolution is slow and relationship-damaging' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Higher', desc: 'repeat purchase rate through automated re-engagement at the right moment' },
      { val: 'Faster', desc: 'B2B collections with structured automated follow-up per debtor' },
      { val: '3x', desc: 'more pipeline from existing accounts without expanding the sales team' },
    ],
    cta: 'Explore Retail Solutions',
    gray: true,
    gradientBg: 'linear-gradient(135deg,#2e0a1a 0%,#4e1a2e 60%,#3a0d22 100%)',
    image: '/assets/industries/retail.png',
  },
  {
    id: 'ind-media',
    tab: 'Media',
    tag: 'Media & Entertainment',
    headline: 'Build the Pipeline. ',
    accent: 'Close Faster.',
    intro: 'Media businesses depend on sustained advertiser relationships, tight commercial pipelines, and accurate revenue forecasting. The breakdown usually happens in the same places.',
    challengeHeading: 'Where Media Revenue Gets Stuck',
    challenges: [
      { num: '01', fn: 'Sales', title: 'Agency pipelines are slow to build from scratch' },
      { num: '02', fn: 'Finance Ops', title: 'Revenue forecasts are built on instinct' },
      { num: '03', fn: 'Sales', title: 'Proposals go cold without follow-up' },
      { num: '04', fn: 'Operations', title: 'Campaign reporting is manual and slow' },
      { num: '05', fn: 'Sales', title: 'Revenue per account plateaus too early' },
      { num: '06', fn: 'Finance Ops', title: 'Inventory yield leakage occurs on unsold slots' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Faster', desc: 'deal cycles through automated follow-up on submitted proposals' },
      { val: 'Unified', desc: 'revenue and pipeline view across all properties and channels' },
      { val: 'More', desc: 'qualified advertiser conversations without adding to the commercial team' },
    ],
    cta: 'Explore Media Solutions',
    gray: false,
    gradientBg: 'linear-gradient(135deg,#001a2e 0%,#002e50 60%,#00243c 100%)',
    image: '/assets/industries/media.png',
  },
  {
    id: 'ind-construction',
    tab: 'Construction',
    tag: 'Construction & Infrastructure',
    headline: 'Get Paid Faster. ',
    accent: 'Hire Smarter. Build More.',
    intro: 'Construction businesses lose margin to delayed payment recovery, contract complexity, and skilled labour shortages that hit hardest at project start. These are the challenges we hear most.',
    challengeHeading: 'Where Construction Projects Lose Margin',
    challenges: [
      { num: '01', fn: 'AR', title: 'Milestone billing submitted late and chased inconsistently' },
      { num: '02', fn: 'Legal', title: 'Contract complexity creates unread liability exposure' },
      { num: '03', fn: 'HR & Talent', title: 'Site team mobilisation is slow due to hiring gaps' },
      { num: '04', fn: 'Operations', title: 'Subcontractor invoices lead to frequent disputes' },
      { num: '05', fn: 'Finance Ops', title: 'Project cost visibility is delayed and inaccurate' },
      { num: '06', fn: 'Legal', title: 'Variation orders are often agreed verbally without tracking' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Faster', desc: 'milestone billing submission and cash recovery per project' },
      { val: 'Reduced', desc: 'contract risk through automated clause and liability review' },
      { val: 'Quicker', desc: 'site team mobilisation through proactive hiring pipelines' },
    ],
    cta: 'Explore Construction Solutions',
    gray: true,
    gradientBg: 'linear-gradient(135deg,#1a1400 0%,#2e2400 60%,#241c00 100%)',
    image: '/assets/industries/construction.png',
  },
  {
    id: 'ind-enterprise',
    tab: 'Enterprise',
    tag: 'Enterprise & Shared Services',
    headline: 'Sovereign AI. ',
    accent: 'At Enterprise Scale.',
    intro: 'Large enterprises want AI that runs inside their perimeter, connects across their systems, and generates intelligence they can trust. The barrier is almost always governance, integration, or visibility.',
    challengeHeading: 'What Enterprise Teams Are Navigating',
    challenges: [
      { num: '01', fn: 'Data Governance', title: 'Meetings debate numbers, not actions' },
      { num: '02', fn: 'AI Strategy', title: 'AI adoption stalls at pilot' },
      { num: '03', fn: 'Finance Ops', title: 'Group consolidation is manual' },
      { num: '04', fn: 'Operations', title: 'Reports arrive after the action window' },
      { num: '05', fn: 'IT & Infrastructure', title: 'AI tools sprawl without governance' },
      { num: '06', fn: 'Finance Ops', title: 'Cross-border intercompany transactions are slow' },
    ],
    impactHeading: 'Results from this space',
    impacts: [
      { val: 'Full', desc: 'data sovereignty with AI deployed inside your own perimeter' },
      { val: 'Unified', desc: 'intelligence layer connecting all business units without data sprawl' },
      { val: 'Zero', desc: 'external data dependency for sensitive finance and operations workflows' },
    ],
    cta: 'Explore Enterprise AI',
    gray: false,
    gradientBg: 'linear-gradient(135deg,#0a0a2e 0%,#1a1a4e 60%,#121238 100%)',
    image: '/assets/industries/enterprise.png',
  },
]

// ── Component ────────────────────────────────────────────
export function Industries() {
  const [activeId, setActiveId] = useState('ind-pharma')
  const tabsRef = useRef<HTMLElement>(null)
  const goTopRef = useRef<HTMLButtonElement>(null)

  // IntersectionObserver for [data-ind-anim] elements
  useEffect(() => {
    const els = document.querySelectorAll('[data-ind-anim]')
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseFloat(e.target.getAttribute('data-ind-delay') || '0')
            setTimeout(() => e.target.classList.add('ind-visible'), delay * 1000)
            obs.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [activeId]) // re-run when active section changes

  // Go to top button visibility
  useEffect(() => {
    const btn = goTopRef.current
    if (!btn) return
    const onScroll = () => {
      btn.classList.toggle('visible', window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sticky tabs shadow
  useEffect(() => {
    const tabs = tabsRef.current
    if (!tabs) return
    const onScroll = () => tabs.classList.toggle('scrolled', window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleTabClick(id: string) {
    setActiveId(id)
    // Scroll to section top after small delay for render
    setTimeout(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="ind-page">
      {/* Hero */}
      <section className="ind-hero" id="ind-hero">
        <div className="ind-hero__bg">
          <div className="ind-hero__gradient" />
          <div className="ind-hero__orb ind-hero__orb--1" />
          <div className="ind-hero__orb ind-hero__orb--2" />
          <div className="ind-hero__orb ind-hero__orb--3" />
          <div className="ind-hero__grain" />
        </div>
        <div className="ind-hero__content">
          <h1
            className="ind-hero__title"
            data-ind-anim="fade-up"
            data-ind-delay="0.2"
          >
            Every Industry Has Its Own
            <br />
            <span className="ind-hero__title-accent">Breaking Point.</span>
          </h1>
          <p
            className="ind-hero__sub"
            data-ind-anim="fade-up"
            data-ind-delay="0.4"
          >
            Real sector depth, not generic playbooks. Every challenge here is one
            we&#39;ve mapped and built around.
          </p>
        </div>
        <div
          className="ind-hero__scroll"
          data-ind-anim="fade-up"
          data-ind-delay="1"
        >
          <div className="ind-hero__scroll-line" />
          <span>Explore Industries</span>
        </div>
      </section>

      {/* Sticky Tabs */}
      <nav className="ind-tabs" ref={tabsRef}>
        <div className="ind-tabs__inner">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              className={`ind-tab${activeId === ind.id ? ' active' : ''}`}
              onClick={() => handleTabClick(ind.id)}
              type="button"
            >
              {ind.tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Industry Sections */}
      {INDUSTRIES.map((ind) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`ind-section${ind.gray ? ' ind-section--gray' : ''}${
            activeId === ind.id ? ' active' : ''
          }`}
        >
          <div className="container">
            <div className="ind-intro">
              <div className="ind-intro__content">
                <div className="ind-tag" data-ind-anim="fade-up">
                  <span className="ind-tag__pill">{ind.tag}</span>
                </div>
                <h2
                  className="ind-section__headline"
                  data-ind-anim="fade-up"
                  data-ind-delay="0.1"
                >
                  {ind.headline}
                  <span className="ind-section__headline-accent">{ind.accent}</span>
                </h2>
                <div
                  className="ind-block ind-block--problem"
                  data-ind-anim="fade-up"
                  data-ind-delay="0.2"
                >
                  <p>{ind.intro}</p>
                </div>
              </div>
              <div
                className="ind-intro__visual"
                data-ind-anim="fade-up"
                data-ind-delay="0.25"
              >
                <div className="ind-intro__img-wrap">
                  <img
                    src={ind.image}
                    alt={ind.tag}
                    className="ind-intro__img"
                  />
                  <div className="ind-intro__img-glow" />
                </div>
              </div>
            </div>

            <div
              className="ind-challenges-panel"
              data-ind-anim="fade-up"
              data-ind-delay="0.3"
            >
              <div className="ind-challenges-left">
                <div className="ind-ch-col-label">Common Challenges</div>
                <div className="ind-ch-col-heading">{ind.challengeHeading}</div>
                <div className="ind-challenge-list">
                  {ind.challenges.map((ch, i) => (
                    <div key={i} className="ind-challenge-row">
                      <span className="ind-ch-num">{ch.num}</span>
                      <div className="ind-ch-body">
                        <span className="ind-ch-function">{ch.fn}</span>
                        <span className="ind-ch-title">{ch.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ind-impact-sidebar">
                <div className="ind-ch-col-label">What We&#39;ve Seen</div>
                <div className="ind-ch-col-heading">{ind.impactHeading}</div>
                {ind.impacts.map((imp, i) => (
                  <div key={i} className="ind-impact-sb-item">
                    <div className="ind-impact-sb-val">{imp.val}</div>
                    <div className="ind-impact-sb-desc">{imp.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="ind-block ind-block--cta"
              data-ind-anim="fade-up"
              data-ind-delay="0.4"
            >
              <Link to="/contact" className="ind-cta-btn">
                <span>{ind.cta} &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="ind-closing">
        <div className="ind-closing__bg">
          <div className="ind-closing__sky" />
          <div className="ind-closing__orb ind-closing__orb--1" />
          <div className="ind-closing__orb ind-closing__orb--2" />
        </div>
        <div className="container">
          <div className="ind-closing__content">
            <span
              className="section-label-purple"
              data-ind-anim="fade-up"
            >
              Explore Solutions
            </span>
            <h2
              className="ind-closing__title"
              data-ind-anim="slide-up"
            >
              Not Sure Where You Fit?
              <br />
              <span className="ind-closing__title-gradient">
                We&#39;ve Got That Covered.
              </span>
            </h2>
            <div
              className="ind-closing__actions"
              data-ind-anim="fade-up"
              data-ind-delay="0.3"
            >
              <Link to="/about" className="ind-hero-btn">
                <span>Find What Fits Your Operation &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Go to Top */}
      <button
        ref={goTopRef}
        className="ind-go-top"
        aria-label="Go to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  )
}
