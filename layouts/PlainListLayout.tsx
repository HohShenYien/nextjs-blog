import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ImgurImage from '@/components/ImgurImage'

interface PlainListLayoutProps {
  posts: CoreContent<Blog>[]
}

export default function PlainListLayout({ posts }: PlainListLayoutProps) {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && <div className="mt-4 text-center">No posts found.</div>}
      {posts.map((post) => {
        const { slug, date, title, summary, tags, image } = post
        return (
          <li key={slug} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-5 xl:items-start xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
                <div className="space-y-4 lg:col-span-4 lg:flex lg:items-stretch lg:space-x-6 lg:space-y-0">
                  <Link href={`/${slug}`} className="block">
                    <ImgurImage
                      imgurId={image}
                      alt={title}
                      height={240}
                      width={240}
                      format={'jpeg'}
                      size="huge thumbnail"
                      className="aspect-[1.91] w-full lg:my-3 lg:w-[240px]"
                    />
                  </Link>
                  <div className="flex-1 space-y-5">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/${slug}`}
                        className="text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}
