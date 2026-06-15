export const SITE = {
  name: 'Velixus Labs',
  logo: '/images/velixus-labs-logo.svg',
  headerImage: '/images/velixus-labs-hero.svg',
  pageHeroImage: '/images/page-hero-background.png',
  email: 'hello@velixuslabs.com',
  phone: '913-390-0390',
  phoneHref: 'tel:+19133900390',
} as const

export const FOOTER = {
  addresses: [
    '33 South Woodside Avenue, Bergenfield, NJ 07621',
    'Union Square, New York, 10003, USA',
  ],
  usefulLinksHeading: 'Useful Link',
  linkColumns: [
    [
      { label: 'AI', href: '/ai' },
      { label: 'Blockchain', href: '/blockchain' },
      { label: 'Web3', href: '/web3' },
    ],
    [
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Crypto', href: '/crypto' },
    ],
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/velix', icon: 'linkedin' as const },
    { label: 'Email', href: `mailto:${SITE.email}`, icon: 'email' as const },
    { label: 'Telegram', href: 'https://t.me/velix', icon: 'telegram' as const },
  ],
  newsletterPlaceholder: 'Your Email',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'AI', href: '/ai' },
  { label: 'Blockchain', href: '/blockchain' },
  { label: 'Web3', href: '/web3' },
  { label: 'Crypto', href: '/crypto' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const

export const AI_HERO = {
  eyebrow: 'AI',
  title: 'Enterprise AI Engineering',
  lead: '',
  description:
    'Our AI systems combine RAG, embeddings, orchestration, and observability into secure, enterprise-ready stacks built for regulated and high-growth teams.',
  primaryCta: { label: 'Talk To Our Experts', href: '/contact' },
  secondaryCta: { label: 'Free Consultation', href: '/contact' },
} as const

export const AI_SECTIONS = {
  problems: {
    eyebrow: 'Problems',
    title: 'What we solve',
    description:
      'Teams come to Velixus Labs when fragmented data, brittle prompts, and manual operations block reliable AI adoption at scale.',
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'AI engineering stack',
    description:
      'Core platform capabilities across retrieval, vectors, agents, and automation — the modern fields we design and ship for enterprise workloads.',
    initialVisibleCount: 6,
    learnMoreLabel: 'Learn More',
    showLessLabel: 'Show Less',
  },
  benefits: {
    eyebrow: 'Benefits',
    title: 'Why Velixus Labs for AI engineering',
    description:
      'Partner with Velixus Labs to move from experiments to production AI — with measurable outcomes across speed, reliability, cost, and scale.',
  },
} as const

export const AI_PROBLEMS = [
  {
    title: 'Fragmented Knowledge Silos',
    description:
      'Knowledge trapped in documents, tickets, and siloed APIs with no reliable retrieval layer.',
  },
  {
    title: 'Production LLM Failure',
    description:
      'Prototype LLM features that fail under latency, cost, and compliance requirements in production.',
  },
  {
    title: 'Manual Workflow Bottlenecks',
    description:
      'Manual workflows across support, operations, and analytics that do not scale with product growth.',
  },
  {
    title: 'No Unified Vector Strategy',
    description:
      'No unified vector strategy for embeddings, re-ranking, and freshness across business data.',
  },
  {
    title: 'Ungoverned Agent Experiments',
    description:
      'Agent experiments without orchestration, guardrails, or measurable evaluation in live environments.',
  },
] as const

export const AI_SERVICES = [
  {
    title: 'RAG & Vector Retrieval',
    description:
      'Analyze large knowledge bases to identify context, rank relevance, and ground LLM responses with production RAG pipelines and vector search.',
    image: '/images/ai-capabilities/rag-vector-retrieval.jpg',
  },
  {
    title: 'Embedding Pipelines',
    description:
      'Ingest, chunk, embed, and index enterprise content with versioning, metadata filters, and refresh workflows tuned for accuracy.',
    image: '/images/ai-capabilities/embedding-pipelines.jpg',
  },
  {
    title: 'Agent Orchestration',
    description:
      'Execute multi-step agent workflows in milliseconds with tool routing, memory, fallbacks, and policy-aware decision paths.',
    image: '/images/ai-capabilities/agent-orchestration.jpg',
  },
  {
    title: 'Real-Time Observability',
    description:
      'Receive instant alerts for latency spikes, retrieval drift, model errors, and pipeline failures across your AI systems.',
    image: '/images/ai-capabilities/real-time-observability.jpg',
  },
  {
    title: 'Knowledge Ops & Governance',
    description:
      'Monitor, manage, and optimize document corpora, vector indexes, and access controls with enterprise governance built in.',
    image: '/images/ai-capabilities/knowledge-ops-governance.jpg',
  },
  {
    title: 'Evaluation & Guardrails',
    description:
      'Simulate production scenarios, benchmark retrieval quality, and enforce safety rails before agents reach end users.',
    image: '/images/ai-capabilities/evaluation-guardrails.jpg',
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate analysis-to-action flows from retrieval through LLM reasoning to API execution based on pre-set business rules.',
    image: '/images/ai-capabilities/workflow-automation.jpg',
  },
  {
    title: 'Multi-Model Routing',
    description:
      'Route workloads across multiple model providers and internal endpoints to optimize cost, latency, and capability fit.',
    image: '/images/ai-capabilities/multi-model-routing.jpg',
  },
  {
    title: 'Context & Signal Analysis',
    description:
      'Enrich decisions with structured signals from logs, events, and operational data alongside unstructured knowledge sources.',
    image: '/images/ai-capabilities/context-signal-analysis.jpg',
  },
  {
    title: 'Custom AI System Development',
    description:
      'Build tailored agent and retrieval systems aligned to your domain, data estate, and compliance requirements.',
    image: '/images/ai-capabilities/custom-ai-system-development.jpg',
  },
  {
    title: 'AI Architecture Consultation',
    description:
      'Design the right stack — vector stores, RAG design, agent topology, and MLOps — before a single production deployment.',
    image: '/images/ai-capabilities/ai-architecture-consultation.jpg',
  },
  {
    title: 'AI Platform as a Service',
    description:
      'Run managed AI infrastructure with security, scaling, monitoring, and operational support handled by Velixus Labs engineering.',
    image: '/images/ai-capabilities/ai-platform-as-a-service.jpg',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Integrate retrieval, agents, and automation into CRMs, data warehouses, internal tools, and existing product surfaces.',
    image: '/images/ai-capabilities/enterprise-integration.jpg',
  },
  {
    title: 'Model & Algorithm Design',
    description:
      'Develop routing, re-ranking, and domain-specific logic that learns from feedback loops and production telemetry.',
    image: '/images/ai-capabilities/model-algorithm-design.jpg',
  },
  {
    title: 'MLOps Maintenance & Updates',
    description:
      'Ongoing tuning for embeddings, indexes, prompts, eval suites, and model policies as your products and data evolve.',
    image: '/images/ai-capabilities/mlops-maintenance-updates.jpg',
  },
] as const

export const AI_BENEFITS = [
  {
    title: 'Ship Production AI Faster',
    description:
      'Go from prototype to governed production systems in weeks — with RAG, agents, and APIs engineered to deploy, not demo.',
    outcomes: [
      'Production-grade RAG from the first sprint',
      'Agent flows with policy-aware guardrails',
      'Operator consoles and APIs ready for rollout',
    ],
  },
  {
    title: 'Reduce Operational Risk',
    description:
      'Ship AI that survives compliance review, real traffic, and model drift — because evaluation and observability are built in.',
    outcomes: [
      'Benchmarked retrieval before users see output',
      'Governed access across knowledge and tools',
      'Live alerts on latency, drift, and failures',
    ],
  },
  {
    title: 'Lower Total Cost of Ownership',
    description:
      'Control model spend and engineering load with routing, pipeline tuning, and managed operations designed for efficiency.',
    outcomes: [
      'Right model for every workload and budget',
      'Embedding pipelines tuned for throughput',
      'Optional fully managed Velixus Labs platform ops',
    ],
  },
  {
    title: 'Scale With Enterprise Confidence',
    description:
      'Expand AI across products and teams on modular infrastructure — with live data, integration paths, and continuous MLOps.',
    outcomes: [
      'Adopt capabilities incrementally without rework',
      'Fresh operational context in every decision',
      'Ongoing tuning as data and products evolve',
    ],
  },
] as const

export const AI_CTA = {
  eyebrow: 'Get started',
  title: 'Ready to build production AI with Velixus Labs?',
  description:
    'Talk with our engineering team about RAG pipelines, agent platforms, and the stack your product needs to ship.',
  cta: { label: 'Apply Now', href: '/contact' },
} as const

export const BLOCKCHAIN_HERO = {
  eyebrow: 'Blockchain',
  title: 'Enterprise Blockchain Systems',
  lead: 'Velixus Labs engineers on-chain infrastructure for institutions that need security, auditability, and programmable settlement — not experimental prototypes.',
  description: '',
  primaryCta: { label: 'Talk To Our Experts', href: '/contact' },
  secondaryCta: { label: 'Free Consultation', href: '/contact' },
} as const

export const BLOCKCHAIN_SECTIONS = {
  fundamentals: {
    eyebrow: 'Ledger',
    title: 'Core on-chain primitives',
    description:
      'Every enterprise blockchain system rests on immutable records, encoded rules, and shared state between parties.',
  },
  services: {
    eyebrow: 'Modules',
    title: 'Deployed on-chain systems',
    description:
      'A registry of blockchain modules Velixus Labs engineers — indexed like a ledger explorer, scoped for production.',
  },
} as const

export const BLOCKCHAIN_VALUES = [
  {
    title: 'Immutable Truth',
    description: 'Tamper-evident records that every party can verify without a central authority.',
  },
  {
    title: 'Programmable Trust',
    description: 'Business rules encoded in contracts — executed exactly, every time, on shared state.',
  },
  {
    title: 'Atomic Settlement',
    description: 'Value and data move together in single transactions, reducing counterparty risk.',
  },
  {
    title: 'Multi-Party Coordination',
    description: 'Shared ledgers align organizations without reconciling siloed databases.',
  },
] as const

export const BLOCKCHAIN_SERVICES = [
  {
    title: 'Smart Contract Engineering',
    description:
      'Audited, gas-optimized contracts for DeFi protocols, NFT platforms, and enterprise business logic.',
  },
  {
    title: 'Enterprise Blockchain Networks',
    description:
      'Permissioned chains and consortium architectures for B2B settlement and institutional workflows.',
  },
  {
    title: 'Asset Tokenization',
    description:
      'Token issuance, vesting schedules, cap tables, and lifecycle management on-chain.',
  },
  {
    title: 'On-Chain Identity',
    description:
      'Verifiable credentials, attestations, and decentralized identity for regulated environments.',
  },
  {
    title: 'Supply Chain Provenance',
    description:
      'End-to-end traceability, provenance tracking, and multi-party verification systems.',
  },
  {
    title: 'Cross-Chain Infrastructure',
    description:
      'Bridges, messaging layers, and interoperability for assets and data across networks.',
  },
  {
    title: 'Security & Audit Review',
    description:
      'Formal review, threat modeling, and hardening before contracts touch production value.',
  },
  {
    title: 'Blockchain Consultation',
    description:
      'Architecture design for chain selection, tokenomics, governance, and incremental adoption.',
  },
] as const

export const BLOCKCHAIN_CTA = {
  eyebrow: 'Get started',
  title: 'Ready to build on-chain with Velixus Labs?',
  description:
    'Talk with our team about smart contracts, enterprise networks, and the blockchain architecture your organization needs.',
  cta: { label: 'Apply Now', href: '/contact' },
} as const

export const WEB3_HERO = {
  eyebrow: 'Web3',
  title: 'Web3 infrastructure for products people use',
  lead: '',
  description:
    '',
  primaryCta: { label: 'Talk To Our Experts', href: '/contact' },
  secondaryCta: { label: 'Free Consultation', href: '/contact' },
  chips: [],
} as const

export const WEB3_SECTIONS = {
  showcase: {
    eyebrow: 'Product',
    title: 'From browser to blockchain',
    description:
      'A clear connection path — and the four layers Velixus Labs engineers so your Web3 product stays fast, secure, and understandable.',
    connectionImage: '/images/ai-capabilities/enterprise-integration.jpg',
    connectionImageAlt:
      'Diagram illustrating the Web3 connection path from browser and wallet through APIs to the blockchain',
  },
  friction: {
    eyebrow: 'Friction',
    title: 'Where users drop off',
    description:
      'The problems we fix first — stated plainly, because most Web3 churn happens before a transaction ever reaches the chain.',
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'What we ship',
    description:
      'Modular Web3 systems — each scoped for production, documented for your team, and designed to compose.',
  },
  delivery: {
    eyebrow: 'Standards',
    title: 'Performance you can measure',
    description:
      'Targets we design toward from day one — not benchmarks added after launch.',
  },
} as const

export const WEB3_STACK = [
  {
    layer: '01',
    title: 'dApp Interface',
    description: 'The product surface — dashboards, onboarding, transaction UI, and responsive flows users interact with daily.',
    tags: ['React', 'Next.js', 'mobile-ready'],
  },
  {
    layer: '02',
    title: 'Wallet Bridge',
    description: 'Connect, sign, and switch chains without dead ends — MetaMask, WalletConnect, embedded wallets, and account abstraction.',
    tags: ['WalletConnect', 'SIWE', 'multi-chain'],
  },
  {
    layer: '03',
    title: 'Backend & Indexers',
    description: 'RPC routing, event indexing, caching, and APIs that keep your app fast even when the chain is slow.',
    tags: ['indexers', 'webhooks', 'GraphQL'],
  },
  {
    layer: '04',
    title: 'On-Chain Layer',
    description: 'Smart contracts, token logic, and settlement — the final source of truth your application reads and writes.',
    tags: ['contracts', 'tokens', 'governance'],
  },
] as const

export const WEB3_FRICTION = [
  {
    title: 'Wallet connect drop-off',
    description: 'Users abandon at the first connect prompt because the flow is confusing, slow, or breaks on mobile.',
  },
  {
    title: 'Chain switching chaos',
    description: 'Wrong network errors, manual RPC edits, and lost transactions when users move between chains.',
  },
  {
    title: 'Fragile auth sessions',
    description: 'SIWE sessions that expire silently, forcing re-sign loops and breaking returning user experience.',
  },
  {
    title: 'Missing on-chain data',
    description: 'Apps query RPCs directly and stall — no indexer means slow loads, stale balances, and failed reads.',
  },
] as const

export const WEB3_SERVICES = [
  {
    title: 'dApps Development',
    description: 'Full-stack decentralized applications with production-grade UX, state management, and transaction flows.',
    layer: 'Frontend',
  },
  {
    title: 'Wallet Integration',
    description: 'Multi-chain wallet connect, signing flows, embedded wallets, and account abstraction paths.',
    layer: 'Wallet',
  },
  {
    title: 'Web3 Authentication',
    description: 'SIWE, passkeys, session tokens, and recovery flows that feel like modern web login.',
    layer: 'Auth',
  },
  {
    title: 'On-Chain Indexing',
    description: 'Event pipelines, cached reads, and APIs that deliver chain data to your app in milliseconds.',
    layer: 'Data',
  },
  {
    title: 'DAO Systems',
    description: 'Governance, proposals, treasury management, and on-chain voting infrastructure.',
    layer: 'Governance',
  },
  {
    title: 'Multi-Chain Routing',
    description: 'Single interface across EVM and non-EVM chains — one auth layer, many networks.',
    layer: 'Wallet',
  },
  {
    title: 'Gasless Onboarding',
    description: 'Sponsored transactions and relay infrastructure so first-time users never need native gas tokens.',
    layer: 'Auth',
  },
  {
    title: 'Developer SDKs',
    description: 'Documented client libraries, typed contract bindings, and integration kits for your engineering team.',
    layer: 'Frontend',
  },
] as const

export const WEB3_DELIVERY = [
  { metric: '<2s', label: 'Wallet connect flow' },
  { metric: '99.95%', label: 'Auth availability' },
  { metric: '<500ms', label: 'Indexed event delivery' },
  { metric: '<1s', label: 'Session recovery' },
] as const

export const WEB3_CTA = {
  eyebrow: 'Get started',
  title: 'Ready to ship Web3 with Velixus Labs?',
  description:
    'Talk with our team about dApps, wallet auth, indexing, and the Web3 infrastructure your product needs.',
  cta: { label: 'Apply Now', href: '/contact' },
} as const

export const CRYPTO_HERO = {
  eyebrow: 'Crypto Development',
  title: 'Velixus Labs builds your Token, Wallet, and Payment Gateway',
  lead: '',
  description:
    '',
  primaryCta: { label: 'Talk To Our Experts', href: '/contact' },
  secondaryCta: { label: 'Free Consultation', href: '/contact' },
  services: ['Token Development', 'Wallet Systems', 'Payment Gateway', 'Custody', 'Exchange API', 'Treasury Tools'] as const,
} as const

export const CRYPTO_SECTIONS = {
  services: {
    eyebrow: 'What Velixus Labs builds',
    title: 'Crypto products we develop for you',
    description:
      'Token, Wallet, and Payment Gateway are our core — plus custody, exchange connectivity, and treasury tooling when your product needs the full stack.',
  },
  deliverables: {
    eyebrow: 'What you receive',
    title: 'Engineering outputs, not slide decks',
    description:
      'Every Velixus Labs crypto project ships auditable code, APIs, and operator tooling your team owns after launch.',
  },
} as const

export const CRYPTO_CORE_SERVICES = [
  {
    id: 'token',
    title: 'Token Development',
    description:
      'Custom token contracts on Ethereum, BSC, Polygon, Solana, and more — with vesting, cap tables, mint/burn controls, and compliance-ready metadata.',
    features: ['ERC-20 / SPL / BEP-20', 'Vesting & lockups', 'Governance hooks', 'Audit-ready contracts'],
    primary: true,
    icon: 'token',
  },
  {
    id: 'wallet',
    title: 'Wallet Systems',
    description:
      'Hot, warm, and cold wallet infrastructure — MPC signing, multi-sig policy, embedded wallets, and admin dashboards for asset operations.',
    features: ['MPC & multi-sig', 'Embedded wallets', 'Balance & history API', 'Role-based approvals'],
    primary: true,
    icon: 'wallet',
  },
  {
    id: 'gateway',
    title: 'Payment Gateway',
    description:
      'Crypto checkout and invoicing APIs — accept BTC, ETH, USDC, and USDT with webhooks, settlement rules, and fiat off-ramp integration.',
    features: ['Multi-asset checkout', 'Webhook events', 'Merchant dashboard', 'Fiat off-ramp hooks'],
    primary: true,
    icon: 'gateway',
  },
  {
    id: 'custody',
    title: 'Custody Solutions',
    description: 'Institutional key management, asset segregation, and vault policies for high-value digital asset storage.',
    features: ['Cold storage policy', 'Asset segregation', 'Audit logs'],
    primary: false,
    icon: 'custody',
  },
  {
    id: 'exchange',
    title: 'Exchange Infrastructure',
    description: 'Matching engines, liquidity connectivity, and back-office tooling for exchange and OTC operations.',
    features: ['Order matching', 'Liquidity APIs', 'Risk controls'],
    primary: false,
    icon: 'exchange',
  },
  {
    id: 'treasury',
    title: 'Treasury Systems',
    description: 'Corporate treasury dashboards, multi-entity flows, and automated reporting for digital asset books.',
    features: ['Cash positioning', 'Multi-entity flows', 'Reporting exports'],
    primary: false,
    icon: 'treasury',
  },
] as const

export const CRYPTO_DELIVERABLES = [
  { title: 'Smart contract suite', description: 'Deployed, verified token and payment contracts with owner controls and upgrade paths.' },
  { title: 'Wallet & signing API', description: 'REST and SDK endpoints for balances, transfers, approvals, and transaction history.' },
  { title: 'Payment gateway API', description: 'Checkout sessions, payment links, webhooks, and merchant reconciliation exports.' },
  { title: 'Operator dashboard', description: 'Admin UI for support, finance, and compliance — refunds, limits, and audit trails.' },
] as const

export const CRYPTO_CTA = {
  eyebrow: 'Get started',
  title: 'Ready to build your Token, Wallet, or Payment Gateway?',
  description:
    'Talk with Velixus Labs about token development, wallet infrastructure, payment gateway APIs, and the crypto products your business needs to launch.',
  cta: { label: 'Apply Now', href: '/contact' },
} as const

export const CULTURE_VALUES = [
  { title: 'Ownership', description: 'Engineers own outcomes end-to-end — from design through production.' },
  { title: 'Innovation', description: 'We push the boundary of AI + Web3 without sacrificing reliability.' },
  { title: 'Engineering excellence', description: 'Code review, testing, and architecture discipline are non-negotiable.' },
  { title: 'Global collaboration', description: 'Remote-first teams aligned across regions and time zones.' },
] as const

export const CAREERS_CULTURE = {
  backgroundImage: '/images/careers/culture-background.png',
} as const

export const CAREERS_POSITIONS_SECTION = {
  eyebrow: 'Open roles',
  title: 'Current positions',
  description:
    'Every role is an opportunity to work on infrastructure problems at the frontier of AI and Web3.',
} as const

export const CAREERS_FALLBACK_CTA = {
  title: "Don't see your role?",
  description: "We're always open to exceptional people. Tell us how you'd contribute.",
  cta: { label: 'Get in Touch', href: '/contact' },
} as const

export const OPEN_POSITIONS = [
  {
    id: 'full-stack-engineer',
    title: 'Full Stack Engineer',
    team: 'Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
    compensation: '$140k – $200k',
    summary:
      'Build end-to-end features across AI agents, APIs, and Web3 integrations for production workloads.',
    about:
      'You will ship full-stack product capabilities that connect LLM orchestration, retrieval pipelines, and on-chain systems. This role spans backend services, internal tooling, and customer-facing surfaces — with a strong bias toward reliable delivery in production.',
    responsibilities: [
      'Design and implement APIs, services, and data flows across AI and blockchain modules.',
      'Partner with frontend engineers to deliver cohesive product experiences from prototype to launch.',
      'Own feature quality through testing, observability, and performance tuning in live environments.',
      'Contribute to architecture decisions for scalable, secure, multi-tenant infrastructure.',
    ],
    requirements: [
      '5+ years building production web applications with modern TypeScript stacks.',
      'Strong experience with Node.js or similar backend runtimes and relational or document databases.',
      'Comfort integrating third-party APIs, auth systems, and cloud-native deployment workflows.',
      'Bonus: exposure to LLM tooling, vector search, or smart contract integrations.',
    ],
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    team: 'Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
    compensation: '$130k – $190k',
    summary:
      'Craft infrastructure-grade interfaces for dashboards, wallets, and developer tools.',
    about:
      'You will shape how engineers and operators interact with complex AI and Web3 systems — turning dense infrastructure into clear, responsive interfaces. Expect work on data-heavy dashboards, wallet flows, and design-system-driven product UI.',
    responsibilities: [
      'Build accessible, performant React interfaces for dashboards, onboarding, and admin tools.',
      'Integrate wallet providers, real-time data streams, and API-driven workflows into cohesive UX.',
      'Collaborate with design and backend teams to refine information architecture and interaction patterns.',
      'Maintain frontend quality through component tests, profiling, and design-system consistency.',
    ],
    requirements: [
      '4+ years of professional frontend development with React and TypeScript.',
      'Strong command of CSS layout, responsive design, and component-driven architecture.',
      'Experience consuming REST or GraphQL APIs and handling async, error, and loading states.',
      'Bonus: Web3 wallet integration, data visualization, or motion-driven interface work.',
    ],
  },
] as const

export type OpenPosition = (typeof OPEN_POSITIONS)[number]

export function getOpenPositionById(id: string): OpenPosition | undefined {
  return OPEN_POSITIONS.find((position) => position.id === id)
}

export const CAREERS_APPLY = {
  email: 'careers@velixuslabs.com',
  prompt: 'Send us your CV and a short note on why this role excites you.',
  buttonLabel: 'Apply Now',
  modalEyebrow: 'Apply for',
  submitLabel: 'Submit Application',
  successTitle: 'Application Submitted!',
  successMessageBefore: 'Thanks for applying to',
  successMessageAfter:
    'Our team will review your application and reach out within 5–7 business days.',
  doneLabel: 'Done',
  resumeHint: 'Click to upload PDF, DOC, DOCX',
  linkedinHint: 'Must start with https://www.linkedin.com/in/',
  maxResumeSizeMb: 5,
} as const

export const CAREERS_INTERVIEW_PROCESS = [
  { step: '1', title: 'Intro call', description: '30-minute conversation with our recruiting team.' },
  { step: '2', title: 'Technical screen', description: '60-minute session with an engineering lead.' },
  { step: '3', title: 'Panel interview', description: '90-minute deep dive with senior engineers.' },
  { step: '4', title: 'Offer', description: 'Reference checks and final offer discussion.' },
] as const

export const CONTACT_PAGE = {
  hero: {
    eyebrow: 'Contact',
    title: 'Get in touch with Velixus Labs',
    description:
      'Discuss your AI, blockchain, Web3, or crypto infrastructure requirements with our engineering team.',
  },
  panel: {
    badge: 'Have questions?',
    title: 'Send us a Message',
    submitLabel: 'Get In Touch',
    submitSuccessTitle: 'Message sent',
    submitSuccessMessage:
      'Thanks for reaching out. Our team has received your message and will get back to you shortly.',
  },
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/velix', icon: 'linkedin' as const },
    { label: 'Email', href: `mailto:${SITE.email}`, icon: 'email' as const },
    { label: 'Telegram', href: 'https://t.me/velix', icon: 'telegram' as const },
  ],
} as const
