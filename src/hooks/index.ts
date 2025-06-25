'use client'

import { useState, useEffect } from 'react'

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i

    setIsMobile(mobileRegex.test(userAgent))
  }, [])

  return isMobile
}

// ✅ 날짜를 YYYY.MM.DD HH:MM 형식으로 변환하는 함수
export const formatDate = (isoString: string | null) => {
  if (!isoString) return 'N/A'
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // 24시간 형식
  })
    .format(date)
    .replace(/\./g, '')
    .replace(/ /g, '.')
    .replace(/\.$/, '')
}
