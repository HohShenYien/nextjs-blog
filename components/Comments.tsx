'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import siteMetadata from '@/data/siteMetadata'
import React from 'react'

export default function Comments({ slug }: { slug: string }) {
  return <CommentsComponent commentsConfig={siteMetadata.comments!} slug={slug} />
}
