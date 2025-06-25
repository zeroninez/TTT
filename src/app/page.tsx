// src/app/page.tsx

import { getPagesByTableType } from '@/app/api/notion'
import Home from '@/app/home'

export const revalidate = 30 // 30초마다 데이터 갱신 (자동 업데이트)

export default async function Index() {
  return (
    <>
      <Home />
    </>
  )
}
