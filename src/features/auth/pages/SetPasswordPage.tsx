import { FormEvent, useState } from 'react'
import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function SetPasswordPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (password && password === confirmation) navigate('/reset-password-success')
  }

  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--narrow" aria-label="تعيين كلمة المرور">
        <h1>تعيين كلمة المرور</h1>
        <form className="figma-auth__form" onSubmit={handleSubmit}>
          <label>
            <span>كلمة المرور الجديدة</span>
            <input type="password" placeholder="كلمة المرور الجديدة" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="كلمة المرور الجديدة" />
          </label>
          <label>
            <span>تأكيد كلمة المرور</span>
            <input type="password" placeholder="تأكيد كلمة المرور" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} aria-label="تأكيد كلمة المرور" />
          </label>
          {confirmation && password !== confirmation && <p className="figma-auth__error">كلمتا المرور غير متطابقتين</p>}
          <button className="figma-auth__primary" type="submit">حفظ</button>
        </form>
      </section>
    </main>
  )
}

export default SetPasswordPage