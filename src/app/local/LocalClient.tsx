// src/app/page.tsx
'use client'

import { ListPage } from '@/components'

export default function LocalClient(props) {
  const { parsedLocal } = props

  return (
    <>
      <ListPage
        type='local'
        title='LOCAL'
        description='지역에 뿌리내린 브랜드들의 이야기를 전합니다. 전통과 현대가 만나는 특별한 순간들을 발견하세요.'
        parsedItems={parsedLocal}
      />
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
