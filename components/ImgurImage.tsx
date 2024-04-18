import Image from '@/components/Image'
import { clsx } from 'clsx'
import { ImageProps } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

type ImgurSize =
  | 'small square'
  | 'big square'
  | 'small thumbnail'
  | 'medium thumbnail'
  | 'large thumbnail'
  | 'huge thumbnail'
  | 'full'

interface ImgurUrlProp {
  size: ImgurSize
  imgurId: string
  format?: string
}

const sizeToCharMap: Record<ImgurSize, string> = {
  full: '',
  'small square': 's',
  'big square': 'b',
  'small thumbnail': 't',
  'medium thumbnail': 'm',
  'large thumbnail': 'l',
  'huge thumbnail': 'h',
}

export const generateImgurUrl = ({
  size = 'large thumbnail',
  imgurId,
  format = 'png',
}: ImgurUrlProp) => {
  // not using size for gif
  const sizePostfix = format === 'gif' ? '' : sizeToCharMap[size]
  return `https://i.imgur.com/${imgurId}${sizePostfix}.${format}`
}

interface ImgurImageProps extends Omit<ImageProps, 'src'> {
  imgurId: string // imgur id
  format: string
  size?: ImgurSize
  alt: string
  aspectRatio?: number
  align?: 'left' | 'right' | 'center'
  caption?: ReactNode
  width: number
  height: number
  href?: string
}

const ImgurImage = ({
  imgurId,
  format,
  size = 'full',
  alt,
  aspectRatio,
  align = 'center',
  caption,
  href,
  ...props
}: ImgurImageProps) => {
  // @ts-ignore
  const imgSrc = generateImgurUrl({ size, imgurId, format })

  let image = (
    <>
      <Image {...props} alt={alt} src={imgSrc} />
    </>
  )

  if (aspectRatio) {
    image = <div style={{ aspectRatio }}>{image}</div>
  }
  if (href) {
    image = (
      <Link className="!bg-none" href={href} target="_blank">
        {image}
      </Link>
    )
  }
  return (
    <div
      className={clsx('flex flex-col', {
        'items-center': align === 'center',
        'items-start': align === 'left',
        'items-end': align === 'right',
      })}
    >
      {image}
      {caption && (
        <div className="-mt-4 mb-3 text-base font-light italic text-gray-600 dark:text-gray-300">
          {caption}
        </div>
      )}
    </div>
  )
}
export default ImgurImage
