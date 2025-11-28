import { Star, MapPin, CheckCircle, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Ubicacion } from '@/services/types'

interface Worker {
  id: string
  name: string
  category: string
  specialties: string[]
  rating: number
  reviewCount: number
  locations: Ubicacion[]
  verified: boolean
  estado: string
  disponibilidad: string
  availability: 'available' | 'busy' | 'unavailable'
  description: string
}

interface WorkerCardProps {
  worker: Worker
  onViewProfile: (workerId: string) => void
  onContact: (workerId: string) => void
}

export function WorkerCard({ worker, onViewProfile, onContact }: WorkerCardProps) {
  const getAvailabilityColor = (availability: Worker['availability']) => {
    switch (availability) {
      case 'available':
        return 'bg-green-500'
      case 'busy':
        return 'bg-yellow-500'
      case 'unavailable':
        return 'bg-red-500'
    }
  }

  const getAvailabilityText = (availability: Worker['availability']) => {
    switch (availability) {
      case 'available':
        return 'Activo'
      case 'busy':
        return 'Ocupado'
      case 'unavailable':
        return 'Inactivo'
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Información principal */}
          <div className="flex-1 min-w-0">
            {/* Header con nombre, verificación y estado */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-[#1F1F1F]">{worker.name}</h3>
                {worker.verified && (
                  <CheckCircle className="w-5 h-5 text-blue-500" aria-label="Verificado" />
                )}
              </div>
              <div className={`${getAvailabilityColor(worker.availability)} px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                <Activity className="w-3.5 h-3.5 text-white" />
                <span className="text-xs text-white font-medium">
                  {getAvailabilityText(worker.availability)}
                </span>
              </div>
            </div>

            {/* Rating con estrellas */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= worker.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-[#1F1F1F]">
                {worker.rating > 0 ? worker.rating.toFixed(1) : 'Sin calificar'}
              </span>
              <span className="text-gray-500 text-sm">
                ({worker.reviewCount} {worker.reviewCount === 1 ? 'reseña' : 'reseñas'})
              </span>
            </div>

            {/* Ubicaciones */}
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {worker.locations.length > 0 ? (
                    worker.locations.map((location, index) => (
                      <span
                        key={index}
                        className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded"
                      >
                        {location.localidad}, {location.municipio}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-500">Sin ubicaciones registradas</span>
                  )}
                </div>
              </div>
            </div>

            {/* Especialidades/Oficios */}
            <div className="mb-3">
              <p className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</p>
              <div className="flex flex-wrap gap-2">
                {worker.specialties.length > 0 ? (
                  worker.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#DBA668]/10 text-[#DBA668] text-sm rounded-md font-medium"
                    >
                      {specialty}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">Sin especialidades registradas</span>
                )}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-700">Disponibilidad:</span> {worker.disponibilidad}
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-2">
              <Button
                onClick={() => onViewProfile(worker.id)}
                variant="outline"
                className="flex-1 border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-white"
              >
                Ver perfil completo
              </Button>
              <Button
                onClick={() => onContact(worker.id)}
                disabled={worker.availability === 'unavailable'}
                className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {worker.availability === 'unavailable' ? 'No disponible' : 'Contactar'}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
