export const NAV_LINKS = ['Businesses', 'Individuals', 'Programs', 'About Us']

export const HEADLINE_LINES = [
  { text: 'Customised', accent: 'Ai', delay: '.45s' },
  { text: 'Adoption Systems', delay: '.55s' },
  { text: 'BUILT', accent: ' In,', delay: '.66s', tag: true, spaced: true },
  { text: 'Not Bolted On', delay: '.77s', dark: true, tag: true },
]

export const HERO_SUB = 'We Help companies adopt AI and embed it in their real work'

export type BentoCard = {
  num: string
  col: 'b-wl' | 'b-r' | 'b-l' | 'b-wr'
  icon: 'compass' | 'flask' | 'rocket' | 'chart'
  title: string
  desc: string
  image?: string
}

export const BENTO_CARDS: BentoCard[] = [
  {
    num: '01',
    col: 'b-wl',
    icon: 'compass',
    title: 'Discover & Design',
    desc: 'We map your unique organisational terrain — understanding business goals, identifying high-friction processes, and crafting bespoke AI architectures tailored to your specific people and operational realities.',
    image: '/assets/Discover_and_Design.png',
  },
  {
    num: '02',
    col: 'b-r',
    icon: 'flask',
    title: 'Pilot',
    desc: 'Deploying in controlled, high-impact environments. We test, learn, and refine the agentic systems against real-world scenarios — establishing crucial guardrails and observability metrics.',
    image: '/assets/Pilot.jpeg',
  },
  {
    num: '03',
    col: 'b-l',
    icon: 'rocket',
    title: 'Deploy',
    desc: 'Integration into your existing enterprise systems. We bridge the gap between prototype and production — API connections, security layers, and minimal disruption to ongoing operations.',
  },
  {
    num: '04',
    col: 'b-wr',
    icon: 'chart',
    title: 'Scale & Optimise',
    desc: 'Continuous improvement through usage analytics. We monitor agent performance, expand impact across adjacent workflows, and dynamically optimise the systems to drive ongoing ROI.',
  },
]

export type Layer = {
  tabNo: string
  tabLabel: string
  layerNum: string
  headline: string
  emphasis: string
  body: string
  stackTitle: string
  stackSub: string
  image?: string
  cta?: { label: string; to: string }
}

export const LAYERS: Layer[] = [
  {
    tabNo: '01',
    tabLabel: 'Executive Fluency',
    layerNum: 'Layer 01 — Executive Fluency',
    headline: 'Fluent at the top.',
    emphasis: 'Confident everywhere.',
    body: 'We take your leaders from AI-curious to AI-fluent in working sessions built on your data and your decisions. When the people setting direction understand what AI really does, adoption gets a mandate — not a maybe.',
    stackTitle: 'Executive Fluency',
    stackSub: 'Leadership that speaks AI',
    image: '/assets/Executive_off.png',
    cta: { label: 'Explore Executive AI Capability', to: '/executive-ai-capability' },
  },
  {
    tabNo: '02',
    tabLabel: 'Workforce Adoption',
    layerNum: 'Layer 02 — Workforce Adoption',
    headline: 'Adoption that sticks —',
    emphasis: 'because it fits the work.',
    body: 'Role-by-role enablement that meets people inside the tools they already open every day. Hands-on playbooks, not slideware. We turn "we have AI" into "we use AI" — measured by the work that actually gets done.',
    stackTitle: 'Workforce Adoption',
    stackSub: 'Teams that use it daily',
    image: '/assets/Workforce.png',
  },
  {
    tabNo: '03',
    tabLabel: 'Workflows',
    layerNum: 'Layer 03 — Workflows',
    headline: 'Built in, not bolted on.',
    emphasis: "When it's built in, it gets used.",
    body: 'Built into your existing stack — ERP, CRM, HRIS, the tools your teams actually use. Custom API connections, enterprise-grade guardrails, and data that stays inside your infrastructure. We architect for how your business runs today.',
    stackTitle: 'Workflows',
    stackSub: 'Inside your existing stack',
    image: '/assets/Workflows.png',
  },
]

export type Challenge = { num: string; fn: string; title: string }
export type Impact = { val: string; desc: string }
export type IndustryData = {
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
export const INDUSTRIES: IndustryData[] = [
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

export type CaseStudy = {
  tag: string
  title: string
  sub: string
  desc: string
  metric: string
  metricLabel: string
}

export const CASE_STUDIES: CaseStudy[] = INDUSTRIES.map((ind) => {
  const [first, second, third] = ind.impacts
  const title = `${ind.headline}${ind.accent}`.trim()
  return {
    tag: ind.tag,
    title: /[.!?]$/.test(title) ? title : `${title}.`,
    sub: `${first.val} ${first.desc}.`,
    desc: `${second.val} ${second.desc}. ${third.val} ${third.desc}.`,
    metric: first.val,
    metricLabel: first.desc,
  }
})

export type Founder = {
  initial: string
  name: string
  role: string
  bio: string
  quote: string
}

export const FOUNDERS: Founder[] = [
  {
    initial: 'A',
    name: 'Aarav Mehta',
    role: 'Co-founder & CEO',
    bio: 'A decade shipping AI inside Fortune 500 operations teams — long before it was a buzzword.',
    quote: `"If it doesn't survive contact with real work, it doesn't ship."`,
  },
  {
    initial: 'L',
    name: 'Lena Okonkwo',
    role: 'Co-founder & CTO',
    bio: "Built agent infrastructure for regulated industries where downtime isn't an option.",
    quote: `"If it's not in the workflow, it's not adopted."`,
  },
]

export const MARQUEE_ROWS: { reverse?: boolean; logos: { name: string; cls?: string }[] }[] = [
  {
    logos: [
      { name: 'Northbeam', cls: 'lg-wide' },
      { name: 'Lumera', cls: 'lg-italic' },
      { name: 'oakline', cls: 'lg-mono' },
      { name: 'Stratum', cls: 'lg-black' },
      { name: 'Halcyon', cls: 'lg-serif' },
      { name: 'Vireo' },
      { name: 'Cobalt', cls: 'lg-wide' },
      { name: 'Aperture', cls: 'lg-black' },
    ],
  },
]
export const FOOTER_COLUMNS = [
  { title: 'Company', links: ['About Us', 'Careers', 'Case Studies', 'Contact'] },
  { title: 'Solutions', links: ['Businesses', 'Individuals', 'Programs', 'Pricing'] },
  { title: 'Resources', links: ['Blog', 'Guides', 'Security', 'Support'] },
]

export const PARTICLES: { left: string; size: number; dur: number; delay: number; tint?: 'pink' | 'amber' }[] = [
  { left: '6%', size: 5, dur: 15, delay: 0 },
  { left: '14%', size: 7, dur: 19, delay: 3, tint: 'pink' },
  { left: '23%', size: 4, dur: 13, delay: 6 },
  { left: '33%', size: 6, dur: 21, delay: 1.5, tint: 'amber' },
  { left: '44%', size: 4, dur: 16, delay: 8 },
  { left: '54%', size: 7, dur: 18, delay: 4 },
  { left: '63%', size: 5, dur: 14, delay: 10, tint: 'pink' },
  { left: '72%', size: 4, dur: 20, delay: 2 },
  { left: '81%', size: 6, dur: 17, delay: 7, tint: 'amber' },
  { left: '90%', size: 5, dur: 22, delay: 5 },
  { left: '96%', size: 4, dur: 15, delay: 11 },
]
