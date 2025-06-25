import { Breadcrumbs } from '@/components'
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
      <div className='w-full h-fit px-6  md:px-12 pt-0 md:pt-12 pb-6 md:pb-8 '>
        <Breadcrumbs />
        <span className='text-6xl md:text-8xl font-bold leading-none'>About</span>
      </div>

      <div className='px-6 md:px-12 w-full h-fit py-24 flex flex-col justify-center items-center'>
        <p className='w-full h-fit text-left text-2xl md:text-6xl leading-tight font-bold'>
          We strive to find the best solutions,
          <br />
          unleash our exceptional design sensibility,
          <br />
          and further enhance the value we bring to you.
        </p>
      </div>
      <div className='w-full h-fit flex flex-col gap-12 justify-center items-center'>
        <p className='w-full h-fit px-6 md:px-12 text-left text-2xl md:text-4xl leading-tight font-medium'>
          Zeroninez is the Design Studio
          <br />
          for value-up eXperience.
        </p>
        <div className='w-full h-fit flex flex-col justify-start items-start '>
          {business.map((item, index) => (
            <div key={index} className='w-full h-fit flex flex-col'>
              {index === 0 && <hr className='w-full border-black' />}
              <div
                className={classNames(
                  'w-full h-fit px-6 md:px-12 py-8 text-lg md:text-2xl leading-tight',
                  'hover:bg-gray-100 transition duration-200 cursor-pointer active:scale-95',
                )}
              >
                {item}
              </div>
              {index === business.length - 1 ? null : <hr className='w-full border-black' />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
