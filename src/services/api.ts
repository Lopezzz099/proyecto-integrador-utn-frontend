import axios from 'axios'

// Base URL de la API - usando variable de entorno o valor por defecto
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'

// Crear instancia de axios
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Endpoints
export const ENDPOINTS = {
  // Usuarios
  USUARIOS: '/usuarios',
  USUARIOS_LOGIN: '/usuarios/login',
  USUARIOS_BY_ID: (id: number) => `/usuarios/${id}`,
  
  // Profesionales
  PROFESIONALES: '/usuarios/todos/profesionales',
  PROFESIONALES_BY_ID: (id: number) => `/usuarios/${id}`,
} as const
