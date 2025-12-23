// app/components/shared/Button.tsx
'use client'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold text-white bg-[#D4AF37] hover:bg-opacity-90 transition ${className}`}
    >
      {children}
    </button>
  )
}
