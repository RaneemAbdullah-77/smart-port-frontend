import { useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function LoginErrorPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent) => event.preventDefault()

  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--login" aria-label="تسجيل الدخول">
        <h1>تسجيل الدخول</h1>
        <form className="figma-auth__form" onSubmit={handleSubmit}>
          <label>
            <span>البريد الإلكترونى</span>
            <input className="figma-auth__input--error" type="email" placeholder="البريد الإلكترونى" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="البريد الإلكترونى" />
          </label>
          <label>
            <span>كلمة المرور</span>
            <input className="figma-auth__input--error" type="password" placeholder="كلمة المرور" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="كلمة المرور" />
          </label>
          <p className="figma-auth__error">البريد الإلكتروني أو كلمة المرور غير صحيحة</p>
          <Link className="figma-auth__forgot" to="/forgot-password">هل نسيت كلمة المرور؟</Link>
          <button className="figma-auth__primary" type="submit">الدخول</button>
        </form>
      </section>
    </main>
  )
}

export default LoginErrorPage
