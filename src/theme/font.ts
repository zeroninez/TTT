// fonts.js
import localFont from 'next/font/local'

// Pretendard Variable Font
// Pretendard (한글용; 필요한 스타일별로 여러 파일 지정 가능)
export const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/PretendardVariable.woff2',
      weight: '45 920',
    },
  ],
  variable: '--font-pretendard',
  display: 'swap',
})

// Akzidenz-Grotesk Extended BQ Regular.otf
export const akzidenzGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/Akzidenz-Grotesk.woff2',
      weight: '400',
    },
  ],
  variable: '--font-akzidenz-grotesk',
  display: 'swap',
})
