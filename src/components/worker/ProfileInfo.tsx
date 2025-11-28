import { Mail, Phone, MapPin, Clock, DollarSign, Award, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { WorkerProfile } from '@/data/workerProfileData'

interface ProfileInfoProps {
  profile: WorkerProfile
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Información de contacto */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Información de Contacto</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-[#1F1F1F]">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="text-[#1F1F1F]">{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Dirección</p>
                <p className="text-[#1F1F1F]">{profile.address}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información profesional */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Información Profesional</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Tarifa por hora</p>
                <p className="text-[#1F1F1F] font-semibold">${profile.hourlyRate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Horario de trabajo</p>
                <p className="text-[#1F1F1F]">{profile.workingHours.start} - {profile.workingHours.end}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Experiencia</p>
                <p className="text-[#1F1F1F]">{profile.experience} años</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Descripción */}
      <Card className="md:col-span-2">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Sobre mí</h3>
          <p className="text-gray-700 leading-relaxed">{profile.description}</p>
        </CardContent>
      </Card>

      {/* Certificaciones */}
      {profile.certifications.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#DBA668]" />
              Certificaciones
            </h3>
            <ul className="space-y-2">
              {profile.certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#DBA668] rounded-full"></div>
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Idiomas */}
      {profile.languages.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#DBA668]" />
              Idiomas
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
