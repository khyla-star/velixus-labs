import { SITE } from '@/lib/content'

export const HERO = {
  eyebrow: '',
  titleLines: ['ARTIFICIAL INTELLIGENCE', 'BLOCKCHAIN'] as const,
  subtitle:
    'Delivering patented, gas-free private blockchain and cutting-edge AI to power secure, scalable, and cost-efficient enterprise systems.',
  primaryCta: { label: 'View System Architecture', href: '#ecosystem' },
  secondaryCta: { label: 'Request Engineering Call', href: '/contact' },
} as const

export const ECOSYSTEM_HEADING = {
  badge: 'Services we offer',
  lines: ['Enterprise', 'Blockchain & AI', 'Development', 'services'] as const,
  cta: { label: 'All services', href: '/contact' },
} as const

export const TESTIMONIALS = {
  overallRating: 4.9,
  reviewCount: 145,
  titlePrefix: 'TESTIMONI',
  titleAccent: 'ALS',
  items: [
    {
      id: 'krach',
      rating: 5.0,
      quote:
        'Velixus Labs delivered our enterprise blockchain signing layer with gas-free settlement and audit-ready contracts. Their engineering team moved from architecture to production faster than any partner we have used.',
      name: 'Keith Krach',
      role: 'Former CEO, DocuSign',
    },
    {
      id: 'clubb',
      rating: 4.9,
      quote:
        'Velixus Labs built the data and AI infrastructure behind our healthcare platform — secure pipelines, reliable orchestration, and a team that understood regulated environments from day one.',
      name: 'Dr. Susan Clubb',
      role: 'Veterinary Expert',
    },
    {
      id: 'chen',
      rating: 4.7,
      quote:
        'We engaged Velixus Labs for AI systems integration. Their agent routing, retrieval stack, and observability layer cut latency dramatically and gave us production confidence.',
      name: 'Marcus Chen',
      role: 'VP Engineering, FinLedger',
    },
    {
      id: 'okonkwo',
      rating: 4.9,
      quote:
        'Velixus Labs deployed a private blockchain network for our settlement workflows — instant finality, zero gas overhead, and smart contracts our auditors could trust.',
      name: 'Amara Okonkwo',
      role: 'CTO, ChainBridge Capital',
    },
    {
      id: 'walsh',
      rating: 4.8,
      quote:
        'Velixus Labs Web3 infrastructure let us ship wallet auth, session recovery, and on-chain indexing in one cohesive build. It felt like a dedicated product team, not a vendor.',
      name: 'Elena Walsh',
      role: 'Product Director, NovaPay',
    },
    {
      id: 'singh',
      rating: 5.0,
      quote:
        'Velixus Labs crypto platforms powered our custody and payment rails with institutional controls. Complex treasury workflows went live on schedule with clear operational visibility.',
      name: 'Raj Singh',
      role: 'Head of Digital Assets, Meridian Bank',
    },
  ],
} as const

export const OUR_PROCESS = {
  badge: 'OUR PROCESS',
  title: 'Best services Provider',
  items: [
    {
      id: 'research',
      title: 'Research',
      description:
        'Velixus Labs maps enterprise AI and blockchain opportunities — identifying where gas-free settlement, private ledgers, and intelligent automation remove cost, latency, and intermediary risk.',
    },
    {
      id: 'concept',
      title: 'Concept',
      description:
        'We design permissioned architectures that unite AI orchestration, smart contracts, and secure data pipelines into systems built for regulated, production-grade environments.',
    },
    {
      id: 'implement',
      title: 'Implement',
      description:
        'Velixus Labs ships across finance, healthcare, supply chain, energy, and government — from wallet infrastructure and agent routing to on-chain settlement and audit-ready deployments.',
    },
    {
      id: 'advantage',
      title: 'Advantage',
      description:
        'Patented Proof-of-Trust consensus, instant finality, layered security, and closed-source control deliver precision and efficiency beyond traditional PoW blockchain models.',
    },
  ],
} as const

