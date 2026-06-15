import { Fragment } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { useId } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'
const BLOCK_HEIGHT_BASE = 8421

const BLOCK_META = [
  {
    hash: '0x9b3e71a2c4f8d901',
    prevHash: '0x0000000000000000',
    merkle: '0xa1f3e8b2c9d04716',
    timestamp: '1718123456',
    nonce: '2847391',
    txs: ['0x7f3a2e91b4c8d0f3', '0x2c8e5a1f9b3d6720'],
  },
  {
    hash: '0xc8d45f90a3e71b28',
    prevHash: '0x9b3e71a2c4f8d901',
    merkle: '0xd4b7c1e9f2a85630',
    timestamp: '1718123512',
    nonce: '9103847',
    txs: ['0x5d1c8f3a7e2b9046', '0x8a4f6c2e1d9b3750'],
  },
  {
    hash: '0x1a7e62b4f8c3d905',
    prevHash: '0xc8d45f90a3e71b28',
    merkle: '0xe8c2a5f1b7d43962',
    timestamp: '1718123588',
    nonce: '5529103',
    txs: ['0x3b9e7a1f4c8d2057', '0x6f2d8c4a1e9b7360'],
  },
  {
    hash: '0x4f2a8c1de7b39056',
    prevHash: '0x1a7e62b4f8c3d905',
    merkle: '0xf1d8b3c6a9e24705',
    timestamp: '1718123664',
    nonce: '7382014',
    txs: ['0x9c4f2a8e1d7b3065', '0x1e8b5d3f7a2c9041'],
  },
] as const

function truncateHash(hash: string, head = 6, tail = 4) {
  if (hash.length <= head + tail + 2) return hash
  return `${hash.slice(0, head + 2)}…${hash.slice(-tail)}`
}

/** Interlocking chain links with metallic depth */
function ChainLinkArt({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const grad = `ledger-chain-${uid}`
  const shine = `ledger-shine-${uid}`
  const glow = `ledger-glow-${uid}`

  return (
    <svg viewBox="0 0 112 44" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="42%" stopColor="currentColor" stopOpacity="0.62" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={glow} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <line
        x1="8"
        y1="22"
        x2="104"
        y2="22"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* Vertical link — sits behind horizontal links */}
      <ellipse
        cx="38"
        cy="22"
        rx="7.5"
        ry="13"
        stroke={`url(#${grad})`}
        strokeWidth="2.75"
        fill="#0a0a0a"
      />
      <ellipse
        cx="74"
        cy="22"
        rx="7.5"
        ry="13"
        stroke={`url(#${grad})`}
        strokeWidth="2.75"
        fill="#0a0a0a"
      />

      {/* Horizontal links — interlock through vertical links */}
      <ellipse
        cx="22"
        cy="22"
        rx="13"
        ry="7.5"
        stroke={`url(#${grad})`}
        strokeWidth="2.75"
        fill="#0a0a0a"
        filter={`url(#${glow})`}
      />
      <ellipse
        cx="56"
        cy="22"
        rx="13"
        ry="7.5"
        stroke={`url(#${grad})`}
        strokeWidth="2.75"
        fill="#0a0a0a"
        filter={`url(#${glow})`}
      />
      <ellipse
        cx="90"
        cy="22"
        rx="13"
        ry="7.5"
        stroke={`url(#${grad})`}
        strokeWidth="2.75"
        fill="#0a0a0a"
        filter={`url(#${glow})`}
      />

      {/* Inner highlights */}
      <ellipse cx="22" cy="20" rx="7" ry="3.5" stroke={`url(#${shine})`} strokeWidth="0.75" opacity="0.55" />
      <ellipse cx="56" cy="20" rx="7" ry="3.5" stroke={`url(#${shine})`} strokeWidth="0.75" opacity="0.55" />
      <ellipse cx="90" cy="20" rx="7" ry="3.5" stroke={`url(#${shine})`} strokeWidth="0.75" opacity="0.55" />
    </svg>
  )
}

