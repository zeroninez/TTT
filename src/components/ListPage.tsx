'use client'

import { Card, RecommendedCard } from '@/components'
import React from 'react'

interface ListPageProps {
  type: string
  title: string
  description: string
  parsedItems: { id: string; properties: any }[]
}

export const ListPage = ({ type, title, description, parsedItems }: ListPageProps) => {
  const recommendedItems = parsedItems.filter((item) => item.properties.recommended)

  return (
    <>
      {/* header */}
      <div className='w-full h-fit gap-12 md:h-[340px] px-6 md:px-12 flex flex-col justify-between py-6 md:py-12 border-b border-gray-200 '>
        <p className=' text-base md:text-lg mt-2 self-start md:self-end'>{description}</p>
        <span className='text-6xl md:text-8xl font-akzidenzGrotesk self-start leading-none'>{title}</span>
      </div>
      {/* recommended */}
      {recommendedItems.length > 0 && (
        <div className='flex flex-col gap-[1px] w-full px-6 md:px-12 h-fit py-12'>
          {recommendedItems.map(({ id, properties }) => {
            return (
              <RecommendedCard
                page={type}
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
      )}
      {/* all */}
      <div className='w-full h-fit px-6 md:px-12 flex flex-col items-start justify-start pt-6 md:pt-12 pb-6 md:pb-8'>
        <span className='text-sm md:text-lg mb-4'>ALL</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] w-full h-fit p-[1px]'>
          {parsedItems.map(({ id, properties }) => {
            return (
              <Card
                page={type}
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
    </>
  )
}
