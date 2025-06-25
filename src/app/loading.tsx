'use client'

import { motion } from 'framer-motion'
import { Loading as Spinner } from '@/components'

export default function Loading() {
  return (
    <>
      <div className='w-screen h-dvh flex flex-col items-center overflow-hidden relative '>
        <Spinner />
      </div>
    </>
  )
}
