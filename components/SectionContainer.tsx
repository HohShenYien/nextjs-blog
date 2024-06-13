import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-[calc(100vw-32px)] sm:px-6 md:max-w-3xl lg:max-w-6xl xl:px-0">
      {children}
    </section>
  )
}
