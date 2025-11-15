import { useState } from 'react'
import { LandingPageResident } from '@/components/LandingPageResident'
import { LandingPageWorker } from '@/components/LandingPageWorker'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function AppContent() {
  const [currentRole, setCurrentRole] = useState<'resident' | 'worker'>('resident')
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'register'>('landing')
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    // Si está autenticado, mostrar el dashboard o página principal
    return (
      <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1F1F1F] mb-4">¡Bienvenido!</h1>
          <p className="text-gray-600 mb-8">Dashboard en construcción</p>
          <button
            onClick={() => setCurrentPage('landing')}
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-6 py-3 rounded-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  if (currentPage === 'login') {
    return <LoginPage onNavigate={setCurrentPage} />
  }

  if (currentPage === 'register') {
    return <RegisterPage onNavigate={setCurrentPage} />
  }

  return (
    <>
      {currentRole === 'resident' ? (
        <LandingPageResident onRoleChange={setCurrentRole} onNavigate={setCurrentPage} />
      ) : (
        <LandingPageWorker onRoleChange={setCurrentRole} onNavigate={setCurrentPage} />
      )}
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
