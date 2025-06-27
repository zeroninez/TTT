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

  const Line = () => (
    <motion.div transition={{ duration: 0.5, ease: 'easeInOut' }} className='w-px bg-gray-200 hidden md:block' />
  )

  return (
    <div className='w-full h-fit px-6 md:px-12 py-6 md:py-8 gap-24 md:gap-20 flex flex-col justify-between border-t border-gray-200 bg-white text-black'>
      <div className='w-full flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-8'>
        <div className='w-full flex flex-col justify-between items-start gap-6 md:gap-8'>
          <Logo
            onClick={() => router.push('/')}
            className='w-full md:w-[90%] h-auto hover:opacity-70 active:opacity-60 transition-all '
          />
          <div className='w-fit h-fit text-sm md:text-sm flex flex-row items-center justify-center gap-4'>
            한 달에 한 개의 브랜드만을 다루는 프리미엄 매거진 커머스. <br />
            디자이너의 섬세한 관점으로 발견한 브랜드 스토리를 전합니다.
          </div>
        </div>
        <Line />
        {/* sitemap */}
        <div className='w-full uppercase text-sm md:text-base flex flex-row gap-6 md:gap-8'>
          <div className='flex w-full flex-col items-start justify-start gap-2'>
            <span className='font-semibold'>TABTOTAB</span>
            <span
              className='cursor-pointer hover:opacity-70 active:scale-95 transition'
              onClick={() => router.push('/about')}
            >
              About
            </span>
          </div>
          <Line />
          <div className='flex w-full  flex-col items-start justify-start gap-2'>
            <span className='font-semibold'>STORY</span>
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
      <p className='w-full h-fit flex  text-xs md:text-sm leading-none'>
        © {new Date().getFullYear()} TABTOTAB. All rights reserved.
      </p>
    </div>
  )
}
