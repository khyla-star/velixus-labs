import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/content'
import { VelixLogo } from '@/components/layout/velix-logo'
import { cn } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/button'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="velix-container flex h-16 items-center justify-between gap-6">
        <VelixLogo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive(pathname, link.href)
                  ? 'text-accent'
                  : 'text-muted hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
            Get in Touch
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-mono text-lg">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md lg:hidden">
          <nav className="velix-container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'rounded-md px-3 py-3 text-sm font-medium',
                  isActive(pathname, link.href) ? 'text-accent' : 'text-muted',
                )}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2 w-full">
              Get in Touch
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  )
}
