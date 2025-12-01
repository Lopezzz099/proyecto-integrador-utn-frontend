import { Mail, Phone, MapPin, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { User } from '@/services/types'

interface ProfessionalInfoProps {
  professional: User
}

export function ProfessionalInfo({ professional }: ProfessionalInfoProps) {
  const prof = professional.profesional

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Información de Contacto</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-[#1F1F1F]">{professional.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#DBA668]" />
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="text-[#1F1F1F]">{professional.telefono}</p>
              </div>
            </div>
            {prof?.ubicaciones && prof.ubicaciones.length > 0 && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#DBA668] mt-1" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">Zonas de trabajo</p>
                  <div className="space-y-1">
                    {prof.ubicaciones.map((ubicacion, index) => (
                      <p key={index} className="text-[#1F1F1F]">
                        {ubicacion.localidad}, {ubicacion.municipio}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Información Profesional</h3>
          <div className="space-y-3">
            {prof?.oficios && prof.oficios.length > 0 && (
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#DBA668] mt-1" />
                <div>
                  <p className="text-sm text-gray-500 mb-2">Oficios</p>
                  <div className="flex flex-wrap gap-2">
                    {prof.oficios.map((oficio) => (
                      <span
                        key={oficio.id}
                        className="px-3 py-1 bg-[#DBA668]/10 text-[#DBA668] text-sm rounded-md font-medium"
                      >
                        {oficio.nombre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {prof?.disponibilidad && (
              <div className="pt-3 border-t">
                <p className="text-sm text-gray-500">Disponibilidad</p>
                <p className="text-[#1F1F1F] font-medium">{prof.disponibilidad}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {}
      {prof?.descripcion && (
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-4">Sobre el profesional</h3>
            <p className="text-gray-700 leading-relaxed">{prof.descripcion}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
