import ImgurImage from '@/components/ImgurImage'
import Tag from '@/components/Tag'
import { Series } from '@/data/seriesData'
import { clsx } from 'clsx'
import { Blog } from 'contentlayer/generated'
import Link from 'next/link'

interface SeriesPostsProps {
  series: Series
  seriesPosts: Blog[]
  curSlug: string
}

export default function SeriesPosts({ curSlug, series, seriesPosts }: SeriesPostsProps) {
  return (
    <aside>
      <p className="text-sm uppercase">This article is part of the series</p>
      <h3 className="mb-6 text-lg font-semibold">
        <Link className="nice-link" href={`/series/${series.id}`}>
          {series.title}
        </Link>
      </h3>
      <ul className="space-y-3">
        {seriesPosts.slice(0, 5).map(({ slug, title, image, tags, summary }) => (
          <li
            key={slug}
            className={clsx(
              { 'bg-primary-50 dark:bg-primary-950': curSlug === slug },
              'rounded-sm px-1 py-2'
            )}
          >
            <div className="space-y-4 lg:col-span-4 lg:flex lg:items-stretch lg:space-x-6 lg:space-y-0">
              <Link href={`/${slug}`} className="block">
                <ImgurImage
                  imgurId={image}
                  alt={title}
                  height={240}
                  width={240}
                  format={'jpeg'}
                  size="huge thumbnail"
                  className="aspect-[1.91] w-full lg:w-[240px]"
                />
              </Link>
              <div className="flex-1 space-y-5">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold leading-8 tracking-tight">
                      <Link href={`/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h4>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {seriesPosts.length > 5 && (
        <div className="mt-8 flex justify-end text-base font-medium leading-6">
          <Link
            aria-label="More posts"
            href={`/series/${series.id}`}
            className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
          >
            More Posts &rarr;
          </Link>
        </div>
      )}
    </aside>
  )
}
