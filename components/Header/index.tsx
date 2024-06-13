'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../Link'
import MobileNav from '../MobileNav'
import ThemeSwitch from '../ThemeSwitch'
import SearchButton from '../SearchButton'
import useHeaderStyles from '@/components/Header/useHeaderStyles'
import { clsx } from 'clsx'

const Header = () => {
  const { style, className } = useHeaderStyles()
  return (
    <header className={clsx('flex items-center justify-between', className)} style={style}>
      <div className="mx-auto flex max-w-3xl flex-1 items-center justify-between px-4 sm:px-6 lg:max-w-6xl xl:px-0">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo className="h-12 w-12" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="nice-link hidden font-medium sm:block"
              >
                {link.title}
              </Link>
            ))}
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
