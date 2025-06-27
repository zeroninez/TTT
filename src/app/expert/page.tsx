// src/app/local/page.tsx

import { Item } from '@/types'
import { getParsedItemsByTableType } from '../api/notion'
import ExpertClient from './ExpertClient'

export const revalidate = 30 // 30초마다 데이터 갱신 (자동 업데이트)

export default async function ExpertPage() {
  const parsedExpert = await getParsedItemsByTableType('expert')

  return (
    <>
      <ExpertClient parsedExpert={parsedExpert} />
    </>
  )
}
