'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Item } from '@/types'
import classNames from 'classnames'
import { getRelativeTime } from '@/utils'

export const RecommendedCard = ({
  page,
  id,
  properties,
}: {
  page: string
  id: string
  properties: {
    title: string
    subtitle: string
    description: string
    slug: string
    category: string | null
    tag: { name: string }[]
    lastEdited: string
    thumbnail: string
  }
}) => {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      key={id}
      className={classNames(
        'w-full h-auto aspect-[5/1] relative',
        'flex flex-row justify-between items-center transition-all duration-300 ease-in-out',
        'bg-black text-white',
      )}
    >
      {/* 카드 내용 */}
      <div className='w-full h-full flex flex-col gap-4 items-start justify-between p-6 md:p-8'>
        <div className='w-full h-fit flex flex-col items-start justify-start gap-2'>
          <span className=' bg-white text-xs text-black px-3 py-1 rounded-lg mb-2'>추천 로컬 브랜드</span>

          {/* 카테고리 태그 */}
          {/* {properties.category && (
          <span className=' bg-blue-700 text-xs text-white px-2 py-0.5 rounded-full'>{properties.category}</span>
        )} */}

          <span className='text-2xl md:text-4xl leading-tight'>{properties.title}</span>
          <span className='text-base md:text-lg leading-tight'>{properties.subtitle}</span>
          <p className='text-sm md:text-base'>{properties.description}</p>
          {/* 마지막 수정 시간 */}
          <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-xs opacity-70'>
            <p className=''>{'작성자'}</p>
            <p className=''>{getRelativeTime(properties.lastEdited)}</p>
          </div>
          {/* 태그 */}
          {properties.tag.length > 0 && (
            <div className='w-full h-fit flex flex-row items-center justify-start gap-2'>
              {properties.tag.map((t, index) => (
                <span key={index} className='text-xs bg-white text-black px-2 py-0.5'>
                  {t.name}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* 자세히 보기 */}
        <button
          className='text-sm md:text-base rounded-xl hover:underline mt-2'
          onClick={() => router.push(`/${page}/${properties.slug}`)}
        >
          자세히 보기 →
        </button>
      </div>
      {/* 썸네일 */}
      <div className='w-full h-auto aspect-[4/3] '>
        <img
          src={properties.thumbnail}
          alt={properties.title}
          className='w-full h-full overflow-hidden object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
    </motion.div>
  )
}
