import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import yearData from 'app/year-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import ListLayoutWithYears from '@/layouts/ListLayoutWithYears'

export async function generateMetadata({
  params,
}: {
  params: { year: string }
}): Promise<Metadata> {
  const year = decodeURI(params.year)
  return genPageMetadata({
    title: year,
    description: `${siteMetadata.title} ${year} contents`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/years/${year}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const yearCounts = yearData as Record<string, number>
  const yearKeys = Object.keys(yearCounts)
  return yearKeys
}

export default function TagPage({ params }: { params: { year: string } }) {
  const year = parseInt(decodeURI(params.year))
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => new Date(post.date).getFullYear() === year))
  )
  return <ListLayoutWithYears posts={filteredPosts} title={`${year}`} />
}
