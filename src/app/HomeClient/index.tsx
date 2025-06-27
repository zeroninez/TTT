'use client'

import { Grid, Logo } from '@/components'

export default function HomeClient(props) {
  const { localItems, thingsItems, expertItems } = props

  const recentlySortedAllItems = [...localItems, ...thingsItems, ...expertItems]
    .sort((a, b) => new Date(b.properties.createdTime).getTime() - new Date(a.properties.createdTime).getTime())
    .slice(0, 8)

  const recentlySortedRecommendedItems = recentlySortedAllItems
    .filter((item) => item.properties.recommended)
    .sort((a, b) => new Date(b.properties.createdTime).getTime() - new Date(a.properties.createdTime).getTime())
    .slice(0, 4)

  return (
    <>
      <div className='w-full h-fit p-6 md:p-12 bg-black text-white flex flex-col justify-center items-center gap-16 md:gap-20'>
        <div className='w-full h-fit flex flex-col items-start justify-center gap-2'>
          <Logo className='w-full' />
        </div>
        {/* Newly Added Section */}
        <div className='w-full h-fit flex flex-col items-start justify-center gap-6 md:gap-8'>
          <div className='w-full h-fit flex flex-col items-start justify-center gap-2'>
            <h1 className='text-4xl md:text-6xl font-bold font-akzidenzGrotesk'>NEW</h1>
            <p className='text-lg md:text-xl text-gray-300'>따끈한 지역 브랜드들의 이야기를 만나보세요.</p>
          </div>
          <Grid items={recentlySortedAllItems} />
        </div>
        {/* Recommended Section */}
        <div className='w-full h-fit flex flex-col items-start justify-center gap-6 md:gap-8 pb-12 md:pb-16'>
          <div className='w-full h-fit flex flex-col items-start justify-center gap-2'>
            <h1 className='text-4xl md:text-6xl font-bold font-akzidenzGrotesk'>RECOMMENDED</h1>
            <p className='text-lg md:text-xl text-gray-300'>추천하는 지역 브랜드들의 이야기를 만나보세요.</p>
          </div>
          <Grid items={recentlySortedRecommendedItems} />
        </div>
      </div>
    </>
  )
}
