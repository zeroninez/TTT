import classNames from 'classnames'
import { motion } from 'framer-motion'

interface LoadingProps {
  text?: boolean
}

export const Loading = ({}: LoadingProps) => {
  // size나 text가 추후 확장 시 활용될 수 있으므로 남겨두었습니다.
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed z-50 w-full h-full flex flex-col items-center justify-center bg-white'
    >
      <div className='text-sm mt-2 md:text-md font-light opacity-70'>We move thoughts with code.</div>
    </motion.div>
  )
}
