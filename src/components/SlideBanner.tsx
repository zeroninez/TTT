'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    content: (
      <div className='w-full h-full relative]'>
        <Image src='/img/slides/main1_01.png' layout='fill' objectFit='cover' alt='main1_01' />
        <div className='absolute bottom-0 left-0 p-4 lg:p-24 text-6xl text-white font-black'>
          비즈니스의 성장, <br />
          트리즈와 함께 기업과 로컬을 연결하는 혁신 파트너
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className='w-full h-full relative bg-[#d4d4d4]'>
        <div className='absolute bottom-0 left-0 p-4 lg:p-24 text-6xl text-black font-black'>트리즈 컴퍼니 2</div>
      </div>
    ),
  },
]

export const SlideBanner = () => {
  return (
    <div className='relative h-full overflow-hidden'>
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: '.pagination_progress', //페이징 태그 클래스 설정
          type: 'progressbar',
        }}
        loop={true}
        className='w-full h-full'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              className='flex items-center justify-center w-full h-full'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className='w-full h-full relative]'>
                <Image src='/img/slides/main1_01.png' layout='fill' objectFit='cover' alt='main1_01' />
                <div className='absolute bottom-0 left-0 p-4 lg:p-24 text-6xl text-white font-black'>
                  비즈니스의 성장, <br />
                  트리즈와 함께 기업과 로컬을 연결하는 혁신 파트너
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
