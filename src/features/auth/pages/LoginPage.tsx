import { FormEvent, useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    navigate(email && password ? '/dashboard' : '/login-error')
  }

  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--login" aria-label="تسجيل الدخول">
        <h1>تسجيل الدخول</h1>
        <form className="figma-auth__form" onSubmit={handleSubmit}>
          <label>
            <span>البريد الإلكترونى</span>
            <input type="email" placeholder="البريد الإلكترونى" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="البريد الإلكترونى" />
          </label>
          <label>
            <span>كلمة المرور</span>
            <PasswordInput label="" placeholder="كلمة المرور" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="كلمة المرور" />
          </label>
          <Link className="figma-auth__forgot" to="/forgot-password">هل نسيت كلمة المرور؟</Link>
          <button className="figma-auth__primary" type="submit">الدخول</button>
        </form>
      </section>
    </main>
  )
}

export default LoginPage