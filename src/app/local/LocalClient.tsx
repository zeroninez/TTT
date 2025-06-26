// src/app/page.tsx
'use client'

import { Card, RecommendedCard } from '@/components'

export default function LocalClient(props) {
  const { parsedLocal } = props

  const recommendedLocal = parsedLocal.filter((item) => item.properties.recommended)

  return (
    <>
      <div className='w-full h-fit px-6 md:px-12 flex flex-col items-start justify-center py-12 md:pb-20'>
        <span className='text-4xl md:text-6xl font-akzidenzGrotesk'>LOCAL</span>
        <p className='text-base md:text-lg opacity-70 mt-2'>
          지역에 뿌리내린 브랜드들의 이야기를 전합니다. 전통과 현대가 만나는 특별한 순간들을 발견하세요.
        </p>
      </div>
      {/* recommended */}
      <div className='flex flex-col gap-6 md:gap-8 w-full px-6 md:px-12 h-fit pb-12'>
        {recommendedLocal.map(({ id, properties }) => {
          return (
            <RecommendedCard
              page='local'
              key={id}
              id={id}
              properties={{
                thumbnail: properties.thumbnail,
                title: properties.title,
                subtitle: properties.subtitle,
                description: properties.description,
                slug: properties.slug,
                category: properties.category,
                tag: properties.tag,
                lastEdited: properties.lastEdited,
              }}
            />
          )
        })}
      </div>
      <div className='w-full h-fit px-6 md:px-12 flex flex-col items-start justify-start pt-0 md:pt-12 pb-6 md:pb-8'>
        <span className='text-sm md:text-lg mb-4'>ALL</span>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-gray-200 gap-[1px] w-full h-fit p-[1px]'>
          {parsedLocal.map(({ id, properties }) => {
            return (
              <Card
                page='local'
                key={id}
                id={id}
                properties={{
                  thumbnail: properties.thumbnail,
                  title: properties.title,
                  subtitle: properties.subtitle,
                  description: properties.description,
                  slug: properties.slug,
                  category: properties.category,
                  tag: properties.tag,
                  lastEdited: properties.lastEdited,
                }}
              />
            )
          })}
        </div>
      </div>
      <div className='w-full h-fit  px-6 md:px-12 flex flex-col items-start justify-start py-8 md:py-12 gap-6'>
        <div className='w-full h-auto aspect-[5/1] px-12 bg-black py-6 rounded-lg flex flex-col items-center justify-center gap-4'>
          <span className='text-2xl md:text-4xl text-white font-bold'>로컬 브랜드를 추천해주세요!</span>
          <p className='text-base md:text-lg text-white'>
            지역의 숨은 보석 같은 브랜드를 알고 계신가요? 저희와 함께 그들의 이야기를 나누고 싶습니다. 아래 링크를 통해
            추천해주세요.
          </p>
          <button
            className='text-sm md:text-base bg-white text-black px-6 py-2 rounded-xl hover:underline mt-2'
            onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
          >
            브랜드 제보하기
          </button>
        </div>
      </div>
    </>
  )
}
