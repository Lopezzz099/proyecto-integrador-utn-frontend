import { Star, MapPin, Clock, CheckCircle, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Worker } from '@/data/workersData'

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
        return 'Disponible'
      case 'busy':
        return 'Ocupado'
      case 'unavailable':
        return 'No disponible'
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Imagen del trabajador */}
          <div className="flex-shrink-0">
            <img
              src={worker.image}
              alt={worker.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
          </div>

          {/* Información principal */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1F1F1F]">{worker.name}</h3>
                  {worker.verified && (
                    <CheckCircle className="w-5 h-5 text-blue-500" aria-label="Verificado" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{worker.category}</p>
              </div>
              <div className={`${getAvailabilityColor(worker.availability)} px-3 py-1 rounded-full`}>
                <span className="text-xs text-white font-medium">
                  {getAvailabilityText(worker.availability)}
                </span>
              </div>
            </div>

            {/* Rating y ubicación */}
            <div className="flex items-center gap-4 mb-3 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{worker.rating}</span>
                <span className="text-gray-500">({worker.reviewCount} reseñas)</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{worker.location} · {worker.distance} km</span>
              </div>
            </div>

            {/* Especialidades */}
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {worker.specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Información adicional */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Responde en {worker.responseTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold text-[#1F1F1F]">${worker.hourlyRate}/hora</span>
              </div>
              <span>{worker.experience} años exp.</span>
            </div>

            {/* Botones de acción */}
            <div className="flex gap-2">
              <Button
                onClick={() => onViewProfile(worker.id)}
                variant="outline"
                className="flex-1 border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-white"
              >
                Ver perfil
              </Button>
              <Button
                onClick={() => onContact(worker.id)}
                disabled={worker.availability === 'unavailable'}
                className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-white disabled:bg-gray-300"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
