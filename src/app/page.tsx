// src/app/page.tsx

import { getParsedItemsByTableType } from '@/app/api/notion'
import HomeClient from '@/app/HomeClient'

export const revalidate = 30 // 30초마다 데이터 갱신 (자동 업데이트)

export default async function Index() {
  const parsedLocal = await getParsedItemsByTableType('local')
  const parsedThings = await getParsedItemsByTableType('things')
  const parsedExpert = await getParsedItemsByTableType('expert')

  return (
    <>
      <HomeClient localItems={parsedLocal} thingsItems={parsedThings} expertItems={parsedExpert} />
    </>
  )
}
