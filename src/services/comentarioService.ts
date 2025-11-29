import { api, ENDPOINTS } from './api'
import type { ApiResponse } from './types'

// Datos para crear un comentario
export interface CreateComentarioData {
  comentario: string
  estrellas: number
  profesional_id: number
  usuario_id: number
}

// Crear un comentario
export const createComentario = async (
  comentarioData: CreateComentarioData
): Promise<void> => {
  try {
    const response = await api.post<ApiResponse<any>>(
      ENDPOINTS.COMENTARIOS,
      comentarioData
    )
    
    if (response.data.error) {
      throw new Error('Error al crear el comentario')
    }
  } catch (error: any) {
    console.error('Error creando comentario:', error)
    throw new Error(
      error.response?.data?.body || 
      error.response?.data?.message || 
      'Error al crear el comentario'
    )
  }
}
