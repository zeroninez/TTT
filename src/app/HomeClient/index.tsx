'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HomeClient(props) {
  const [isHovered, setIsHovered] = useState(false)

  //fix "window is not defined" error
  if (typeof window === 'undefined') {
    return null
  }

  // 각 글자별 애니메이션 variants
  const letterVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
      y: i % 3 === 0 ? -50 : 50,
      rotate: i % 2 === 0 ? -45 : 45,
      scale: 0.5,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    }),
    bounce: {
      y: [-5, 0, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.3,
      },
    },
  }

  // 글로우 효과 variants
  const glowVariants = {
    initial: {
      filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))',
    },
    animate: {
      filter: [
        'drop-shadow(0 0 5px rgba(255,255,255,0.3))',
        'drop-shadow(0 0 20px rgba(255,255,255,0.6))',
        'drop-shadow(0 0 5px rgba(255,255,255,0.3))',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  // SVG path 데이터 배열 (각 글자별로)
  const paths = [
    // T
    'M190.48 28.84H109.56V203H81.56V28.84H0.919998V5.32001H190.48V28.84Z',
    // A
    'M396.223 203H363.743L339.663 154.28H218.143L194.063 203H162.423L264.903 5.32001H294.863L396.223 203ZM327.623 131.6L279.183 33.6L229.903 131.6H327.623Z',
    // B
    'M630.585 147.84C630.585 153.16 630.305 164.92 622.185 177.24C605.385 202.72 573.185 203 546.585 203H419.745V5.32001H546.585C551.625 5.32001 556.385 5.32001 561.425 5.6C579.345 6.72 598.105 10.92 610.145 25.2C617.705 34.44 620.785 45.08 620.785 56.56C620.785 78.68 608.745 89.32 601.185 93.52C598.945 94.92 593.065 97.16 593.065 97.16C598.105 98.84 607.345 101.64 616.585 111.16C622.185 116.76 630.585 127.96 630.585 147.84ZM591.665 58.52C591.665 53.48 590.545 41.72 578.505 34.16C568.705 28 557.225 28 546.305 28H448.025V88.76H551.345C564.225 88.76 577.945 88.48 586.345 76.44C588.305 73.64 591.665 67.48 591.665 58.52ZM601.185 145.32C601.185 141.96 601.185 133.84 595.585 126C586.065 112.28 570.105 111.44 554.985 111.44H448.025V180.04H554.985C569.545 180.04 584.665 178.64 594.745 166.04C597.265 162.68 601.465 155.96 601.185 145.32Z',
    // O
    'M1080.56 106.96C1080.56 118.44 1078.88 149.24 1054.8 174.16C1041.08 188.44 1010.84 208.32 961.283 208.32C956.243 208.32 944.763 208.04 931.043 205.8C917.603 203.84 877.563 196.56 854.603 159.6C841.163 137.76 840.323 115.36 840.323 106.4C840.323 83.72 846.203 61.04 860.203 43.4C863.003 39.76 866.643 35.56 874.483 29.12C887.923 17.92 915.083 0.559998 959.603 0.559998C968.563 0.559998 995.443 1.4 1020.92 13.16C1037.16 20.72 1052.84 33.04 1063.2 47.88C1079.44 71.4 1080.56 97.44 1080.56 106.96ZM1052.28 104.16C1052.28 87.36 1047.8 75.6 1045 69.72C1023.72 24.08 967.443 24.36 956.243 24.64C947.843 24.92 912.283 26.88 889.323 49.84C885.403 53.76 877.563 62.44 872.803 76.44C869.723 85.4 868.323 95.76 868.323 105.28C868.323 112.56 869.163 133.84 882.603 152.04C885.403 155.68 889.603 160.72 898.283 166.88C909.763 175 929.083 183.96 961.843 183.96C967.163 183.96 980.323 183.96 995.163 180.04C1022.88 172.76 1043.04 154.28 1049.76 126.28C1050.6 122.36 1052.28 114.24 1052.28 104.16Z',
    // T
    'M840.441 28.84H759.521V203H731.521V28.84H650.881V5.32001H840.441V28.84Z',
    // A
    'M1475.75 203H1443.27L1419.19 154.28H1297.67L1273.59 203H1241.95L1344.43 5.32001H1374.39L1475.75 203ZM1407.15 131.6L1358.71 33.6L1309.43 131.6H1407.15Z',
    // T
    'M1270.01 28.84H1189.09V203H1161.09V28.84H1080.45V5.32001H1270.01V28.84Z',
    // P
    'M1698.92 65.8C1698.92 73.64 1697.52 95.76 1678.2 110.32C1661.12 123.48 1642.64 123.76 1622.2 123.76H1527.28V203H1498.72V5.32001H1619.68C1624.72 5.32001 1629.76 5.6 1634.8 5.88C1643.48 6.72 1672.04 7.84001 1688.84 31.92C1695.56 41.72 1698.92 53.76 1698.92 65.8ZM1668.4 64.12C1668.4 60.48 1668.12 51.24 1661.4 42.84C1650.2 28.84 1631.16 28.84 1615.2 28.84H1527V100.24H1618.28C1633.68 100.24 1650.48 99.68 1661.12 86.52C1664.2 82.88 1668.4 75.88 1668.4 64.12Z',
  ]

  return (
    <>
      <div className='w-full h-fit min-h-dvh px-6 md:px-12 bg-black text-white flex justify-center items-center'>
        {/* Background particles effect */}
        <div className='absolute inset-0 overflow-hidden'>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-white rounded-full opacity-20'
              initial={{
                x: Math.random() * window?.innerWidth || 1200,
                y: Math.random() * window?.innerHeight || 800,
                scale: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Logo svg motion */}
        <motion.div
          className='relative z-10 cursor-pointer'
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
        >
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1699 209'
            fill='currentColor'
            className='w-full max-w-4xl h-auto'
            variants={glowVariants}
            initial='initial'
            animate='animate'
          >
            {paths.map((pathData, index) => (
              <motion.path
                key={index}
                d={pathData}
                custom={index}
                variants={letterVariants}
                initial='hidden'
                animate={['visible', 'bounce']}
                whileHover='hover'
                style={{
                  transformOrigin: 'center',
                }}
              />
            ))}
          </motion.svg>

          {/* Hover effect overlay */}
          {isHovered && (
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>

        {/* Click instruction */}
        <motion.div
          className='absolute bottom-10 text-gray-400 text-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Hover to see magic ✨
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}
