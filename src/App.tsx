import { useState, useEffect } from 'react'
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

function AppContent() {
  const [currentRole, setCurrentRole] = useState<'resident' | 'worker'>(() => {
    const savedRole = localStorage.getItem('currentRole')
    return (savedRole as 'resident' | 'worker') || 'resident'
  })
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'register' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog'>(() => {
    const savedPage = localStorage.getItem('currentPage')
    return (savedPage as 'landing' | 'login' | 'register' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') || 'landing'
  })
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)
  const { isAuthenticated } = useAuth()

  // Guardar el rol en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('currentRole', currentRole)
  }, [currentRole])

  // Guardar la página en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage)
  }, [currentPage])

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
    return <LoginPage onNavigate={setCurrentPage} initialRole={currentRole} />
  }

  if (currentPage === 'register') {
    return <RegisterPage onNavigate={setCurrentPage} initialRole={currentRole} />
  }

  if (currentPage === 'about') {
    return <AboutPage onNavigate={setCurrentPage} onRoleChange={setCurrentRole} currentRole={currentRole} />
  }

  if (currentPage === 'contact') {
    return <ContactPage onNavigate={setCurrentPage} onRoleChange={setCurrentRole} currentRole={currentRole} />
  }

  if (currentPage === 'terms') {
    return <TermsPage onNavigate={setCurrentPage} onRoleChange={setCurrentRole} currentRole={currentRole} />
  }

  if (currentPage === 'privacy') {
    return <PrivacyPage onNavigate={setCurrentPage} onRoleChange={setCurrentRole} currentRole={currentRole} />
  }

  if (currentPage === 'blog') {
    // Si hay un blog seleccionado, mostrar el detalle
    if (selectedBlogId !== null) {
      return <BlogDetailPage blogId={selectedBlogId} onNavigate={(page) => {
        setSelectedBlogId(null)
        setCurrentPage(page)
      }} onRoleChange={setCurrentRole} currentRole={currentRole} />
    }
    
    // Si no, mostrar la lista de blogs
    return <BlogPage 
      onNavigate={setCurrentPage} 
      onRoleChange={setCurrentRole} 
      onBlogSelect={setSelectedBlogId}
      currentRole={currentRole} 
    />
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
