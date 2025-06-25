'use client'

/**
 * Layout
 * - Layout은 페이지의 전체적인 레이아웃을 담당하는 컴포넌트입니다.
 * - children으로 받은 컴포넌트를 렌더링합니다.
 * @param children : React.ReactNode
 * @returns {JSX.Element} JSX.Element
 * @example
 * return (
 *    <Layout>
 *      <Header />
 *      <Component />
 *      <Footer />
 *    </Layout>
 * )
 **/

import classNames from 'classnames'
import { ParallaxWrapper } from './ParallaxWrapper'
import { Header } from './Header'
import { Footer } from './Footer'
import { HEADER_HEIGHT_MOBILE, HEADER_HEIGHT_PC } from '@/constants'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks'

export const Layout = ({ children }) => {
  const isMobile = useIsMobile()
  return (
    <ParallaxWrapper>
      <div className='w-full min-h-dvh h-fit flex flex-col justify-between items-center'>
        <Header />
        <motion.div
          initial={{ y: -100 }}
          animate={{
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className={classNames('w-full h-fit flex flex-col justify-start items-center')}
          style={{
            paddingTop: isMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT_PC,
          }}
        >
          {children}
        </motion.div>
        <Footer />
      </div>
    </ParallaxWrapper>
  )
}
