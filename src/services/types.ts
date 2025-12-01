
export type UserRole = 'client' | 'provider'


export const ROLE_ID = {
  client: 2,
  provider: 3,
  admin: 1,
} as const


export interface Ubicacion {
  id?: number
  localidad: string
  municipio: string
}


export interface Oficio {
  id: number
  nombre: string
}


export interface Comentario {
  id: number
  usuario_id: number
  profesional_id?: number
  estrellas: number
  comentario: string
  fecha?: string
}


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


export interface RegisterProfessionalData extends RegisterUserData {
  descripcion: string
  estado: string
  disponibilidad: string
  oficios: string[]
}


export interface LoginData {
  email: string
  password: string
}


export interface ApiResponse<T = any> {
  error: boolean
  status: number
  body: T
}


export interface DecodedToken {
  id: number
  rol_id: number
  iat: number
  exp: number
}


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
