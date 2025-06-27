// src/app/product/[slug]/page.tsx

import { getPageContent, getPageBySlug } from '@/app/api/notion'
import { PostPage } from '@/components'
import { notFound } from 'next/navigation'

type PageParams = Promise<{ slug: string }>

export default async function Page({ params }: { params: PageParams }) {
  const expertItem = await getPageBySlug('expert', (await params).slug)

  // Redirect to not found page if not found
  if (!expertItem) notFound()

  const content = await getPageContent(expertItem.id)

  return (
    <>
      <PostPage properties={expertItem.properties} content={content} />
    </>
  )
}
