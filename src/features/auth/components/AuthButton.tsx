import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './AuthButton.css'

type AuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  fullWidth?: boolean
  loading?: boolean
  dir?: 'rtl' | 'ltr'
}

function AuthButton({
  children,
  variant = 'primary',
  fullWidth = false,
  loading = false,
  disabled,
  className = '',
  type = 'button',
  dir = 'rtl',
  ...props
}: AuthButtonProps) {
  const buttonClassName = [
    'auth-button',
    `auth-button--${variant}`,
    fullWidth ? 'auth-button--full' : '',
    loading ? 'auth-button--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...props}
      type={type}
      dir={dir}
      disabled={disabled || loading}
      aria-busy={loading}
      className={buttonClassName}
    >
      {loading && <span className="auth-button__spinner" aria-hidden="true" />}
      <span className="auth-button__label">{children}</span>
    </button>
  )
}

export default AuthButton