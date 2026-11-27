import { FormEvent, useState } from 'react'
import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import vesselImage from '../../../assets/forgot-password-vessel.png'
import './FigmaAuthPages.css'

function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    navigate('/set-password')
  }

  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--narrow" aria-label="استعادة كلمة المرور">
        <h1>استعادة كلمة المرور</h1>
        <p className="figma-auth__subtitle">اكتب بريدك الإلكترونى<br /> لإرسال طلب باستعادة كلمة المرور</p>
        <form className="figma-auth__form" onSubmit={handleSubmit}>
          <label>
            <span>البريد الإلكترونى</span>
            <input type="email" placeholder="البريد الإلكترونى" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="البريد الإلكترونى" autoComplete="email" required />
          </label>
          <div className="figma-auth__actions">
            <button className="figma-auth__primary" type="submit">ارسال</button>
            <button className="figma-auth__primary" type="button" onClick={() => navigate('/login')}>رجوع</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default ForgotPasswordPage