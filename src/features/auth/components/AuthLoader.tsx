import './AuthLoader.css'

type AuthLoaderProps = {
  label?: string
  size?: 'small' | 'medium' | 'large'
  overlay?: boolean
  className?: string
  dir?: 'rtl' | 'ltr'
}

function AuthLoader({
  label = 'جاري التحميل...',
  size = 'medium',
  overlay = false,
  className = '',
  dir = 'rtl',
}: AuthLoaderProps) {
  const loaderClassName = `auth-loader ${overlay ? 'auth-loader--overlay' : ''} ${className}`.trim()

  return (
    <div
      dir={dir}
      className={loaderClassName}
      role="status"
      aria-live="polite"
    >
      <span
        className={`auth-loader__spinner auth-loader__spinner--${size}`}
        aria-hidden="true"
      />
      {label && <span className="auth-loader__label">{label}</span>}
    </div>
  )
}

export default AuthLoader