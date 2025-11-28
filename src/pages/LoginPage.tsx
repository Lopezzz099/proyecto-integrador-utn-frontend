import { useState, useEffect } from 'react'
import { useAuth, type UserRole } from '@/context/AuthContext'
import { AuthContainer } from '@/components/auth/AuthContainer'
import { RoleSelector } from '@/components/auth/RoleSelector'
import { LoginForm } from '@/components/auth/LoginForm'
import { AuthLinks } from '@/components/auth/AuthLinks'

interface LoginPageProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact') => void
  initialRole?: 'resident' | 'worker'
}

export function LoginPage({ onNavigate, initialRole }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole === 'worker' ? 'provider' : 'client')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setIsLoading(true)
    
    // Validación básica
    if (!email || !password) {
      setErrors({
        email: email ? '' : 'Email es requerido',
        password: password ? '' : 'Contraseña es requerida',
      })
      setIsLoading(false)
      return
    }

    try {
      await login(email, password)
      // Si el login fue exitoso, el context maneja la navegación
    } catch (error: any) {
      setErrors({
        general: error.message || 'Credenciales inválidas. Intenta de nuevo.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContainer title="OferTu" subtitle="Inicia sesión en tu cuenta">
      <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />
      
      <LoginForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
        isLoading={isLoading}
        errors={errors}
      />

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-sm">O</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Datos de prueba */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
        <p className="text-xs font-semibold text-blue-900 mb-1">Demo - Credenciales de prueba:</p>
        <p className="text-xs text-blue-700">Email: demo@ofertu.com</p>
        <p className="text-xs text-blue-700">Contraseña: demo123</p>
      </div>

      <AuthLinks onNavigate={onNavigate || (() => {})} type="login" />
    </AuthContainer>
  )
}
