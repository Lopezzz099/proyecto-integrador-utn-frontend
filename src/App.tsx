import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LandingPageResident } from '@/components/LandingPageResident'
import { LandingPageWorker } from '@/components/LandingPageWorker'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { BlogPage } from './pages/BlogPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { DashboardPage } from './pages/DashboardPage'
import { WorkerDashboardPage } from './pages/WorkerDashboardPage'

function AppContent() {
  const [currentRole, setCurrentRole] = useState<'resident' | 'worker'>(() => {
    const savedRole = localStorage.getItem('currentRole')
    return (savedRole as 'resident' | 'worker') || 'resident'
  })
  const { isAuthenticated, user, isLoading } = useAuth()

  // Guardar el rol en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('currentRole', currentRole)
  }, [currentRole])

  // Mostrar loader mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#DBA668] mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route 
        path="/" 
        element={
          currentRole === 'resident' ? (
            <LandingPageResident onRoleChange={setCurrentRole} />
          ) : (
            <LandingPageWorker onRoleChange={setCurrentRole} />
          )
        } 
      />
      <Route path="/login" element={<LoginPage initialRole={currentRole} />} />
      <Route path="/register" element={<RegisterPage initialRole={currentRole} />} />
      <Route path="/about" element={<AboutPage onRoleChange={setCurrentRole} currentRole={currentRole} />} />
      <Route path="/contact" element={<ContactPage onRoleChange={setCurrentRole} currentRole={currentRole} />} />
      <Route path="/terms" element={<TermsPage onRoleChange={setCurrentRole} currentRole={currentRole} />} />
      <Route path="/privacy" element={<PrivacyPage onRoleChange={setCurrentRole} currentRole={currentRole} />} />
      <Route path="/blog" element={<BlogPage onRoleChange={setCurrentRole} currentRole={currentRole} />} />
      <Route path="/blog/:id" element={<BlogDetailPage onRoleChange={setCurrentRole} currentRole={currentRole} />} />

      {/* Rutas protegidas */}
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated && user ? (
            user.rol_id === 3 ? <WorkerDashboardPage /> : <DashboardPage />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
