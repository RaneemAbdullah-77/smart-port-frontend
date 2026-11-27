import { FormEvent, useState } from 'react'
import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import vesselImage from '../../../assets/login-error-vessel.png'
import './FigmaAuthPages.css'

function SetPasswordPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (password && password === confirmation) navigate('/login')
  }

  return (
    <main className="figma-auth" dir="rtl" style={{ '--auth-hero': `url(${vesselImage})` } as CSSProperties}>
      <section className="figma-auth__card figma-auth__card--narrow" aria-label="تعيين كلمة المرور">
        <h1>تعيين كلمة المرور</h1>
        <form className="figma-auth__form" onSubmit={handleSubmit}>
          <label>
            <span>كلمة المرور الجديدة</span>
            <PasswordInput label="" placeholder="كلمة المرور الجديدة" value={password} onChange={(event) => setPassword(event.target.value)} aria-label="كلمة المرور الجديدة" autoComplete="new-password" required />
          </label>
          <label>
            <span>تأكيد كلمة المرور</span>
            <PasswordInput label="" placeholder="تأكيد كلمة المرور" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} aria-label="تأكيد كلمة المرور" autoComplete="new-password" required />
          </label>
          {confirmation && password !== confirmation && <p className="figma-auth__error">كلمتا المرور غير متطابقتين</p>}
          <button className="figma-auth__primary" type="submit">حفظ</button>
        </form>
      </section>
    </main>
  )
}

export default SetPasswordPage