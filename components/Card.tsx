import Image from './Image'
import Link from './Link'

type CardProps = {
  title: string
  description: string
  seriesId: string
  imgSrc: string
}

const Card = ({ title, description, imgSrc, seriesId }: CardProps) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <Link href={`/series/${seriesId}`} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="aspect-[1.91] object-cover object-center"
            height={286}
            width={544}
          />
        </Link>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          <Link href={`/series/${seriesId}`} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <Link
          href={`/series/${seriesId}`}
          className="text-base font-medium leading-6 text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
          aria-label={`Link to ${title}`}
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  </div>
)

export default Card
