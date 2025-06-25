'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from 'react'

export const ParallaxWrapper = ({ children }) => {
  const lenis = useRef(null)

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({})

    const animate = (time) => {
      lenis.current.raf(time)

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    // Cleanup on unmount
    return () => {
      lenis.current.destroy()
    }
  }, [])

  return <>{children}</>
}
