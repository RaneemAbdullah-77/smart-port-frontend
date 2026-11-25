import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function CheckEmailPage() {
  const navigate = useNavigate()
  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--narrow" aria-label="افحص بريدك الإلكترونى">
        <h1>افحص بريدك الإلكترونى</h1>
        <p className="figma-auth__subtitle">تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني</p>
        <button className="figma-auth__primary" type="button" onClick={() => navigate('/login')}>العودة لتسجيل الدخول</button>
      </section>
    </main>
  )
}

export default CheckEmailPage