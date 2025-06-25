// src/app/local/page.tsx

import { Item } from '@/types'
import { getPagesByTableType } from '../api/notion'
import ExpertClient from './ExpertClient'

export const revalidate = 30 // 30초마다 데이터 갱신 (자동 업데이트)

export default async function ExpertPage() {
  const expert = await getPagesByTableType('expert')

  const parsedExpert = expert.map((item: Item) => {
    const thumbnail = `https://zeroninez.notion.site/image/${encodeURIComponent(item.properties.thumbnail?.files[0]?.file?.url || '')}?table=block&id=${item.id}&cache=v2`
    const category = item.properties.category?.select?.name || 'No Category'
    const title = item.properties.title?.title[0]?.plain_text || 'No Title'
    const subtitle = item.properties.subtitle?.rich_text[0]?.plain_text || 'No Subtitle'
    const description = item.properties.description?.rich_text[0]?.plain_text || 'No Description'
    const slug = item.properties.slug?.rich_text[0]?.plain_text || 'No Slug'
    const lastEdited = item.properties.lastEditedTime?.last_edited_time || new Date().toISOString()
    const recommended = item.properties.recommended?.checkbox || false

    const tag = item.properties.tag?.multi_select || []
    return {
      id: item.id,
      properties: {
        title,
        subtitle,
        description,
        slug,
        lastEdited,
        tag,
        category,
        thumbnail,
        recommended,
      },
    }
  })

  return (
    <>
      <ExpertClient parsedExpert={parsedExpert} />
    </>
  )
}
