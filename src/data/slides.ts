export interface SlideData {
  id: number;
  type: 'title' | 'content' | 'comparison' | 'metrics' | 'timeline';
  title: string;
  subtitle?: string;
  footer?: string;
  bullets?: string[];
  table?: {
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  comparison?: {
    left: { title: string; items: string[] };
    right: { title: string; items: string[] };
  };
  highlight?: string;
  bottomNote?: string;
  metrics?: { label: string; value: string }[];
  closingLine?: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'title',
    title: 'PhysioMantra GTM Strategy 2026',
    subtitle: 'Building a Balanced Two-Sided Physiotherapy Marketplace',
    footer: 'India + US | Demand & Supply Strategy | January 2026',
  },
  {
    id: 2,
    type: 'content',
    title: 'Executive Summary',
    bullets: [
      'PhysioMantra operates in two very different markets: India and the US',
      'India is demand-constrained but supply-rich',
      'US is supply-constrained but high ARPU',
      'One platform, three GTMs: US Supply, US Demand, India Demand',
      'Goal: Marketplace balance first, scale second',
    ],
  },
  {
    id: 3,
    type: 'comparison',
    title: 'Market Reality Check',
    comparison: {
      left: {
        title: 'US',
        items: [
          'High ARPU ($200–400 per patient)',
          'Supply constrained (<10 PTs)',
          'Trust and credentialing issues',
          'Slower but defensible growth',
        ],
      },
      right: {
        title: 'India',
        items: [
          'Low ARPU (₹3K–6K per patient)',
          'Supply abundant (1000+ PTs)',
          'Payment and trust driven',
          'Fast revenue velocity',
        ],
      },
    },
    bottomNote: 'India funds US expansion',
  },
  {
    id: 4,
    type: 'content',
    title: "What's Broken Today",
    bullets: [
      'We tried job postings for US PTs → wrong category perception',
      'Patients don\'t search for "telehealth PT"',
      'Insurance expectations are misaligned with credentialing timelines',
      'Scaling without balance creates churn on both sides',
    ],
  },
  {
    id: 5,
    type: 'content',
    title: 'The One Insight That Matters',
    bullets: [
      'This is a two-sided marketplace, not a SaaS funnel',
      'Demand without supply = PT churn',
      'Supply without demand = wasted CAC',
      'Time-to-first-session is the most important metric',
      'Growth is throttled by service capacity, not traffic',
    ],
    highlight: '< 7 days to first session is non-negotiable',
  },
  {
    id: 6,
    type: 'content',
    title: "Why US PTs Aren't Joining",
    bullets: [
      'We looked like a staffing agency',
      'Credentialing-first messaging created confusion',
      'PTs asked "W2 or 1099?" immediately',
      'AI skepticism without context reduced trust',
    ],
    bottomNote: 'Root Cause: Wrong positioning, not wrong product',
  },
  {
    id: 7,
    type: 'content',
    title: 'US PT Acquisition Strategy',
    bullets: [
      'Position PhysioMantra as flexible, gig-based income',
      'Lead with: Supplemental income, Schedule control, Remote work',
      'Credentialing positioned as earnings unlock',
      'AI positioned as PT-controlled assistant',
    ],
    bottomNote: 'Funnel: Community → Demo → First Session → Credentialing',
  },
  {
    id: 8,
    type: 'timeline',
    title: 'US Supply Rollout Plan',
    bullets: [
      'Weeks 1–2: Demo, testimonials, landing page',
      'Weeks 3–4: Facebook groups, Reddit, influencers',
      'Weeks 5–8: Paid ads only if organic works',
    ],
    metrics: [
      { label: 'Active PTs (Month 3)', value: '50–75' },
      { label: 'PT Utilization', value: '60–80%' },
      { label: 'Credentialing Opt-in', value: '>40%' },
    ],
  },
  {
    id: 9,
    type: 'content',
    title: 'How US Patients Think',
    bullets: [
      'They DON\'T search for: "Online physiotherapy platform"',
      'They DO search for: "My knee hurts"',
      'They DO search for: "PT is too expensive"',
      'They DO search for: "I can\'t take time off work"',
    ],
    highlight: 'Value Proposition: Licensed PT care at $59/session from home',
  },
  {
    id: 10,
    type: 'metrics',
    title: 'US Pricing & Insurance Strategy',
    bullets: [
      'Cash Pay (Weeks 1–8): First session $79, Follow-ups $59, Care plans $199–369',
      'Insurance (Week 9+): Only after PT credentialing, Standard copays ($20–40)',
    ],
    highlight: 'Rule: Never promise insurance before it exists',
  },
  {
    id: 11,
    type: 'content',
    title: 'US Patient Acquisition',
    bullets: [
      'Phase 1 (Organic): Google Search (pain-based), Local SEO (city pages + GMB), Reddit & communities',
      'Phase 2 (Paid): Google Ads, Meta Ads',
      'Paid only if: Show-up rate >65%, Repeat booking >40%, First session SLA <7 days',
    ],
  },
  {
    id: 12,
    type: 'content',
    title: 'Retention Drives Economics',
    bullets: [
      "One-off sessions don't work clinically",
      'Care plans are core revenue driver',
      'AI creates daily engagement',
      'Same PT across sessions builds trust',
    ],
    metrics: [
      { label: 'Care Plan Conversion', value: '40–50%' },
      { label: 'First → Second Session', value: '50%' },
    ],
  },
  {
    id: 13,
    type: 'content',
    title: 'India Is a Different Game',
    bullets: [
      'UPI dominates payments',
      'WhatsApp > Email',
      'Family decides, not patient alone',
      'Doctor trust beats ads',
      'Language expands market size',
    ],
    highlight: 'Key Insight: India is won operationally, not creatively',
  },
  {
    id: 14,
    type: 'content',
    title: 'India Demand GTM Strategy',
    bullets: [
      'WhatsApp-first acquisition',
      'Doctor referrals as primary channel',
      'Care plans over single sessions',
      'EMI for affordability',
      'Hyperlocal city launches',
    ],
    bottomNote: 'Pricing: ₹399–499/session | ₹1,999–6,499 plans',
  },
  {
    id: 15,
    type: 'content',
    title: 'India Conversion Infrastructure',
    bullets: [
      'Payments: UPI mandatory, Cards + Netbanking, EMI for plans >₹3,499',
      'WhatsApp Flow: Pain selection, Family-friendly messaging, Human PT callback within 2 hours',
    ],
    highlight: 'Impact: +40% conversion vs web-only',
  },
  {
    id: 16,
    type: 'metrics',
    title: 'Non-Negotiable Rules',
    bullets: [
      'Time to first session <7 days',
      'PT utilization 60–80%',
      'Zero patient wait complaints',
    ],
    highlight: 'If violated: Pause acquisition immediately. Fix supply before scaling demand.',
  },
  {
    id: 17,
    type: 'timeline',
    title: '90-Day Execution Plan',
    bullets: [
      'Month 1: Foundation + organic launch',
      'Month 2: Retention optimization, City expansion (India)',
      'Month 3: Paid acquisition (if validated)',
    ],
    highlight: 'Budget: ~$40K total across markets',
  },
  {
    id: 18,
    type: 'comparison',
    title: 'What Success Looks Like',
    comparison: {
      left: {
        title: 'US',
        items: [
          '50–75 active PTs',
          '400–600 sessions/month',
          '$26–39K revenue',
        ],
      },
      right: {
        title: 'India',
        items: [
          '2,500–3,500 sessions',
          '₹15–20L revenue',
          'Doctor-led growth flywheel',
        ],
      },
    },
  },
  {
    id: 19,
    type: 'content',
    title: 'Built-In Safeguards',
    bullets: [
      'If CAC >2x target → pause paid',
      'If no-shows >40% → fix onboarding',
      'If PT churn >10% → halt demand',
    ],
    highlight: 'Principle: Sustainable growth > fast growth',
  },
  {
    id: 20,
    type: 'content',
    title: 'Immediate Next Steps',
    bullets: [
      'Approve GTM direction',
      'Approve 90-day budget',
      'Lock DRI ownership',
      'Ship Week 1 foundation assets',
    ],
    closingLine: 'This is a marketplace health plan, not a growth hack.',
  },
];
