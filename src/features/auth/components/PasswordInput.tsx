import { useId, useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import './PasswordInput.css'

type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'> & {
  label?: string
  id?: string
  error?: string
  hint?: string
  showLabel?: string
  hideLabel?: string
  containerClassName?: string
}

function PasswordInput({
  label = 'كلمة المرور',
  id,
  error,
  hint,
  showLabel = 'إظهار كلمة المرور',
  hideLabel = 'إخفاء كلمة المرور',
  containerClassName = '',
  className = '',
  dir = 'rtl',
  disabled,
  ...props
}: PasswordInputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`
  const [visible, setVisible] = useState(false)

  const fieldClassName = `auth-field ${containerClassName}`.trim()
  const wrapperClassName = `password-input ${error ? 'password-input--error' : ''}`.trim()
  const inputClassName = `auth-input password-input__control ${className}`.trim()
  const messageClassName = `auth-field__message ${error ? 'auth-field__message--error' : ''}`.trim()

  return (
    <div className={fieldClassName}>
      {label && (
        <label className="auth-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={wrapperClassName}>
        <input
          {...props}
          id={inputId}
          type={visible ? 'text' : 'password'}
          dir={dir}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error || hint ? messageId : undefined}
          className={inputClassName}
        />
        <button
          type="button"
          className="password-input__toggle"
          onClick={() => setVisible(value => !value)}
          disabled={disabled}
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
        >
          {visible ? 'إخفاء' : 'إظهار'}
        </button>
      </div>
      {(error || hint) && (
        <p id={messageId} className={messageClassName}>
          {error || hint}
        </p>
      )}
    </div>
  )
}

export default PasswordInput