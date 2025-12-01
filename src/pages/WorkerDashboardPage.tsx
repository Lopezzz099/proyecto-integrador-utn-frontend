import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { getProfessionalById, updateProfessional } from '@/services/professionalService'
import { searchMunicipios, searchLocalidades } from '@/services/georefService'
import type { Municipio } from '@/services/georefService'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { Button } from '@/components/ui/button'
import { MultiSelect } from '@/components/ui/MultiSelect'
import { AutocompleteInput } from '@/components/ui/AutocompleteInput'
import { oficios } from '@/lib/oficios'
import { 
  Edit, 
  Save, 
  X, 
  MapPin, 
  Briefcase, 
  Star, 
  AlertCircle,
  Clock,
  Check
} from 'lucide-react'
import type { User } from '@/services/types'

export function WorkerDashboardPage() {
  const { user } = useAuth()
  const [professionalData, setProfessionalData] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  
  
  const [descripcion, setDescripcion] = useState('')
  const [disponibilidad, setDisponibilidad] = useState('')
  const [estado, setEstado] = useState(true)
  const [selectedOficiosIds, setSelectedOficiosIds] = useState<number[]>([])
  
  // Ubicaciones múltiples
  const [ubicaciones, setUbicaciones] = useState<Array<{
    municipio: string
    municipioId: string
    localidad: string
    localidadId: string
    selectedMunicipio: Municipio | null
  }>>([{
    municipio: '',
    municipioId: '',
    localidad: '',
    localidadId: '',
    selectedMunicipio: null
  }])
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    loadProfessionalData()
  }, [user])

  const loadProfessionalData = async () => {
    if (!user) return
    
    try {
      setIsLoading(true)
      const data = await getProfessionalById(user.id)
      setProfessionalData(data)
      
      // Cargar datos en el formulario
      if (data.profesional) {
        setDescripcion(data.profesional.descripcion || '')
        setDisponibilidad(data.profesional.disponibilidad || '')
        setEstado(data.profesional.estado === 1)
        setSelectedOficiosIds(data.profesional.oficios?.map(o => o.id) || [])
        
        // Cargar ubicaciones
        if (data.profesional.ubicaciones && data.profesional.ubicaciones.length > 0) {
          setUbicaciones(data.profesional.ubicaciones.map((ub, index) => ({
            municipio: ub.municipio,
            municipioId: '',
            localidad: ub.localidad,
            localidadId: '',
            selectedMunicipio: { id: '', nombre: ub.municipio }
          })))
        }
      }
    } catch (error) {
      console.error('Error cargando datos del profesional:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const validateFields = (): boolean => {
    const newErrors: { [key: string]: string } = {}
    
    console.log('Validando campos:', {
      descripcion,
      disponibilidad,
      selectedOficiosIds,
      ubicaciones
    })
    
    if (!descripcion.trim()) {
      newErrors.descripcion = 'La descripción es obligatoria'
    }
    if (!disponibilidad.trim()) {
      newErrors.disponibilidad = 'La disponibilidad es obligatoria'
    }
    if (selectedOficiosIds.length === 0) {
      newErrors.oficios = 'Debes seleccionar al menos un oficio'
    }
    if (ubicaciones.length === 0 || !ubicaciones[0].municipio.trim() || !ubicaciones[0].localidad.trim()) {
      newErrors.ubicaciones = 'Debes agregar al menos una ubicación completa'
    }
    
    console.log('Errores de validación:', newErrors)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (!validateFields() || !user) return
    
    try {
      setIsSaving(true)
      
      
      const oficiosNombres = oficios
        .filter(o => selectedOficiosIds.includes(o.id))
        .map(o => o.nombre)
      
      
      const ubicacionesCompletas = ubicaciones.filter(ub => 
        ub.municipio.trim() && ub.localidad.trim()
      )
      
      const updateData = {
        rol_id: user.rol_id,
        ubicacion: {
          localidad: ubicacionesCompletas[0].municipio,
          municipio: ubicacionesCompletas[0].localidad,
        },
        descripcion,
        disponibilidad,
        estado: estado ? '1' : '0',
        ubicaciones: ubicacionesCompletas.map(ub => ({
          localidad: ub.municipio,
          municipio: ub.localidad,
        })),
        oficios: oficiosNombres
      }
      
      console.log('Datos a actualizar:', updateData)
      await updateProfessional(user.id, updateData)
      
      
      await loadProfessionalData()
      setIsEditing(false)
    } catch (error: any) {
      console.error('Error al actualizar:', error)
      setErrors({
        general: error.message || 'Error al guardar los cambios'
      })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
      setIsSaving(false)
    }
  }

  const addUbicacion = () => {
    setUbicaciones([...ubicaciones, {
      municipio: '',
      municipioId: '',
      localidad: '',
      localidadId: '',
      selectedMunicipio: null
    }])
  }

  const removeUbicacion = (index: number) => {
    if (ubicaciones.length > 1) {
      setUbicaciones(ubicaciones.filter((_, i) => i !== index))
    }
  }

  const updateUbicacion = (index: number, field: string, value: any) => {
    const newUbicaciones = [...ubicaciones]
    newUbicaciones[index] = { ...newUbicaciones[index], [field]: value }
    setUbicaciones(newUbicaciones)
  }

  const needsCompletion = !professionalData?.profesional?.descripcion || 
                          !professionalData?.profesional?.disponibilidad ||
                          !professionalData?.profesional?.ubicaciones ||
                          professionalData?.profesional?.ubicaciones.length === 0

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DBA668] mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando perfil...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  if (!professionalData) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <p className="text-lg text-gray-700">No se pudo cargar la información del perfil</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Alerta de perfil incompleto */}
        {needsCompletion && !isEditing && (
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-yellow-900">
                ⚠️ Perfil Incompleto - Completa tu información
              </p>
              <p className="text-sm text-yellow-700 mt-1">
                Tu perfil no será visible para los clientes hasta que completes todos los campos obligatorios 
                (descripción, disponibilidad, ubicación y oficios).
              </p>
            </div>
            <Button
              onClick={() => setIsEditing(true)}
              size="sm"
              className="bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Completar Ahora
            </Button>
          </div>
        )}

        {/* Error general */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-900">Error</p>
              <p className="text-sm text-red-700 mt-1">{errors.general}</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">
              {isEditing ? 'Editar Perfil' : 'Mi Perfil Profesional'}
            </h1>
            <p className="text-gray-600">
              {isEditing ? 'Actualiza tu información profesional' : 'Administra tu información y disponibilidad'}
            </p>
          </div>
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-[#DBA668] hover:bg-[#c89555] text-white"
            >
              <Edit className="w-5 h-5 mr-2" />
              Editar Perfil
            </Button>
          )}
        </div>

        {}
        {isEditing ? (
          
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Descripción <span className="text-red-500">*</span>
              </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Describe tu experiencia, especialidades y qué te hace único..."
                rows={4}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.descripcion
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
                }`}
              />
              {errors.descripcion && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.descripcion}
                </p>
              )}
            </div>

            {}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Estado
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setEstado(true)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                    estado
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Check className="w-5 h-5 mx-auto mb-1" />
                  <span className="font-medium">Disponible</span>
                </button>
                <button
                  onClick={() => setEstado(false)}
                  className={`flex-1 py-3 px-4 rounded-lg border-2 transition ${
                    !estado
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <X className="w-5 h-5 mx-auto mb-1" />
                  <span className="font-medium">No Disponible</span>
                </button>
              </div>
            </div>

            {}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Disponibilidad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={disponibilidad}
                onChange={(e) => setDisponibilidad(e.target.value)}
                placeholder="Ej: Lunes a Viernes 9-18hs, 24 horas, Fines de semana..."
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                  errors.disponibilidad
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
                }`}
              />
              {errors.disponibilidad && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.disponibilidad}
                </p>
              )}
            </div>

            {}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#1F1F1F]">
                  Zonas de Cobertura <span className="text-red-500">*</span>
                </h3>
                <Button
                  type="button"
                  onClick={addUbicacion}
                  size="sm"
                  variant="outline"
                  className="border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-white"
                >
                  + Agregar Zona
                </Button>
              </div>

              {errors.ubicaciones && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.ubicaciones}
                </p>
              )}

              {ubicaciones.map((ubicacion, index) => (
                <div key={index} className="p-4 border-2 border-gray-200 rounded-lg space-y-3 relative">
                  {ubicaciones.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeUbicacion(index)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  <p className="text-xs font-semibold text-gray-500 uppercase">Zona {index + 1}</p>

                  <AutocompleteInput
                    label="Municipio"
                    value={ubicacion.municipio}
                    placeholder="Ej: La Plata, San Isidro, Tigre..."
                    onSearch={searchMunicipios}
                    onSelect={(option) => {
                      if (option) {
                        const newUbicaciones = [...ubicaciones]
                        newUbicaciones[index] = {
                          ...newUbicaciones[index],
                          municipio: option.nombre,
                          municipioId: option.id,
                          selectedMunicipio: { id: option.id, nombre: option.nombre },
                          localidad: '',
                          localidadId: ''
                        }
                        setUbicaciones(newUbicaciones)
                      } else {
                        const newUbicaciones = [...ubicaciones]
                        newUbicaciones[index] = {
                          ...newUbicaciones[index],
                          municipio: '',
                          municipioId: '',
                          selectedMunicipio: null,
                          localidad: '',
                          localidadId: ''
                        }
                        setUbicaciones(newUbicaciones)
                      }
                    }}
                    selectedId={ubicacion.municipioId}
                  />

                  <AutocompleteInput
                    label="Localidad"
                    value={ubicacion.localidad}
                    placeholder={
                      ubicacion.selectedMunicipio
                        ? 'Ej: City Bell, Casco Urbano...'
                        : 'Primero selecciona un municipio'
                    }
                    disabled={!ubicacion.selectedMunicipio}
                    onSearch={(query) =>
                      ubicacion.selectedMunicipio
                        ? searchLocalidades(ubicacion.selectedMunicipio.id, query)
                        : Promise.resolve([])
                    }
                    onSelect={(option) => {
                      if (option) {
                        const newUbicaciones = [...ubicaciones]
                        newUbicaciones[index] = {
                          ...newUbicaciones[index],
                          localidad: option.nombre,
                          localidadId: option.id
                        }
                        setUbicaciones(newUbicaciones)
                      } else {
                        const newUbicaciones = [...ubicaciones]
                        newUbicaciones[index] = {
                          ...newUbicaciones[index],
                          localidad: '',
                          localidadId: ''
                        }
                        setUbicaciones(newUbicaciones)
                      }
                    }}
                    selectedId={ubicacion.localidadId}
                  />
                </div>
              ))}
            </div>

            {/* Oficios */}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Oficios <span className="text-red-500">*</span>
              </label>
              <MultiSelect
                options={oficios}
                selectedIds={selectedOficiosIds}
                onChange={setSelectedOficiosIds}
                placeholder="Selecciona tus oficios"
                error={errors.oficios}
              />
              {errors.oficios && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.oficios}
                </p>
              )}
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-white"
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    Guardar Cambios
                  </>
                )}
              </Button>
              <Button
                onClick={() => {
                  setIsEditing(false)
                  setErrors({})
                  // Restaurar valores originales
                  if (professionalData.profesional) {
                    setDescripcion(professionalData.profesional.descripcion || '')
                    setDisponibilidad(professionalData.profesional.disponibilidad || '')
                    setEstado(professionalData.profesional.estado === 1)
                    setSelectedOficiosIds(professionalData.profesional.oficios?.map(o => o.id) || [])
                    
                    // Restaurar ubicaciones
                    if (professionalData.profesional.ubicaciones && professionalData.profesional.ubicaciones.length > 0) {
                      setUbicaciones(professionalData.profesional.ubicaciones.map((ub, index) => ({
                        municipio: ub.municipio,
                        municipioId: '',
                        localidad: ub.localidad,
                        localidadId: '',
                        selectedMunicipio: { id: '', nombre: ub.municipio }
                      })))
                    }
                  }
                }}
                variant="outline"
                disabled={isSaving}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <X className="w-5 h-5 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        ) : (
          // MODO VISTA
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card Principal */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DBA668] to-[#c89555] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {professionalData.nombre.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1F1F1F] mb-1">{professionalData.nombre}</h2>
                      <p className="text-gray-600 flex items-center gap-1 text-sm">
                        📧 {professionalData.email}
                      </p>
                      <p className="text-gray-600 flex items-center gap-1 text-sm">
                        📱 {professionalData.telefono}
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full font-semibold text-sm shadow-sm ${
                    professionalData.profesional?.estado === 1
                      ? 'bg-green-100 text-green-700 border-2 border-green-300'
                      : 'bg-red-100 text-red-700 border-2 border-red-300'
                  }`}>
                    {professionalData.profesional?.estado === 1 ? '✓ Disponible' : '✗ No Disponible'}
                  </div>
                </div>

                {/* Descripción */}
                {professionalData.profesional?.descripcion && (
                  <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-sm font-bold text-[#DBA668] mb-2 uppercase tracking-wide">Sobre mí</h3>
                    <p className="text-gray-700 leading-relaxed">{professionalData.profesional.descripcion}</p>
                  </div>
                )}

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Disponibilidad */}
                  {professionalData.profesional?.disponibilidad && (
                    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#DBA668] transition">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-5 h-5 text-[#DBA668]" />
                        <span className="text-xs font-semibold text-gray-500 uppercase">Disponibilidad</span>
                      </div>
                      <p className="text-gray-900 font-medium">{professionalData.profesional.disponibilidad}</p>
                    </div>
                  )}

                  {/* Calificación */}
                  {professionalData.profesional?.promedio !== undefined && (
                    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#DBA668] transition">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-semibold text-gray-500 uppercase">Calificación</span>
                      </div>
                      <p className="text-gray-900 font-medium">
                        {professionalData.profesional.promedio.toFixed(1)} / 5.0
                        <span className="text-sm text-gray-500 ml-2">
                          ({professionalData.profesional.comentarios?.length || 0} reseñas)
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Comentarios */}
              {professionalData.profesional?.comentarios && professionalData.profesional.comentarios.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-[#DBA668]" />
                    Reseñas de Clientes
                  </h3>
                  <div className="space-y-4">
                    {professionalData.profesional.comentarios.map((comentario) => (
                      <div key={comentario.id} className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#DBA668]">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < comentario.estrellas
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{comentario.comentario}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {}
            <div className="space-y-6">
              {}
              {professionalData.profesional?.oficios && professionalData.profesional.oficios.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#DBA668]" />
                    Mis Oficios
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {professionalData.profesional.oficios.map((oficio) => (
                      <span
                        key={oficio.id}
                        className="px-3 py-1.5 bg-gradient-to-r from-[#DBA668] to-[#c89555] text-white rounded-full text-sm font-medium shadow-sm"
                      >
                        {oficio.nombre}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {}
              {professionalData.profesional?.ubicaciones && professionalData.profesional.ubicaciones.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#DBA668]" />
                    Zonas de Cobertura
                  </h3>
                  <div className="space-y-2">
                    {professionalData.profesional.ubicaciones.map((ubicacion) => (
                      <div key={ubicacion.id} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <MapPin className="w-4 h-4 text-[#DBA668] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-900 font-medium text-sm">{ubicacion.localidad}</p>
                          <p className="text-gray-500 text-xs">{ubicacion.municipio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {}
        {!isEditing && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>💡 Consejo:</strong> Mantén tu perfil actualizado para recibir más solicitudes de trabajo. 
              Los perfiles completos y detallados tienen un 60% más de probabilidades de ser contactados.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
