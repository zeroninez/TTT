// src/app/local/page.tsx

import { Item } from '@/types'
import { getPagesByTableType, getParsedItemsByTableType } from '../api/notion'
import LocalClient from './LocalClient'

export const revalidate = 30 // 30초마다 데이터 갱신 (자동 업데이트)

export default async function LocalPage() {
  const parsedLocal = await getParsedItemsByTableType('local')
  return (
    <>
      <LocalClient parsedLocal={parsedLocal} />
    </>
  )
}
