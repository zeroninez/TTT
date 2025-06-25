// src/utils/timeUtils.ts

export function getRelativeTime(dateString: string): string {
  const now = new Date()
  const targetDate = new Date(dateString)

  // 날짜가 유효하지 않은 경우 처리
  if (isNaN(targetDate.getTime())) {
    console.log('Invalid date:', dateString)
    return dateString // 원본 문자열 반환
  }

  const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000)

  // 1분 미만
  if (diffInSeconds < 60) {
    return '방금 전'
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  // 1시간 미만
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  // 1일 미만
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  // 7일 미만
  if (diffInDays < 7) {
    return `${diffInDays}일 전`
  }

  // 7일 이상이면 날짜 형식으로 표시 (YY.MM.DD)
  const year = targetDate.getFullYear().toString().slice(-2)
  const month = (targetDate.getMonth() + 1).toString().padStart(2, '0')
  const day = targetDate.getDate().toString().padStart(2, '0')

  return `${year}.${month}.${day}`
}
