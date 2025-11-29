import { Star, MapPin, CheckCircle, Briefcase } from 'lucide-react'
import type { User } from '@/services/types'

interface ProfessionalHeaderProps {
  professional: User
}

export function ProfessionalHeader({ professional }: ProfessionalHeaderProps) {
  const prof = professional.profesional

  const getAvailabilityColor = (estado: number) => {
    return estado === 1 ? 'bg-green-500' : 'bg-red-500'
  }

  const getAvailabilityText = (estado: number) => {
    return estado === 1 ? 'Disponible' : 'No disponible'
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Imagen de perfil */}
        <div className="flex-shrink-0">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(professional.nombre)}&size=200&background=DBA668&color=fff`}
            alt={professional.nombre}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#DBA668]"
          />
        </div>

        {/* Información principal */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold text-[#1F1F1F]">{professional.nombre}</h1>
                {prof?.verificacion === 1 && (
                  <CheckCircle className="w-6 h-6 text-blue-500" aria-label="Verificado" />
                )}
              </div>
              <p className="text-lg text-gray-600">
                {prof?.oficios?.[0]?.nombre || 'Profesional'}
              </p>
            </div>
            {prof?.estado !== undefined && (
              <div className={`${getAvailabilityColor(prof.estado)} px-4 py-2 rounded-full`}>
                <span className="text-sm text-white font-medium">
                  {getAvailabilityText(prof.estado)}
                </span>
              </div>
            )}
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-500">Calificación</p>
                <p className="font-bold text-[#1F1F1F]">
                  {prof?.promedio ? prof.promedio.toFixed(1) : 'Sin calificar'} 
                  {prof?.comentarios && ` (${prof.comentarios.length})`}
                </p>
              </div>
            </div>
            {prof?.ubicaciones && prof.ubicaciones.length > 0 && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#DBA668]" />
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-bold text-[#1F1F1F]">
                    {prof.ubicaciones[0].localidad}
                  </p>
                </div>
              </div>
            )}
            {prof?.oficios && prof.oficios.length > 0 && (
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#DBA668]" />
                <div>
                  <p className="text-sm text-gray-500">Oficios</p>
                  <p className="font-bold text-[#1F1F1F]">{prof.oficios.length}</p>
                </div>
              </div>
            )}
          </div>

          {/* Oficios/Especialidades */}
          {prof?.oficios && prof.oficios.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {prof.oficios.map((oficio) => (
                <span
                  key={oficio.id}
                  className="px-3 py-1 bg-[#DBA668] bg-opacity-10 text-[#DBA668] text-sm rounded-full font-medium"
                >
                  {oficio.nombre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
