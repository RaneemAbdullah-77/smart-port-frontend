import type { HTMLAttributes, ReactNode } from 'react'
import './AuthAlert.css'

type AuthAlertProps = HTMLAttributes<HTMLDivElement> & {
  type?: 'success' | 'error' | 'info' | 'warning'
  children: ReactNode
  dir?: 'rtl' | 'ltr'
}

function AuthAlert({
  type = 'info',
  children,
  className = '',
  dir = 'rtl',
  ...props
}: AuthAlertProps) {
  const alertClassName = `auth-alert auth-alert--${type} ${className}`.trim()
  const icon =
    type === 'success' ? '✓' : type === 'error' ? '!' : type === 'warning' ? '⚠' : 'i'

  return (
    <div
      {...props}
      dir={dir}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className={alertClassName}
    >
      <span className="auth-alert__icon" aria-hidden="true">
        {icon}
      </span>
      <div className="auth-alert__content">{children}</div>
    </div>
  )
}

export default AuthAlert