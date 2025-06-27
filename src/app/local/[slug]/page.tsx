// src/app/product/[slug]/page.tsx

import { getPageContent, getPageBySlug } from '@/app/api/notion'
import { PostPage } from '@/components'
import { notFound } from 'next/navigation'

type PageParams = Promise<{ slug: string }>

export default async function Page({ params }: { params: PageParams }) {
  const localItem = await getPageBySlug('local', (await params).slug)

  // Redirect to not found page if not found
  if (!localItem) notFound()

  const content = await getPageContent(localItem.id)

  return (
    <>
      <PostPage properties={localItem.properties} content={content} />
    </>
  )
}
