import { api, ENDPOINTS } from './api'
import type { ApiResponse, LoginData, DecodedToken } from './types'


export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Error decodificando token:', error)
    return null
  }
}

// Login de usuario o profesional
export const login = async (loginData: LoginData): Promise<string> => {
  try {
    const response = await api.post<ApiResponse<string>>(
      ENDPOINTS.USUARIOS_LOGIN,
      loginData
    )
    
    if (response.data.error) {
      throw new Error('Error en el login')
    }
    
    const token = response.data.body
    
    
    localStorage.setItem('token', token)
    
    return token
  } catch (error: any) {
    console.error('Error en login:', error)
    throw new Error(error.response?.data?.body || 'Error al iniciar sesión')
  }
}


export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}


export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token')
  if (!token) return false
  
  const decoded = decodeToken(token)
  if (!decoded) return false
  
  
  const now = Date.now() / 1000
  return decoded.exp > now
}


export const getToken = (): string | null => {
  return localStorage.getItem('token')
}


export const getDecodedToken = (): DecodedToken | null => {
  const token = getToken()
  if (!token) return null
  return decodeToken(token)
}