export const CONTACT_CTA = {
  badge: 'DO YOU HAVE A PROJECT IN MIND',
  titleLines: ['For instant support', 'Please reach us'] as const,
  phone: {
    label: 'Phone',
    value: '917-345-0270',
    href: 'tel:+19173450270',
  },
  email: {
    label: 'Official Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  joinCta: { label: 'Join US', href: '/careers' },
} as const

export const CAPABILITIES_METRICS = [
  { label: 'Private Blockchain with Instant Settlement', value: 88 },
  { label: 'AI-Powered Virtual Assistants', value: 95 },
  { label: 'Cybersecurity services', value: 90 },
  { label: 'Cloud Cost Optimization', value: 88 },
  { label: 'Custom AI + Blockchain Applications', value: 90 },
] as const

export const SYSTEM_NODES = [
  {
    id: 'ai',
    title: 'AI Systems',
    label: 'INTELLIGENCE',
    headline: 'AI-Powered Infrastructure for Enterprise Automation',
    href: '/ai',
    summary: 'Agents, retrieval, and orchestration built as production infrastructure.',
    logoSrc: '/logos/ai-systems.svg',
    logoAlt: 'AI Systems logo',
    subsystems: ['Agents', 'RAG pipelines', 'Automation systems', 'LLM orchestration'],
    capabilities: [
      'Multi-agent orchestration',
      'RAG & vector retrieval',
      'LLM routing & fallbacks',
      'Workflow automation',
      'Model fine-tuning pipelines',
      'Inference observability',
    ],
    performance: [
      'Sub-200ms inference routing',
      '99.9% agent uptime SLA',
      '40% faster retrieval latency',
      'Horizontal GPU auto-scaling',
      'Real-time eval monitoring',
      'Token cost optimization',
    ],
    angle: -90,
  },
  {
    id: 'blockchain',
    title: 'Blockchain Systems',
    label: 'CONNECTION',
    headline: 'Private Blockchain with Instant Settlement',
    href: '/blockchain',
    summary: 'Eliminate gas fees with our high-speed, tamper-evident blockchain system.',
    logoSrc: 'https://cdn.simpleicons.org/ethereum/FFFFFF',
    logoAlt: 'Blockchain Systems logo',
    subsystems: ['Smart contracts', 'Token systems', 'Identity layer'],
    capabilities: [
      'Gas-free private chains',
      'Smart contract lifecycle',
      'On-chain identity (DID)',
      'Token issuance & compliance',
      'Cross-chain messaging',
      'Audit-ready deployment',
    ],
    performance: [
      'Instant finality settlement',
      '10k+ TPS private network',
      'Zero gas enterprise txs',
      'Sub-second block confirmation',
      '24/7 node redundancy',
      'Compliance audit trail',
    ],
    angle: 0,
  },
  {
    id: 'web3',
    title: 'Web3 Infrastructure',
    label: 'INFRASTRUCTURE',
    headline: 'Wallet Auth, dApp Kits, and On-Chain Indexing',
    href: '/web3',
    summary: 'Session-based Web3 auth and indexed on-chain events for modern web products.',
    logoSrc: 'https://cdn.simpleicons.org/solidity/FFFFFF',
    logoAlt: 'Web3 Infrastructure logo',
    subsystems: ['dApps', 'Wallet integration', 'Authentication'],
    capabilities: [
      'dApp frontend kits',
      'Wallet & SSO integration',
      'Session-based Web3 auth',
      'On-chain event indexing',
      'Multi-wallet support',
      'DAO governance hooks',
    ],
    performance: [
      '<2s wallet connect flow',
      '99.95% auth availability',
      'Indexed events under 500ms',
      'Multi-chain single sign-on',
      'Gasless onboarding paths',
      'Session recovery under 1s',
    ],
    angle: 90,
  },
  {
    id: 'crypto',
    title: 'Crypto Platforms',
    label: 'PLATFORMS',
    headline: 'Institutional Payments, Custody, and Exchange Rails',
    href: '/crypto',
    summary: 'Payments, custody, and exchange infrastructure with institutional-grade controls.',
    logoSrc: 'https://cdn.simpleicons.org/bitcoin/FFFFFF',
    logoAlt: 'Crypto Platforms logo',
    subsystems: ['Payments', 'Custody', 'Exchange infrastructure'],
    capabilities: [
      'Payment rails & checkout',
      'Institutional custody',
      'Exchange connectivity',
      'Treasury management',
      'Fiat on/off ramps',
      'Risk & fraud controls',
    ],
    performance: [
      'Settlement under 3 seconds',
      'MPC custody architecture',
      '99.99% payment uptime',
      'Multi-currency routing',
      'Real-time fraud screening',
      'Regulatory reporting ready',
    ],
    angle: 180,
  },
] as const

/** Dark abstract network — Unsplash (free license): Johnny Guitar */
export const ECOSYSTEM_BACKGROUND = {
  src: 'https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?fm=jpg&q=80&w=2400&auto=format&fit=crop',
  alt: 'Abstract network of glowing nodes and screens in darkness',
} as const
