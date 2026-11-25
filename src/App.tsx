import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CheckEmailPage from './features/auth/pages/CheckEmailPage'
import EmailVerificationResultPage from './features/auth/pages/EmailVerificationResultPage'
import ForgotPasswordPage from './features/auth/pages/ForgotPasswordPage'
import LoginPage from './features/auth/pages/LoginPage'
import LoginErrorPage from './features/auth/pages/LoginErrorPage'
import LogoutPage from './features/auth/pages/LogoutPage'
import ResetPasswordSuccessPage from './features/auth/pages/ResetPasswordSuccessPage'
import SetPasswordPage from './features/auth/pages/SetPasswordPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-error" element={<LoginErrorPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/set-password" element={<SetPasswordPage />} />
        <Route path="/check-email" element={<CheckEmailPage />} />
        <Route path="/verify-email" element={<EmailVerificationResultPage />} />
        <Route path="/reset-password-success" element={<ResetPasswordSuccessPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App