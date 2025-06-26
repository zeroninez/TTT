'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'
import { HEADER_HEIGHT_MOBILE, HEADER_HEIGHT_PC } from '@/constants'
import { Logo } from './Logo'
import { useIsMobile } from '@/hooks'

/**
 * Header
 * - Header는 페이지 상단에 위치하는 GNB(Global Navigation Bar)입니다.
 * @returns {JSX.Element} JSX.Element
 * @example
 * return (
 *  <Header />
 * )
 **/

export const Header = () => {
  const router = useRouter()
  const [page, setPage] = useState('')
  const pathname = usePathname()

  const isMobile = useIsMobile()

  const contents = [
    { name: 'LOCAL', path: 'local' },
    { name: 'EXPERT', path: 'expert' },
    { name: 'THINGS', path: 'things' },
  ]

  const handlePage = (page: string) => {
    setPage(page)
    router.push('/' + page)
  }

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        style={{
          height: isMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_PC,
        }}
        className={classNames(
          'fixed top-0 left-0 z-30 w-full bg-white border-b border-gray-200 px-6 md:px-12 py-3 flex flex-row items-center justify-between',
        )}
      >
        <div className='flex flex-row items-center gap-2 md:gap-4'>
          <button
            onClick={() => handlePage('')}
            className='font-bold text-xl font-caveat hover:opacity-70 active:scale-95 transition'
          >
            <Logo className='h-5' />
          </button>
          <div className='w-[1.5px] h-4 ml-1 bg-black' />
          <button
            className={classNames(
              'text-black border-b',
              pathname.includes('about') ? ' border-black' : 'border-transparent',
            )}
            onClick={() => handlePage('about')}
          >
            ABOUT
          </button>
        </div>
        <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center gap-4 md:gap-8'>
          {contents.map((item) => (
            <button
              key={item.name}
              className={classNames(
                'text-black border-b',
                pathname.includes(item.path) ? ' border-black' : 'border-transparent',
              )}
              onClick={() => handlePage(item.path)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* Search bar & user profile */}
        <div className='flex flex-row items-center gap-2 md:gap-4'>
          <button
            disabled
            className={classNames(
              'text-black relative flex flex-row gap-1.5 justify-center items-center border-b border-transparent',
            )}
          >
            SHOP
            <div className='absolute top-0 -right-3 w-2 h-2 bg-black rounded-full' />
          </button>
        </div>
      </motion.div>
    </>
  )
}
