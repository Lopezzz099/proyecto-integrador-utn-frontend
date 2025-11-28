import { api, ENDPOINTS } from './api'
import type { ApiResponse, User } from './types'

// Obtener todos los profesionales (usuarios con rol_id 3)
export const getAllProfessionals = async (): Promise<User[]> => {
  try {
    const response = await api.get<ApiResponse<User[]>>(
      ENDPOINTS.PROFESIONALES
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener profesionales')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error obteniendo profesionales:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener profesionales')
  }
}

// Obtener profesional por ID
export const getProfessionalById = async (id: number): Promise<User> => {
  try {
    const response = await api.get<ApiResponse<User>>(
      ENDPOINTS.PROFESIONALES_BY_ID(id)
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener profesional')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error obteniendo profesional:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener profesional')
  }
}

// Actualizar profesional
export const updateProfessional = async (
  id: number,
  professionalData: Partial<User>
): Promise<void> => {
  try {
    const response = await api.put<ApiResponse<string>>(
      ENDPOINTS.PROFESIONALES_BY_ID(id),
      professionalData
    )
    
    if (response.data.error) {
      throw new Error('Error al actualizar profesional')
    }
  } catch (error: any) {
    console.error('Error actualizando profesional:', error)
    throw new Error(error.response?.data?.body || 'Error al actualizar profesional')
  }
}

// Eliminar profesional
export const deleteProfessional = async (id: number): Promise<void> => {
  try {
    const response = await api.delete<ApiResponse<string>>(
      ENDPOINTS.PROFESIONALES_BY_ID(id)
    )
    
    if (response.data.error) {
      throw new Error('Error al eliminar profesional')
    }
  } catch (error: any) {
    console.error('Error eliminando profesional:', error)
    throw new Error(error.response?.data?.body || 'Error al eliminar profesional')
  }
}

// Filtrar profesionales por oficio
export const filterProfessionalsBySkill = async (
  _skill: string
): Promise<User[]> => {
  try {
    const professionals = await getAllProfessionals()
    // Aquí puedes implementar un filtro adicional si el backend no lo soporta
    return professionals
  } catch (error: any) {
    console.error('Error filtrando profesionales:', error)
    throw error
  }
}

// Filtrar profesionales por ubicación
export const filterProfessionalsByLocation = async (
  _location: string
): Promise<User[]> => {
  try {
    const professionals = await getAllProfessionals()
    // Aquí puedes implementar un filtro adicional si el backend no lo soporta
    return professionals
  } catch (error: any) {
    console.error('Error filtrando profesionales:', error)
    throw error
  }
}
