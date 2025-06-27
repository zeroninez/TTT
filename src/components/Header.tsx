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

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isMobile = useIsMobile()

  const contents = [
    { name: 'LOCAL', path: 'local' },
    { name: 'EXPERT', path: 'expert' },
    { name: 'THINGS', path: 'things' },
  ]

  const handlePage = (page: string) => {
    setPage(page)
    router.push('/' + page)
    setIsMenuOpen(false) // Close the menu when navigating
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
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
          <div className='w-[1.5px] h-4 ml-1 bg-black hidden lg:block' />
          <button
            className={classNames(
              'text-black border-b hidden lg:block',
              pathname.includes('about') ? ' border-black' : 'border-transparent',
            )}
            onClick={() => handlePage('about')}
          >
            ABOUT
          </button>
        </div>
        <div className=' hidden sm:flex w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-row items-center gap-4 md:gap-8'>
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
        <div className='hidden sm:flex flex-row items-center gap-2 md:gap-4'>
          <button
            disabled
            className={classNames(
              'text-black relative flex flex-row gap-1.5 justify-center decoration-black line-through items-center border-b border-transparent',
            )}
          >
            SHOP
            <div className='absolute top-0 -right-3 w-2 h-2 bg-black rounded-full' />
          </button>
        </div>
        {/* Mobile menu button */}
        <button
          className='sm:hidden text-black hover:opacity-70 active:scale-95 transition flex items-center justify-center w-8 h-8'
          onClick={() => toggleMenu()}
        >
          {/* hamburger icon */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
            style={{
              paddingTop: isMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_PC,
            }}
            className='fixed top-0 left-0 z-20 w-full h-full bg-white flex flex-col items-center justify-center gap-6 px-6'
          >
            {/* Mobile menu content */}
            <div className='w-full h-full text-xl flex flex-col items-start justify-start gap-8 py-6'>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