/** Port on block edge where the chain attaches (desktop horizontal chain only) */
function BlockLinkPort({ side }: { side: 'left' | 'right' }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute top-1/2 z-20 hidden -translate-y-1/2 items-center md:flex',
        side === 'left' ? '-left-[0.35rem] flex-row-reverse' : '-right-[0.35rem]',
      )}
      aria-hidden
    >
      <span
        className={cn(
          'h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent/90 bg-[#0e0e10] shadow-[0_0_10px_rgba(184,255,44,0.45)]',
        )}
      />
      <span
        className={cn(
          'h-[2px] w-3 bg-gradient-to-r from-accent/75 to-accent/10',
          side === 'left' && 'bg-gradient-to-l',
        )}
      />
    </div>
  )
}

/** Vertical chain link between stacked blocks on mobile */
function MobileBlockConnector({ hash }: { hash: string }) {
  return (
    <div className="flex flex-col items-center py-3 md:hidden" aria-hidden>
      <span className="h-4 w-px bg-gradient-to-b from-accent/10 to-accent/45" />
      <ChainLinkArt className="my-1 h-9 w-20 rotate-90 text-accent" />
      <p className="rounded border border-accent/15 bg-[#0e0e10] px-2 py-0.5 font-mono text-[0.55rem] leading-tight text-accent/80">
        {truncateHash(hash, 4, 3)}
        <span className="mx-0.5 text-muted/45">↓</span>
        prev
      </p>
      <span className="mt-1 h-4 w-px bg-gradient-to-b from-accent/45 to-accent/10" />
    </div>
  )
}

