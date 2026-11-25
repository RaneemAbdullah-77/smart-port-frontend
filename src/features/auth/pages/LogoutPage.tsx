import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import vesselImage from '../../../assets/logout-vessel.png'
import './FigmaAuthPages.css'

function LogoutPage() {
  const navigate = useNavigate()
  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--logout" aria-label="تسجيل الخروج">
        <h1>تسجيل الخروج</h1>
        <p className="figma-auth__question">هل أنت متأكد من رغبتك فى تسجيل الخروج من النظام؟</p>
        <div className="figma-auth__actions">
          <button className="figma-auth__primary" type="button" onClick={() => navigate('/login')}>نعم</button>
          <button className="figma-auth__primary" type="button" onClick={() => navigate(-1)}>لا</button>
        </div>
      </section>
    </main>
  )
}

export default LogoutPage
