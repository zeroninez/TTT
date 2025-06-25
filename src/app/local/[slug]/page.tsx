// src/app/product/[slug]/page.tsx

import { getPageContent, getPageBySlug, notionClient } from '@/app/api/notion'
import { Breadcrumbs } from '@/components'
import { NotionRenderer } from '@/components/NotionRenderer'
import { notFound } from 'next/navigation'

type PageParams = Promise<{ slug: string }>

export default async function Page({ params }: { params: PageParams }) {
  const localItem = await getPageBySlug('local', (await params).slug)

  // Redirect to not found page if not found
  if (!localItem) notFound()

  const content = await getPageContent(localItem.id)

  const createdTime = new Date(localItem.created_time).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
  })
  const title = (localItem.properties.title as any).title[0].plain_text
  const subTitle = (localItem.properties.subtitle as any).rich_text[0]?.plain_text || 'No subtitle available'

  return (
    <>
      <div className='w-full max-w-4xl h-fit px-4 md:px-6 py-12 md:py-20 flex flex-col items-start justify-start gap-4'>
        <Breadcrumbs />
        <span className='text-xs md:text-sm text-gray-500'>Vol | {createdTime}</span>
        <span className='text-4xl md:text-6xl font-semibold leading-none'>{title}</span>
        <span className='text-lg md:text-xl text-gray-500'>{subTitle}</span>
      </div>
      <div className='w-full h-px bg-gray-200 my-4' />
      <div className='w-full max-w-4xl h-fit px-4 md:px-6  py-8 md:py-12 flex flex-col items-start justify-start gap-4'>
        {content.length > 0 ? (
          <NotionRenderer blocks={content} />
        ) : (
          <div className='bg-white p-4 rounded-lg'>No content</div>
        )}
      </div>
    </>
  )
}
