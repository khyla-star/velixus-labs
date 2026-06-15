import { Link } from 'react-router-dom'
import { FOOTER, SITE } from '@/lib/content'
import { VelixLogo } from '@/components/layout/velix-logo'
import { SocialLinksRow } from '@/components/ui/social-links'

function FooterVelixLogo() {
  return <VelixLogo imageClassName="h-10 md:h-11" />
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] text-white">
      <div className="mx-auto w-full max-w-[1380px] px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="pt-16 pb-14 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
          <div className="grid lg:grid-cols-2">
            <div className="lg:pr-14 xl:pr-20">
              <FooterVelixLogo />

              <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:gap-x-14">
                {FOOTER.addresses.map((address) => (
                  <p key={address} className="max-w-[260px] text-base leading-[1.7] text-[#a0a0a0]">
                    {address}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-[#2a2a2a] pt-12 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0 xl:pl-20">
              <h2 className="text-base font-semibold text-white">{FOOTER.usefulLinksHeading}</h2>

              <div className="mt-5 grid max-w-[420px] grid-cols-2 gap-x-16 gap-y-0">
                {FOOTER.linkColumns.map((column, columnIndex) => (
                  <nav key={columnIndex} className="flex flex-col gap-4" aria-label={`Footer links ${columnIndex + 1}`}>
                    {column.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="text-base leading-none text-[#a0a0a0] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                ))}
              </div>

              <div className="mt-8 h-px w-full bg-[#2a2a2a]" aria-hidden />

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-base font-semibold leading-none text-white transition-opacity hover:opacity-80"
                >
                  {SITE.email}
                </a>
                <a
                  href={SITE.phoneHref}
                  className="text-base font-semibold leading-none text-accent transition-opacity hover:opacity-80"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-[#2a2a2a] py-8 md:flex-row md:justify-between md:py-9 lg:py-10">
          <SocialLinksRow links={FOOTER.social} className="justify-center md:justify-start" />

          <p className="text-center text-base leading-none text-[#8f8f8f]">
            Copyright © {year} {SITE.name} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
