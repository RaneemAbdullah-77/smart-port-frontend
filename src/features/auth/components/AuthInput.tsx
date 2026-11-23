import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import './AuthInput.css'

type AuthInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  label?: string
  id?: string
  error?: string
  hint?: string
  containerClassName?: string
}

function AuthInput({
  label,
  id,
  error,
  hint,
  containerClassName = '',
  className = '',
  dir = 'rtl',
  ...props
}: AuthInputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`

  const fieldClassName = `auth-field ${containerClassName}`.trim()
  const inputClassName = `auth-input ${error ? 'auth-input--error' : ''} ${className}`.trim()
  const messageClassName = `auth-field__message ${error ? 'auth-field__message--error' : ''}`.trim()

  return (
    <div className={fieldClassName}>
      {label && (
        <label className="auth-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        {...props}
        id={inputId}
        dir={dir}
        aria-invalid={Boolean(error)}
        aria-describedby={error || hint ? messageId : undefined}
        className={inputClassName}
      />
      {(error || hint) && (
        <p id={messageId} className={messageClassName}>
          {error || hint}
        </p>
      )}
    </div>
  )
}

export default AuthInput