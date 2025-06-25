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
      onClick={() => router.push(`/${page}/${properties.slug}`)}
      key={id}
      className={classNames(
        'w-full h-fit relative p-4 md:p-6',
        'flex flex-row justify-between items-center transition-all duration-300 ease-in-out',
        'bg-blue-50',
        'rounded-2xl overflow-hidden',
        'cursor-pointer',
      )}
    >
      {/* 카드 내용 */}
      <div className='w-full h-fit flex flex-col gap-4 items-start justify-start p-4 '>
        <span className=' bg-blue-700 text-xs text-white px-3 py-1 rounded-full'>추천 로컬 브랜드</span>

        {/* 카테고리 태그 */}
        {/* {properties.category && (
          <span className=' bg-blue-700 text-xs text-white px-2 py-0.5 rounded-full'>{properties.category}</span>
        )} */}

        <span className='text-2xl md:text-4xl leading-tight'>{properties.title}</span>
        <span className='text-base md:text-lg text-gray-600 leading-tight'>{properties.subtitle}</span>
        <p className='text-sm md:text-base text-gray-500'>{properties.description}</p>
        {/* 마지막 수정 시간 */}
        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-xs text-gray-500'>
          <p className=''>{'작성자'}</p>
          <p className=''>{getRelativeTime(properties.lastEdited)}</p>
        </div>
        {/* 태그 */}
        {properties.tag.length > 0 && (
          <div className='w-full h-fit flex flex-row items-center justify-start gap-2'>
            {properties.tag.map((t, index) => (
              <span key={index} className='text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-lg'>
                {t.name}
              </span>
            ))}
          </div>
        )}
        {/* 자세히 보기 */}
        <button
          className='text-sm md:text-base bg-blue-700 text-white px-6 py-2 rounded-xl hover:underline mt-2'
          onClick={() => router.push(`/local/${properties.slug}`)}
        >
          자세히 보기
        </button>
      </div>
      {/* 썸네일 */}
      <div className='w-full h-auto p-4 aspect-[4/3] '>
        <img
          src={properties.thumbnail}
          alt={properties.title}
          className='w-full h-full rounded-2xl overflow-hidden object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
    </motion.div>
  )
}
