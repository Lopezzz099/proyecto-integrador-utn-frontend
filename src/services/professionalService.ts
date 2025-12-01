import { api, ENDPOINTS } from './api'
import type { ApiResponse, User, Oficio, Ubicacion } from './types'


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


export const updateProfessional = async (
  id: number,
  professionalData: Partial<User>
): Promise<void> => {
  try {
    const response = await api.put<ApiResponse<string>>(
      ENDPOINTS.USUARIOS,
      {
        id,
        ...professionalData
      }
    )
    
    if (response.data.error) {
      throw new Error('Error al actualizar profesional')
    }
  } catch (error: any) {
    console.error('Error actualizando profesional:', error)
    throw new Error(error.response?.data?.body || 'Error al actualizar profesional')
  }
}


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


export const filterProfessionalsBySkill = async (
  skill: string
): Promise<User[]> => {
  try {
    const response = await api.get<ApiResponse<User[]>>(
      ENDPOINTS.PROFESIONALES_BY_OFICIO(skill)
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener profesionales por oficio')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error filtrando profesionales por oficio:', error)
    throw new Error(error.response?.data?.body || 'Error al filtrar profesionales por oficio')
  }
}


export const filterProfessionalsByLocation = async (
  localidad: string,
  municipio: string
): Promise<User[]> => {
  try {
    const response = await api.get<ApiResponse<User[]>>(
      ENDPOINTS.PROFESIONALES_BY_UBICACION(localidad, municipio)
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener profesionales por ubicación')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error filtrando profesionales por ubicación:', error)
    throw new Error(error.response?.data?.body || 'Error al filtrar profesionales por ubicación')
  }
}


export const getAllOficios = async (): Promise<Oficio[]> => {
  try {
    const response = await api.get<ApiResponse<Oficio[]>>(
      ENDPOINTS.OFICIOS
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener oficios')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error obteniendo oficios:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener oficios')
  }
}


export const getOficioById = async (id: number): Promise<Oficio> => {
  try {
    const response = await api.get<ApiResponse<Oficio[]>>(
      ENDPOINTS.OFICIOS_BY_ID(id)
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener oficio')
    }
    
    
    return response.data.body[0]
  } catch (error: any) {
    console.error('Error obteniendo oficio:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener oficio')
  }
}


export const getAllUbicaciones = async (): Promise<Ubicacion[]> => {
  try {
    const response = await api.get<ApiResponse<Ubicacion[]>>(
      ENDPOINTS.UBICACIONES
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener ubicaciones')
    }
    
    return response.data.body
  } catch (error: any) {
    console.error('Error obteniendo ubicaciones:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener ubicaciones')
  }
}


export const getUbicacionById = async (id: number): Promise<Ubicacion> => {
  try {
    const response = await api.get<ApiResponse<Ubicacion[]>>(
      ENDPOINTS.UBICACIONES_BY_ID(id)
    )
    
    if (response.data.error) {
      throw new Error('Error al obtener ubicación')
    }
    
    
    return response.data.body[0]
  } catch (error: any) {
    console.error('Error obteniendo ubicación:', error)
    throw new Error(error.response?.data?.body || 'Error al obtener ubicación')
  }
}
