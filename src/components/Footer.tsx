'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Logo } from './Logo'
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
    <div className='w-full h-fit bg-footer px-7 py-12 flex flex-col gap-32 bg-black text-white items-center justify-between'>
      <div className='w-full flex flex-row items-center justify-between'>
        <div onClick={() => router.push('/')} className='cursor-pointer hover:opacity-70 active:scale-95 transition'>
          TTT
        </div>
      </div>
      <div className='w-full flex flex-row items-end justify-between'>
        <div className='w-fit h-fit flex flex-col gap-5'>
          <p className='text-xl leading-none'>© 2025 TTT.</p>
        </div>
      </div>
    </div>
  )
}

const SNSLinks = () => {
  const sns = [
    { icon: 'youtube', link: 'https://www.youtube.com/' },
    { icon: 'instagram', link: 'https://www.instagram.com/' },
    { icon: 'x', link: 'https://x.com/' },
  ]

  return (
    <div className='w-fit h-fit flex flex-row gap-4'>
      {sns.map((sns, index) => (
        <div
          key={index}
          className='w-fit h-fit p-2.5 rounded-full cursor-pointer bg-black text-white md:hover:opacity-70 active:scale-95 transition'
          onClick={() => window.open(sns.link)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={sns.icon === 'x' ? 'M6 18L18 6M6 6l12 12' : `M12 3v18m-6-6h12`}
            />
            {sns.icon === 'x' ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={`M12 3v18m-6-6h12`} />
            )}
          </svg>
        </div>
      ))}
    </div>
  )
}
