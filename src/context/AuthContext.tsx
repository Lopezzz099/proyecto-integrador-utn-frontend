import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import * as authService from '../services/authService'
import * as userService from '../services/userService'
import type { User, UserRole, RegisterUserData, RegisterProfessionalData } from '../services/types'


export type { UserRole, User }

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: RegisterUserData | RegisterProfessionalData) => Promise<void>
  logout: () => void
  getUserRole: () => UserRole | null
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  
  useEffect(() => {
    const initAuth = async () => {
      try {
        const savedToken = authService.getToken()
        if (savedToken && authService.isAuthenticated()) {
          const decoded = authService.getDecodedToken()
          if (decoded) {
            
            const userData = await userService.getUserById(decoded.id)
            setUser(userData)
            setToken(savedToken)
          }
        }
      } catch (error) {
        console.error('Error inicializando autenticación:', error)
        authService.logout()
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      
      
      const receivedToken = await authService.login({ email, password })
      
      
      const decoded = authService.getDecodedToken()
      if (!decoded) {
        throw new Error('Token inválido')
      }
      
      
      const userData = await userService.getUserById(decoded.id)
      
      setUser(userData)
      setToken(receivedToken)
    } catch (error: any) {
      console.error('Error en login:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: RegisterUserData | RegisterProfessionalData) => {
    try {
      setIsLoading(true)
      
      
      const isProfessional = userData.rol_id === 3
      
      if (isProfessional) {
        await userService.registerProfessional(userData as RegisterProfessionalData)
      } else {
        await userService.registerUser(userData as RegisterUserData)
      }
      
      
      await login(userData.email, userData.password)
    } catch (error: any) {
      console.error('Error en registro:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authService.logout()
    setUser(null)
    setToken(null)
  }

  const getUserRole = (): UserRole | null => {
    if (!user) return null
    return user.rol_id === 3 ? 'provider' : 'client'
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user && !!token, 
        isLoading,
        token,
        login, 
        register, 
        logout,
        getUserRole,
        updateUser
      }}
    >
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
