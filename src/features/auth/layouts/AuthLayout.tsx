import type { ReactNode } from 'react'
import heroImage from '../../../assets/hero.png'
import AuthCard from '../components/AuthCard'
import './AuthLayout.css'

type AuthLayoutProps = {
  children: ReactNode
  title?: string
  description?: string
  footer?: ReactNode
  pageLabel?: string
  headingLevel?: 'h1' | 'h2'
  className?: string
  cardClassName?: string
}

function AuthLayout({
  children,
  title,
  description,
  footer,
  pageLabel,
  headingLevel = 'h1',
  className = '',
  cardClassName = '',
}: AuthLayoutProps) {
  return (
    <main className={`auth-layout ${className}`.trim()} dir="rtl" lang="ar">
      {pageLabel && <p className="auth-layout__page-label">{pageLabel}</p>}
      <div
        className="auth-layout__scene"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="auth-layout__shade" aria-hidden="true" />
        <div className="auth-layout__panel">
          <AuthCard
            title={title}
            description={description}
            footer={footer}
            headingLevel={headingLevel}
            className={cardClassName}
          >
            {children}
          </AuthCard>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout