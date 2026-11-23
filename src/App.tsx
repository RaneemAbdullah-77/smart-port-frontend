import AuthLayout from './features/auth/layouts/AuthLayout'

function App() {
  return (
    <AuthLayout
      title="مرحباً بعودتك"
      description="سجّل الدخول إلى حسابك للمتابعة"
      pageLabel="SMART PORT"
    >
      <p>مكونات المصادقة جاهزة للربط.</p>
    </AuthLayout>
  )
}

export default App