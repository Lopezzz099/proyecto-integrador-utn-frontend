import { createContext, useContext, useState, type ReactNode } from 'react'

export type UserRole = 'client' | 'provider'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  phone?: string
  location?: string
  skills?: string[]
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string, role: UserRole) => void
  register: (userData: Partial<User>, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, _password: string, role: UserRole) => {
    // Simulación de login (en producción sería una llamada API)
    const mockUser: User = {
      id: '1',
      name: 'Usuario Demo',
      email,
      role,
      phone: '1234567890',
      location: role === 'client' ? 'Buenos Aires' : 'CABA',
      skills: role === 'provider' ? ['Electricista', 'Plomería'] : undefined,
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const register = (userData: Partial<User>, _password: string) => {
    // Simulación de registro (en producción sería una llamada API)
    const newUser: User = {
      id: Math.random().toString(),
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'client',
      phone: userData.phone,
      location: userData.location,
      skills: userData.skills,
    }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider')
  }
  return context
}
