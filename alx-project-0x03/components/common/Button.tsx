interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {
  const backgroundColorClass = buttonBackgroundColor ? {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  }[buttonBackgroundColor] : 'bg-slate-500'

  return (
    <button 
      onClick={action} 
      className={`${backgroundColorClass} ${buttonSize} px-6 py-2 text-sm font-semibold rounded-lg hover:opacity-80 transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  )
}

export default Button
