import { Star, MapPin, Clock, CheckCircle, Briefcase } from 'lucide-react'
import type { WorkerProfile } from '@/data/workerProfileData'

interface ProfileHeaderProps {
  profile: WorkerProfile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const getAvailabilityColor = (availability: WorkerProfile['availability']) => {
    switch (availability) {
      case 'available':
        return 'bg-green-500'
      case 'busy':
        return 'bg-yellow-500'
      case 'unavailable':
        return 'bg-red-500'
    }
  }

  const getAvailabilityText = (availability: WorkerProfile['availability']) => {
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
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Imagen de perfil */}
        <div className="flex-shrink-0">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#DBA668]"
          />
        </div>

        {/* Información principal */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold text-[#1F1F1F]">{profile.name}</h1>
                {profile.verified && (
                  <CheckCircle className="w-6 h-6 text-blue-500" aria-label="Verificado" />
                )}
              </div>
              <p className="text-lg text-gray-600">{profile.category}</p>
            </div>
            <div className={`${getAvailabilityColor(profile.availability)} px-4 py-2 rounded-full`}>
              <span className="text-sm text-white font-medium">
                {getAvailabilityText(profile.availability)}
              </span>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-500">Calificación</p>
                <p className="font-bold text-[#1F1F1F]">{profile.rating} ({profile.reviewCount})</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Trabajos</p>
                <p className="font-bold text-[#1F1F1F]">{profile.completedJobs}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Respuesta</p>
                <p className="font-bold text-[#1F1F1F]">{profile.responseTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="font-bold text-[#1F1F1F]">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Especialidades */}
          <div className="flex flex-wrap gap-2">
            {profile.specialties.map((specialty, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#DBA668] bg-opacity-10 text-[#DBA668] text-sm rounded-full font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
