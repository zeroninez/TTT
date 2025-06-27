// src/app/product/[slug]/page.tsx

import { getPageContent, getPageBySlug, notionClient } from '@/app/api/notion'
import { Breadcrumbs, PostPage } from '@/components'
import { NotionRenderer } from '@/components/NotionRenderer'
import { notFound } from 'next/navigation'

type PageParams = Promise<{ slug: string }>

export default async function Page({ params }: { params: PageParams }) {
  const thingsItem = await getPageBySlug('things', (await params).slug)

  // Redirect to not found page if not found
  if (!thingsItem) notFound()

  const content = await getPageContent(thingsItem.id)

  return (
    <>
      <PostPage properties={thingsItem.properties} content={content} />
    </>
  )
}
