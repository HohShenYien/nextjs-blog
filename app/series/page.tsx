import seriesData from '@/data/seriesData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Series' })

export default function Series() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Series
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some multi-blog series or tutorials that I worked on
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {seriesData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                seriesId={d.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