/** Terminal cap after the last block — desktop horizontal chain */
function ChainTerminal() {
  return (
    <div
      className="relative hidden w-[4.25rem] shrink-0 flex-col items-center justify-center self-center px-0.5 lg:w-[5rem] md:flex"
      aria-hidden
    >
      <ChainLinkArt className="h-11 w-full text-accent sm:h-12" />

      <div className="relative mt-2 w-full min-w-0 sm:min-w-[4.5rem]">
        <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-accent/10 via-accent/45 to-transparent" />
        <div className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/70 shadow-[0_0_6px_rgba(184,255,44,0.55)]" />
        <p className="relative mx-auto w-fit rounded border border-accent/15 bg-bg/90 px-1.5 py-0.5 text-center font-mono text-[0.48rem] leading-tight text-accent/80 backdrop-blur-sm sm:text-[0.52rem]">
          chain end
        </p>
      </div>
    </div>
  )
}
/** Chain bridge between consecutive blocks with hash lineage (desktop) */
function BlockChainConnector({ hash }: { hash: string }) {
  const reduced = useReducedMotion()

  return (
    <div
      className="relative hidden w-[4.25rem] shrink-0 flex-col items-center justify-center self-center px-0.5 lg:w-[5rem] md:flex"
      aria-hidden
    >
      <ChainLinkArt className="h-11 w-full text-accent sm:h-12" />

      <div className="relative mt-2 w-full min-w-0 sm:min-w-[4.5rem]">
        <div className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-accent/10 via-accent/45 to-accent/10" />
        <div className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/70 shadow-[0_0_6px_rgba(184,255,44,0.55)]" />
        <div className="absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/70 shadow-[0_0_6px_rgba(184,255,44,0.55)]" />

        {!reduced && (
          <m.span
            className="absolute left-[18%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent"
            animate={{ x: ['0%', '220%'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', repeatDelay: 0.35 }}
          />
        )}

        <p className="relative mx-auto w-fit rounded border border-accent/15 bg-bg/90 px-1.5 py-0.5 text-center font-mono text-[0.48rem] leading-tight text-accent/80 backdrop-blur-sm sm:text-[0.52rem]">
          {truncateHash(hash, 4, 3)}
          <span className="mx-0.5 text-muted/45">→</span>
          prev
        </p>
      </div>
    </div>
  )
}

type Fundamental = {  readonly title: string
  readonly description: string
}

type BlockchainFundamentalsProps = {
  fundamentals: readonly Fundamental[]
}

function BlockField({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-2 font-mono text-[0.58rem] leading-snug sm:text-[0.6rem]">
      <span className="shrink-0 uppercase tracking-[0.12em] text-muted/80">{label}</span>
      <span className={`truncate text-right ${accent ? 'text-accent' : 'text-muted'}`}>{value}</span>
    </div>
  )
}

function LedgerBlock({
  item,
  index,
  isGenesis,
}: {
  item: Fundamental
  index: number
  isGenesis: boolean
}) {
  const reduced = useReducedMotion()
  const meta = BLOCK_META[index]
  const height = BLOCK_HEIGHT_BASE + index

  return (
    <m.article
      className="relative flex w-full flex-col overflow-hidden border border-[#2a2a2e] bg-[#0e0e10] md:h-full md:min-w-0 md:flex-1 md:overflow-visible"
      whileHover={reduced ? undefined : { y: -3 }}
      transition={{ duration: 0.2 }}
    >
      {!isGenesis && <BlockLinkPort side="left" />}
      <BlockLinkPort side="right" />

      {/* Block header */}
      <div className="flex min-h-[3.25rem] shrink-0 items-center border-b border-[#2a2a2e] bg-[#141416] px-4 py-3">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
              Block
            </span>
            {isGenesis ? (
              <span className="rounded border border-accent/30 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-accent/70">
                genesis
              </span>
            ) : null}
          </div>
          <span className="shrink-0 font-mono text-sm font-medium text-foreground">#{height}</span>
        </div>
      </div>

      {/* Header fields */}
      <div className="shrink-0 space-y-1.5 border-b border-[#2a2a2e]/80 bg-[#101012] px-4 py-3">
        <BlockField label="prev_hash" value={truncateHash(meta.prevHash)} accent={!isGenesis} />
        <BlockField label="merkle_root" value={truncateHash(meta.merkle)} />
        <BlockField label="timestamp" value={meta.timestamp} />
        <BlockField label="nonce" value={meta.nonce} />
      </div>

      {/* Block body */}
      <div className="flex flex-col px-4 py-4 md:min-h-[12.5rem] md:flex-1">
        <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted/70">
          payload
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-foreground md:text-[1.05rem]">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

        <div className="mt-auto border-t border-[#2a2a2e]/60 pt-3">
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted/70">
            transactions [{meta.txs.length}]
          </p>
          <ul className="mt-2 space-y-1">
            {meta.txs.map((tx) => (
              <li
                key={tx}
                className="flex items-center gap-2 font-mono text-[0.58rem] text-muted/90 sm:text-[0.6rem]"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent/50" aria-hidden />
                <span className="truncate">{truncateHash(tx, 4, 4)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Block hash footer */}
      <div className="shrink-0 border-t border-accent/20 bg-[#121214] px-4 py-3">
        <BlockField label="hash" value={truncateHash(meta.hash)} accent />
      </div>
    </m.article>
  )
}
export function BlockchainFundamentals({ fundamentals }: BlockchainFundamentalsProps) {
  return (
    <div className="relative">
      {/* Mobile: full-width vertical chain */}
      <div className="flex flex-col md:hidden">
        {fundamentals.map((item, i) => {
          const isLast = i === fundamentals.length - 1

          return (
            <Fragment key={item.title}>
              {i > 0 ? <MobileBlockConnector hash={BLOCK_META[i - 1].hash} /> : null}
              <Reveal delay={i * 0.08} className="w-full">
                <LedgerBlock item={item} index={i} isGenesis={i === 0} />
              </Reveal>
              {isLast ? (
                <p className="mt-3 text-center font-mono text-[0.55rem] uppercase tracking-[0.14em] text-accent/70">
                  chain end
                </p>
              ) : null}
            </Fragment>
          )
        })}
      </div>

      {/* Desktop: horizontal chain */}
      <div className="hidden md:block">
        <div className="flex w-full min-w-0 items-stretch gap-0 py-2">
          {fundamentals.map((item, i) => {
            const meta = BLOCK_META[i]
            const isLast = i === fundamentals.length - 1

            return (
              <Fragment key={item.title}>
                <Reveal
                  delay={i * 0.08}
                  className="flex min-w-0 flex-1 shrink-0 items-stretch [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:min-w-0"
                >
                  <LedgerBlock item={item} index={i} isGenesis={i === 0} />
                </Reveal>
                {!isLast ? <BlockChainConnector hash={meta.hash} /> : <ChainTerminal />}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}