'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { motion } from 'framer-motion'
/**
 * Footer
 * - Footer는 페이지 하단에 위치하는 Footer입니다.
 * @returns {JSX.Element} JSX.Element
 * @example
 * return (
 *  <Footer />
 * )
 **/

export const Footer = () => {
  const router = useRouter()

  return (
    <div className='w-full min-h-[400px] h-fit px-6 md:px-12 py-6 md:py-8 flex flex-row gap-32 border-t border-gray-200 bg-white text-black'>
      <div className='w-full flex flex-col justify-between items-start gap-8 md:gap-12'>
        <div className='w-full h-fit flex flex-col items-start justify-center gap-6 md:gap-8'>
          <Logo className='w-full h-auto' />
          <div className='w-fit h-fit text-xs md:text-sm flex flex-row items-center justify-center gap-4'>
            한 달에 한 개의 브랜드만을 다루는 프리미엄 매거진 커머스. <br />
            디자이너의 섬세한 관점으로 발견한 브랜드 스토리를 전합니다.
          </div>
        </div>
        <p className='w-full h-fit text-xs md:text-sm leading-none'>
          © {new Date().getFullYear()} TABTOTAB. All rights reserved.
        </p>
      </div>
      {/* sitemap */}
      <div className='w-full flex flex-row justify-between items-start gap-8 md:gap-12'>
        <div className='w-full h-fit uppercase text-sm md:text-base flex flex-row items-start justify-start gap-8'>
          <div className='flex w-full flex-col items-start justify-start gap-2'>
            <span className='font-medium'>TABTOTAB</span>
            <span
              className='cursor-pointer hover:opacity-70 active:scale-95 transition'
              onClick={() => router.push('/about')}
            >
              About
            </span>
          </div>
          <div className='flex w-full flex-col items-start justify-start gap-2'>
            <span className='font-medium'>STORY</span>
            <span
              className='cursor-pointer hover:opacity-70 active:scale-95 transition'
              onClick={() => router.push('/local')}
            >
              Local
            </span>
            <span
              className='cursor-pointer hover:opacity-70 active:scale-95 transition'
              onClick={() => router.push('/expert')}
            >
              Expert
            </span>
            <span
              className='cursor-pointer hover:opacity-70 active:scale-95 transition'
              onClick={() => router.push('/things')}
            >
              Things
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
