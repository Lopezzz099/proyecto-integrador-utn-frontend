import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const ENDPOINTS = {
  USUARIOS: '/usuarios',
  USUARIOS_LOGIN: '/usuarios/login',
  USUARIOS_BY_ID: (id: number) => `/usuarios/${id}`,
  PROFESIONALES: '/usuarios/todos/profesionales',
  PROFESIONALES_BY_ID: (id: number) => `/usuarios/${id}`,
  PROFESIONALES_BY_OFICIO: (nombre: string) => `/usuarios/oficio/${nombre}`,
  PROFESIONALES_BY_UBICACION: (localidad: string, municipio: string) => `/usuarios/ubicacion/${localidad}/${municipio}`,
  OFICIOS: '/oficios',
  OFICIOS_BY_ID: (id: number) => `/oficios/${id}`,
  UBICACIONES: '/ubicaciones',
  UBICACIONES_BY_ID: (id: number) => `/ubicaciones/${id}`,
  COMENTARIOS: '/comentarios',
} as const
