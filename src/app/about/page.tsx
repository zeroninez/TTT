import { Breadcrumbs, Logo } from '@/components'
import classNames from 'classnames'

export default function About() {
  const business = [
    'Service Model Consulting',
    'UX Planning & Interface Design',
    'BX Planning & Identity Design',
    'Product Prototype',
  ]

  return (
    <>
      <div className='w-full h-fit flex flex-col justify-center items-start px-6 md:px-12 gap-2 md:gap-4 py-6 md:py-8'>
        <Breadcrumbs />
        <span className='text-4xl md:text-6xl leading-none'>ABOUT</span>
      </div>

      <div className='w-full min-h-dvh h-fit flex flex-col gap-12 justify-center items-center'>
        <Logo className='w-32 md:w-48 h-auto' />
        <div className='w-full max-w-2xl h-fit text-sm md:text-base text-center leading-relaxed'>
          한 달에 한 개의 브랜드만을 다루는 프리미엄 매거진 커머스. <br />
          디자이너의 섬세한 관점으로 발견한 브랜드 스토리를 전합니다.
        </div>
      </div>
    </>
  )
}
