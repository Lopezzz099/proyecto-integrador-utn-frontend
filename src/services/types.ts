// Tipos de roles
export type UserRole = 'client' | 'provider'

// Mapeo de roles frontend a backend
export const ROLE_ID = {
  client: 2,
  provider: 3,
  admin: 1,
} as const

// Ubicación
export interface Ubicacion {
  id?: number
  localidad: string
  municipio: string
}

// Oficio
export interface Oficio {
  id: number
  nombre: string
}

// Comentario/Review
export interface Comentario {
  id: number
  usuario_id: number
  profesional_id?: number
  estrellas: number
  comentario: string
  fecha?: string
}

// Datos de profesional
export interface ProfesionalData {
  id: number
  usuario_id?: number
  descripcion: string
  verificacion: number
  estado: number
  disponibilidad: string
  promedio: number
  ubicaciones?: Ubicacion[]
  oficios?: Oficio[]
  comentarios?: Comentario[]
}

// Usuario base
export interface User {
  id: number
  nombre: string
  email: string
  telefono: string
  condiciones: string
  rol_id: number
  ubicacion_id: number
  ubicacion?: Ubicacion
  profesional?: ProfesionalData
}

// Datos de registro de usuario
export interface RegisterUserData {
  nombre: string
  email: string
  password: string
  telefono: string
  condiciones: string
  rol_id: number
  ubicacion: {
    localidad: string
    municipio: string
  }
}

// Datos de registro de profesional
export interface RegisterProfessionalData extends RegisterUserData {
  descripcion: string
  estado: string
  disponibilidad: string
  oficios: string[]
}

// Datos de login
export interface LoginData {
  email: string
  password: string
}

// Response genérico de la API
export interface ApiResponse<T = any> {
  error: boolean
  status: number
  body: T
}

// Token decodificado
export interface DecodedToken {
  id: number
  rol_id: number
  iat: number
  exp: number
}

// Contexto de autenticación
export interface AuthContextType {
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
