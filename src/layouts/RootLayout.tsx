import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ScrollToTopButton, ScrollToTopOnNavigate } from '@/components/layout/scroll-to-top'
import { MotionProvider } from '@/components/motion/motion-provider'

export function RootLayout() {
  return (
    <MotionProvider>
      <ScrollToTopOnNavigate />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </MotionProvider>
  )
}
