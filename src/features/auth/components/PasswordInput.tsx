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
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setVisible(value => !value)}
          disabled={disabled}
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {visible ? (
              <>
                <path d="M3 3l18 18" />
                <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5.5 0 9 7 9 7a15.7 15.7 0 0 1-3.1 3.8" />
                <path d="M6.2 6.2C3.9 7.7 2 12 2 12s3.5 7 10 7a10.5 10.5 0 0 0 4-.8" />
              </>
            ) : (
              <>
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </>
            )}
          </svg>
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