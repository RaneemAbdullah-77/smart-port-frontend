import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function ResetPasswordSuccessPage() {
  const navigate = useNavigate()
  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--narrow" aria-label="تمت إعادة تعيين كلمة المرور">
        <h1>تمت العملية بنجاح</h1>
        <p className="figma-auth__subtitle">تم تعيين كلمة المرور الجديدة بنجاح</p>
        <button className="figma-auth__primary" type="button" onClick={() => navigate('/login')}>تسجيل الدخول</button>
      </section>
    </main>
  )
}

export default ResetPasswordSuccessPage