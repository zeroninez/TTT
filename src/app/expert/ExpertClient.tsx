// src/app/page.tsx
'use client'

import { Card, RecommendedCard } from '@/components'

export default function ExpertClient(props) {
  const { parsedExpert } = props

  const recommendedExpert = parsedExpert.filter((item) => item.properties.recommended)

  return (
    <>
      <div className='w-full h-fit px-4 md:px-6 flex flex-col items-center justify-center py-12 md:pb-20'>
        <span className='text-4xl md:text-6xl'>EXPERT</span>
        <p className='text-base md:text-lg text-gray-500 mt-2'>
          지역에 뿌리내린 브랜드들의 이야기를 전합니다. 전통과 현대가 만나는 특별한 순간들을 발견하세요.
        </p>
      </div>
      {/* recommended */}
      <div className='flex flex-col gap-6 md:gap-8 w-full px-4 md:px-6 h-fit pb-12'>
        {recommendedExpert.map(({ id, properties }) => {
          return (
            <RecommendedCard
              page='expert'
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
      <div className='w-full h-fit px-4 md:px-6 flex flex-col items-start justify-start pt-0 md:pt-12 pb-6 md:pb-8'>
        <span className='text-sm md:text-lg font-semibold mb-4'>모든 전문가 스토리</span>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full h-fit pb-12'>
          {parsedExpert.map(({ id, properties }) => {
            return (
              <Card
                page='expert'
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
      <div className='w-full h-fit  px-4 md:px-6 flex flex-col items-start justify-start py-8 md:py-12 gap-6'>
        <div className='w-full h-auto aspect-[5/1] px-12 bg-blue-600 py-6 rounded-lg flex flex-col items-center justify-center gap-4'>
          <span className='text-2xl md:text-4xl text-white font-bold'>전문가 브랜드를 추천해주세요!</span>
          <p className='text-base md:text-lg text-white'>
            지역의 숨은 보석 같은 브랜드를 알고 계신가요? 저희와 함께 그들의 이야기를 나누고 싶습니다. 아래 링크를 통해
            추천해주세요.
          </p>
          <button
            className='text-sm md:text-base bg-white text-blue-600 px-6 py-2 rounded-xl hover:underline mt-2'
            onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
          >
            브랜드 제보하기
          </button>
        </div>
      </div>
    </>
  )
}
