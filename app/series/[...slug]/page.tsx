import 'css/prism.css'
import 'katex/dist/katex.css'

import { allBlogs } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import seriesData from '@/data/seriesData'
import ListLayoutWithTags from '@/layouts/ListLayoutWithTags'
import Image from '@/components/Image'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const series = seriesData.find((s) => s.id === slug)
  if (!series) {
    return
  }
  const ogImages = [
    {
      url: series.imgSrc,
    },
  ]

  return {
    title: series.title,
    description: series.description,
    openGraph: {
      title: series.title,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      url: './',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: series.title,
      description: series.description,
      images: [series.imgSrc],
    },
  }
}

export const generateStaticParams = async () => {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const series = seriesData.find((s) => s.id === slug)
  if (!series) {
    return
  }
  const posts = allBlogs.filter((p) => p.series === slug)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pb-8 pt-6 lg:flex lg:space-x-8">
        <Image
          alt={series.title}
          src={series.imgSrc}
          className="mb-4 aspect-[1.91] object-cover object-center lg:mb-0"
          height={190}
          width={360}
        />
        <div className="space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            {series.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{series.description}</p>
        </div>
      </div>
      <ListLayoutWithTags posts={posts} title={series.title} />
    </div>
  )
}
