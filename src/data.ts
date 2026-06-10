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
    tabLabel: 'Built-In, Not Bolted-On',
    layerNum: 'Layer 03 — Built-In, Not Bolted-On',
    headline: 'Built in, not bolted on.',
    emphasis: "When it's built in, it gets used.",
    body: 'Built into your existing stack — ERP, CRM, HRIS, the tools your teams actually use. Custom API connections, enterprise-grade guardrails, and data that stays inside your infrastructure. We architect for how your business runs today.',
    stackTitle: 'Built-In Infrastructure',
    stackSub: 'Inside your existing stack',
    image: '/assets/Workflows.png',
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    tag: 'Retail · Fortune 500',
    title: 'From pilot to production.',
    sub: 'Forecasting that used to take days now runs before standup.',
    desc: 'We embedded demand-forecasting agents into their existing planning stack — no rip-and-replace. Planners review the output instead of rebuilding it from scratch every week.',
    metric: '70%',
    metricLabel: 'faster forecasting cycles',
  },
  {
    tag: 'Healthcare · 12 hospitals',
    title: 'Adoption, org-wide.',
    sub: 'From a 40-person pilot to 8,000 clinicians in a single quarter.',
    desc: 'Role-by-role enablement and guardrails that satisfied compliance from day one — so AI reached the floor and the front desk, not just the innovation lab.',
    metric: '8,000',
    metricLabel: 'staff onboarded in 90 days',
  },
  {
    tag: 'Financial Services · Tier-1 bank',
    title: 'Built in, used daily.',
    sub: 'Agents living inside the core systems teams already trust.',
    desc: 'Custom API connections and enterprise-grade guardrails kept every record inside their own infrastructure — and the switch to production happened with no service interruption.',
    metric: 'Zero',
    metricLabel: 'downtime at cutover',
  },
]

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
