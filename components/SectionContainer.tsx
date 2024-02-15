import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-[90vw] px-4 sm:px-6 md:max-w-3xl lg:max-w-5xl xl:px-0">
      {children}
    </section>
  )
}
