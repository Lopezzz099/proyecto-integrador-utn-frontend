import { useState } from 'react'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { ProfileHeader } from '@/components/worker/ProfileHeader'
import { ProfileInfo } from '@/components/worker/ProfileInfo'
import { ProfileEdit } from '@/components/worker/ProfileEdit'
import { Button } from '@/components/ui/button'
import { Edit, Eye } from 'lucide-react'
import { workerProfile as initialProfile } from '@/data/workerProfileData'
import type { WorkerProfile } from '@/data/workerProfileData'

interface WorkerDashboardPageProps {
  onNavigate?: (page: 'landing' | 'login' | 'register' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') => void
}

export function WorkerDashboardPage({ onNavigate }: WorkerDashboardPageProps) {
  const [profile, setProfile] = useState<WorkerProfile>(initialProfile)
  const [isEditing, setIsEditing] = useState(false)

  const handleSaveProfile = (updatedProfile: WorkerProfile) => {
    setProfile(updatedProfile)
    setIsEditing(false)
    // Aquí podrías hacer una llamada a la API para guardar los cambios
    console.log('Perfil actualizado:', updatedProfile)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  return (
    <DashboardLayout onNavigate={onNavigate}>
      <div className="max-w-6xl mx-auto">
        {/* Header con botón de edición */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">
              {isEditing ? 'Editar Perfil' : 'Mi Perfil'}
            </h1>
            <p className="text-gray-600">
              {isEditing
                ? 'Actualiza tu información profesional'
                : 'Administra tu información y disponibilidad'}
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
          {isEditing && (
            <Button
              onClick={() => setIsEditing(false)}
              variant="outline"
              className="border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-white"
            >
              <Eye className="w-5 h-5 mr-2" />
              Vista Previa
            </Button>
          )}
        </div>

        {/* Contenido */}
        {isEditing ? (
          <ProfileEdit
            profile={profile}
            onSave={handleSaveProfile}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <ProfileHeader profile={profile} />
            <ProfileInfo profile={profile} />
          </>
        )}

        {/* Información adicional */}
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
