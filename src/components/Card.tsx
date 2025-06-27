'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Item } from '@/types'
import classNames from 'classnames'
import { getRelativeTime } from '@/utils'

export const Card = ({
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
      whileHover={{ opacity: 0.8 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      onClick={() => router.push(`/${page}/${properties.slug}`)}
      key={id}
      className={classNames(
        'w-full h-fit relative',
        'flex flex-col gap-4 justify-center items-center transition-all duration-300 ease-in-out',
        'bg-white',
        'overflow-hidden',
        'cursor-pointer',
      )}
    >
      {/* 카테고리 태그 */}
      {properties.category && (
        <span className='absolute top-3 left-3 bg-black text-xs text-white uppercase px-3 py-1 rounded-lg'>
          {properties.category}
        </span>
      )}

      {/* 썸네일 */}
      <div className='w-full h-auto overflow-hidden aspect-[640/360] bg-black text-white'>
        <img
          src={properties.thumbnail}
          alt={properties.title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
      {/* 카드 내용 */}
      <div className='w-full h-fit flex flex-col gap-3 items-start justify-start bg-white pb-4'>
        <span className='text-xl md:text-2xl leading-tight'>{properties.title}</span>
        <span className='text-sm md:text-base text-gray-600 leading-tight'>{properties.subtitle}</span>
        <p className='text-xs md:text-sm text-gray-500'>{properties.description}</p>
        {/* 마지막 수정 시간 */}
        <div className='w-full h-fit flex flex-row items-center justify-start gap-2 text-xs text-gray-500'>
          {/* <p className=''>{'작성자'}</p> */}
          <p className=''>{getRelativeTime(properties.lastEdited)}</p>
        </div>
        {/* 태그 */}
        {properties.tag.length > 0 && (
          <div className='w-full h-fit flex flex-row items-center justify-start gap-2'>
            {properties.tag.map((t, index) => (
              <span key={index} className='text-xs bg-black text-white px-2 py-0.5'>
                {t.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
