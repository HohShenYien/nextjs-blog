import Link from '../Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import style from './Footer.module.css'
import { clsx } from 'clsx'

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="relative w-screen overflow-x-hidden">
        <Image
          src="/static/footer/footer_bg.png"
          alt="Footer Background Image"
          width={1254}
          height={264}
          className="w-screen"
        />
        <Image
          src="/static/footer/2.gif"
          alt="Footer Decoration guy"
          height={96}
          width={60}
          className={clsx('absolute h-12 w-auto md:h-16 lg:h-24', style.animatedSecondGuy)}
        />
        <Image
          src="/static/footer/3.gif"
          alt="Footer Decoration guy"
          height={96}
          width={211}
          className={clsx('absolute h-12 w-auto md:h-16 lg:h-24', style.animatedThirdGuy)}
        />
        <Image
          src="/static/footer/4.gif"
          alt="Footer Decoration guy"
          height={96}
          width={60}
          className={clsx('absolute h-12 w-auto md:h-16 lg:h-24', style.animatedFourthGuy)}
        />
        <Image
          src="/static/footer/1.gif"
          alt="Footer Decoration guy"
          height={96}
          width={89}
          className={clsx('absolute h-12 w-auto md:h-16 lg:h-24', style.animatedFirstGuy)}
        />
      </div>
      <div className="flex flex-col items-center bg-indigo-200/50 pt-12 dark:bg-indigo-800/30">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="website" href="https://shenyien.cyou" size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          Forked from{' '}
          <Link
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
            className="text-primary-700 dark:text-primary-300"
          >
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
