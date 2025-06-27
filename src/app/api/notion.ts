// src/app/utils/notion.ts

import { Client } from '@notionhq/client'
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { cache } from 'react'

// ✅ 로컬 페이지 데이터 가져오기 및 파싱
import { Item } from '@/types'

// ✅ Notion API 연결
const TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN as string

const LOCAL_ID = process.env.NEXT_PUBLIC_NOTION_LOCAL_DATABASE_ID as string
const EXPERT_ID = process.env.NEXT_PUBLIC_NOTION_EXPERT_DATABASE_ID as string
const THINGS_ID = process.env.NEXT_PUBLIC_NOTION_THINGS_DATABASE_ID as string

export const notionClient = new Client({
  auth: TOKEN,
})

// ✅ 테이블 유형별 DATABASE_ID 매핑
const DATABASE_ID_MAP: Record<string, string> = {
  local: LOCAL_ID,
  expert: EXPERT_ID,
  things: THINGS_ID,
}

// ✅ 타입 가드 함수 - PageObjectResponse인지 확인
function isFullPage(page: any): page is PageObjectResponse {
  return page && 'properties' in page && page.object === 'page'
}

// ✅ 특정 테이블에서 데이터 가져오기 (post, project 등) - 수정된 버전
export const getPagesByTableType = async (tableType: 'local' | 'expert' | 'things'): Promise<PageObjectResponse[]> => {
  const databaseId = DATABASE_ID_MAP[tableType]
  if (!databaseId) throw new Error(`Invalid tableType: ${tableType}`)

  const response = await notionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: 'published',
      checkbox: { equals: true },
    },
  })

  // 타입 가드를 사용하여 PageObjectResponse만 필터링하여 반환
  return response.results.filter(isFullPage)
}

// ✅ 특정 테이블에서 Slug로 페이지 가져오기
export const getPageBySlug = async (
  tableType: 'local' | 'expert' | 'things',
  slug: string,
): Promise<PageObjectResponse | undefined> => {
  const databaseId = DATABASE_ID_MAP[tableType]
  if (!databaseId) throw new Error(`Invalid tableType: ${tableType}`)

  const response = await notionClient.databases.query({
    database_id: databaseId,
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  })

  const firstResult = response.results[0]
  return firstResult && isFullPage(firstResult) ? firstResult : undefined
}

// ✅ 특정 페이지의 블록 콘텐츠 가져오기 (캐싱 적용)
export const getPageContent = cache(async (pageId: string) => {
  try {
    const response = await notionClient.blocks.children.list({ block_id: pageId })
    return response.results as BlockObjectResponse[]
  } catch (error) {
    console.error(`Error fetching page content for pageId: ${pageId}`, error)
    return [] // 에러 발생 시 빈 배열 반환 (페이지 깨짐 방지)
  }
})

// 반환 타입 정의
interface ParsedItem {
  id: string
  properties: {
    title: string
    subtitle: string
    description: string
    slug: string
    createdTime: string
    lastEdited: string
    tag: any[]
    category: string
    thumbnail: string
    recommended: boolean
  }
}

// 방법 1: 타입을 명확히 분리
export const getParsedItemsByTableType = async (itemType: 'local' | 'expert' | 'things'): Promise<ParsedItem[]> => {
  // 변수명 변경으로 충돌 방지
  const rawItems = await getPagesByTableType(itemType)

  return rawItems.map((rawItem: Item) => {
    const thumbnail = `https://zeroninez.notion.site/image/${encodeURIComponent(
      rawItem.properties.thumbnail?.files[0]?.file?.url || '',
    )}?table=block&id=${rawItem.id}&cache=v2`

    const category = rawItem.properties.category?.select?.name || 'No Category'
    const title = rawItem.properties.title?.title[0]?.plain_text || 'No Title'
    const subtitle = rawItem.properties.subtitle?.rich_text[0]?.plain_text || 'No Subtitle'
    const description = rawItem.properties.description?.rich_text[0]?.plain_text || 'No Description'
    const slug = rawItem.properties.slug?.rich_text[0]?.plain_text || 'No Slug'
    const createdTime = rawItem.properties.createdTime?.created_time || new Date().toISOString()
    const lastEdited = rawItem.properties.lastEditedTime?.last_edited_time || new Date().toISOString()
    const recommended = rawItem.properties.recommended?.checkbox || false
    const tag = rawItem.properties.tag?.multi_select || []

    return {
      id: rawItem.id,
      properties: {
        title,
        subtitle,
        description,
        slug,
        createdTime,
        lastEdited,
        tag,
        category,
        thumbnail,
        recommended,
      },
    }
  })
}
