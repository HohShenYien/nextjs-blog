import TOCInline, { TOCInlineProps } from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import ImgurImage from '@/components/ImgurImage'

const TableOfContents = (props: TOCInlineProps) => {
  return (
    <div className="toc">
      <h3>Table of Contents</h3>
      <TOCInline {...props} />
    </div>
  )
}

export const components: MDXComponents = {
  Image,
  TOCInline: TableOfContents,
  ImgurImage,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
