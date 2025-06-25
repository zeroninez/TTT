'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import classNames from 'classnames'
import { HEADER_HEIGHT_MOBILE, HEADER_HEIGHT_PC } from '@/constants'

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

  const contents = [
    { name: 'Local', path: 'local' },
    { name: 'Expert', path: 'expert' },
    { name: 'Things', path: 'things' },
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
        className={classNames(
          'fixed top-0 left-0 z-30 w-full h-fit bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex flex-row items-center justify-between',
        )}
      >
        <div className='flex flex-row items-center gap-2 md:gap-4'>
          <button onClick={() => handlePage('')} className='p-1 hover:opacity-70 active:scale-95 transition'>
            TTT
          </button>
          <button className='hover:opacity-70 active:scale-95 transition' onClick={() => handlePage('about')}>
            About
          </button>
        </div>
        <div className='flex flex-row items-center gap-4 md:gap-8'>
          {contents.map((item) => (
            <button
              key={item.name}
              className={classNames(
                'text-base font-medium hover:text-gray-700',
                pathname.includes(item.path) ? 'text-gray-900' : 'text-gray-500',
              )}
              onClick={() => handlePage(item.path)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* Search bar & user profile */}
        <div className='flex flex-row items-center gap-2 md:gap-4'>
          <button disabled className='text-base font-medium hover:text-gray-700 disabled:opacity-50'>
            Search
          </button>
          <button disabled className='text-base font-medium hover:text-gray-700 disabled:opacity-50'>
            Login
          </button>
        </div>
      </motion.div>
    </>
  )
}
