import type { HTMLAttributes, ReactNode } from 'react'
import './AuthCard.css'

type AuthCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  title?: string
  description?: string
  footer?: ReactNode
  headingLevel?: 'h1' | 'h2'
}

function AuthCard({
  children,
  title,
  description,
  footer,
  headingLevel = 'h1',
  className = '',
  dir = 'rtl',
  ...props
}: AuthCardProps) {
  const HeadingTag = headingLevel
  const cardClassName = `auth-card ${className}`.trim()

  return (
    <section {...props} dir={dir} className={cardClassName}>
      {(title || description) && (
        <header className="auth-card__header">
          {title && <HeadingTag className="auth-card__title">{title}</HeadingTag>}
          {description && <p className="auth-card__description">{description}</p>}
        </header>
      )}
      <div className="auth-card__content">{children}</div>
      {footer && <footer className="auth-card__footer">{footer}</footer>}
    </section>
  )
}

export default AuthCard