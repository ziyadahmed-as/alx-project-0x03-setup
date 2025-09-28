// components/common/Button.tsx
import { ButtonProps } from '@/interface'

const Button = ({ label, size = 'md', color = 'gray', onClick }: ButtonProps) => {
  // Tailwind color mapping
  const colorClasses: Record<NonNullable<ButtonProps['color']>, string> = {
    red: 'bg-red-500 hover:bg-red-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    green: 'bg-green-500 hover:bg-green-600',
    gray: 'bg-slate-500 hover:bg-slate-600',
  }

  // Tailwind size mapping
  const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${colorClasses[color]} 
        ${sizeClasses[size]} 
        text-white font-semibold rounded-lg 
        transition duration-300
      `}
    >
      {label}
    </button>
  )
}

export default Button
