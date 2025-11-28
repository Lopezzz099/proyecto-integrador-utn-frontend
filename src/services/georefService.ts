// API de GeoRef Argentina - Datos abiertos del gobierno
const GEOREF_API_BASE = 'https://apis.datos.gob.ar/georef/api'

// Provincia de Buenos Aires (código 06)
const BUENOS_AIRES_PROVINCIA = '06'

export interface Municipio {
  id: string
  nombre: string
}

export interface Localidad {
  id: string
  nombre: string
  municipio: {
    id: string
    nombre: string
  }
}

export interface GeoRefResponse<T> {
  cantidad: number
  inicio: number
  parametros: any
  total: number
  localidades?: T[]
  municipios?: T[]
}

// Obtener municipios de Buenos Aires
export const getMunicipios = async (nombre?: string): Promise<Municipio[]> => {
  try {
    const params = new URLSearchParams({
      provincia: BUENOS_AIRES_PROVINCIA,
      campos: 'id,nombre',
      max: '100',
      ...(nombre && { nombre }),
    })

    const response = await fetch(`${GEOREF_API_BASE}/municipios?${params}`)
    const data: GeoRefResponse<Municipio> = await response.json()

    return data.municipios || []
  } catch (error) {
    console.error('Error obteniendo municipios:', error)
    return []
  }
}

// Obtener localidades de Buenos Aires filtradas por municipio
export const getLocalidades = async (
  municipio?: string,
  nombre?: string
): Promise<Localidad[]> => {
  try {
    const params = new URLSearchParams({
      provincia: BUENOS_AIRES_PROVINCIA,
      campos: 'id,nombre,municipio.id,municipio.nombre',
      max: '100',
      ...(municipio && { municipio }),
      ...(nombre && { nombre }),
    })

    const response = await fetch(`${GEOREF_API_BASE}/localidades?${params}`)
    const data: GeoRefResponse<Localidad> = await response.json()

    return data.localidades || []
  } catch (error) {
    console.error('Error obteniendo localidades:', error)
    return []
  }
}

// Buscar municipios con autocompletado (primeros 5 resultados)
export const searchMunicipios = async (query: string): Promise<Municipio[]> => {
  if (!query || query.length < 2) return []

  try {
    const params = new URLSearchParams({
      provincia: BUENOS_AIRES_PROVINCIA,
      campos: 'id,nombre',
      max: '5',
      nombre: query,
    })

    const response = await fetch(`${GEOREF_API_BASE}/municipios?${params}`)
    const data: GeoRefResponse<Municipio> = await response.json()

    return data.municipios || []
  } catch (error) {
    console.error('Error buscando municipios:', error)
    return []
  }
}

// Buscar localidades con autocompletado (primeros 5 resultados)
export const searchLocalidades = async (
  municipioId: string,
  query: string
): Promise<Localidad[]> => {
  if (!query || query.length < 2) return []

  try {
    const params = new URLSearchParams({
      provincia: BUENOS_AIRES_PROVINCIA,
      municipio: municipioId,
      campos: 'id,nombre,municipio.id,municipio.nombre',
      max: '5',
      nombre: query,
    })

    const response = await fetch(`${GEOREF_API_BASE}/localidades?${params}`)
    const data: GeoRefResponse<Localidad> = await response.json()

    return data.localidades || []
  } catch (error) {
    console.error('Error buscando localidades:', error)
    return []
  }
}
