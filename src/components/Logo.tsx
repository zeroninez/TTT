import classNames from 'classnames'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  return (
    <div
      className={classNames(
        ' h-full w-auto aspect-square rounded-full ',
        className ? className : 'bg-black',
        size === 'sm' ? 'min-h-4' : size === 'md' ? 'min-h-6' : size === 'lg' ? 'min-h-8' : 'min-h-6',
      )}
    ></div>
  )
}
