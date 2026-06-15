import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function ScrollToTopButton() {  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[#121212] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-opacity hover:opacity-90 sm:bottom-8 sm:right-8"
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
        <path d="M12 17V8M8 11l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
