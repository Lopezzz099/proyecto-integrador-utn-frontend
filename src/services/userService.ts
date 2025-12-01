import { api, ENDPOINTS } from './api'
import type { ApiResponse, User, RegisterUserData, RegisterProfessionalData } from './types'


export const getUserById = async (id: number): Promise<User> => {
  try {
    const response = await api.get<ApiResponse<User>>(
      ENDPOINTS.USUARIOS_BY_ID(id)
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener usuario')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error obteniendo usuario:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener usuario')
  }
}


export const registerUser = async (userData: RegisterUserData): Promise<void> => {
  try {
    const response = await api.post<ApiResponse<string>>(
      ENDPOINTS.USUARIOS,
      userData
    )
    
    if (response.data.error) {
      throw new Error('Error en el registro')
    }
  } catch (error: any) {
    console.error('Error en registro de usuario:', error)
    throw new Error(error.response?.data?.body || 'Error al registrar usuario')
  }
}


export const registerProfessional = async (
  professionalData: RegisterProfessionalData
): Promise<void> => {
  try {
    const response = await api.post<ApiResponse<string>>(
      ENDPOINTS.USUARIOS,
      professionalData
    )
    
    if (response.data.error) {
      throw new Error('Error en el registro')
    }
  } catch (error: any) {
    console.error('Error en registro de profesional:', error)
    throw new Error(error.response?.data?.body || 'Error al registrar profesional')
  }
}


export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get<ApiResponse<User[]>>(ENDPOINTS.USUARIOS)
    
    if (response.data.error) {
      throw new Error('Error al obtener usuarios')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error obteniendo usuarios:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener usuarios')
  }
}


export const updateUser = async (id: number, userData: Partial<User>): Promise<void> => {
  try {
    const response = await api.put<ApiResponse<string>>(
      ENDPOINTS.USUARIOS_BY_ID(id),
      userData
    )
    
    if (response.data.error) {
      throw new Error('Error al actualizar usuario')
    }
  } catch (error: any) {
    console.error('Error actualizando usuario:', error)
    throw new Error(error.response?.data?.body || 'Error al actualizar usuario')
  }
}


export const deleteUser = async (id: number): Promise<void> => {
  try {
    const response = await api.delete<ApiResponse<string>>(
      ENDPOINTS.USUARIOS_BY_ID(id)
    )
    
    if (response.data.error) {
      throw new Error('Error al eliminar usuario')
    }
  } catch (error: any) {
    console.error('Error eliminando usuario:', error)
    throw new Error(error.response?.data?.body || 'Error al eliminar usuario')
  }
}
