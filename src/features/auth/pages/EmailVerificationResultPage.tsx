import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function EmailVerificationResultPage() {
  const navigate = useNavigate()
  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--narrow" aria-label="نتيجة التحقق">
        <h1>تم التحقق من البريد الإلكترونى</h1>
        <p className="figma-auth__subtitle">يمكنك الآن المتابعة إلى تسجيل الدخول</p>
        <button className="figma-auth__primary" type="button" onClick={() => navigate('/login')}>تسجيل الدخول</button>
      </section>
    </main>
  )
}

export default EmailVerificationResultPage