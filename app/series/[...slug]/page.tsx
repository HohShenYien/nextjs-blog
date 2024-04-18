import 'css/prism.css'
import 'katex/dist/katex.css'

import { allBlogs } from 'contentlayer/generated'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import seriesData from '@/data/seriesData'
import Image from '@/components/Image'
import PlainListLayout from '@/layouts/PlainListLayout'
import { dateSortDesc } from 'pliny/utils/contentlayer'
import ImgurImage, { generateImgurUrl } from '@/components/ImgurImage'

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
  const image = generateImgurUrl({ imgurId: series.imgurId, size: 'full', format: 'jpeg' })

  const ogImages = [
    {
      url: image,
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
      images: [image],
    },
  }
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const series = seriesData.find((s) => s.id === slug)
  if (!series) {
    return
  }
  const posts = allBlogs
    .filter((p) => p.series === slug)
    .sort((a, b) => (series.inverted ? dateSortDesc(a.date, b.date) : dateSortDesc(b.date, a.date)))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pb-8 pt-6 lg:flex lg:space-x-8">
        <ImgurImage
          format="jpeg"
          alt={series.title}
          imgurId={series.imgurId}
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
      <PlainListLayout posts={posts} />
    </div>
  )
}
