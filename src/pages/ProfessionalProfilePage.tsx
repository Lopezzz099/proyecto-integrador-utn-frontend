import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { ProfessionalHeader } from '@/components/worker/ProfessionalHeader'
import { ProfessionalInfo } from '@/components/worker/ProfessionalInfo'
import { Button } from '@/components/ui/button'
import { MessageSquare, ArrowLeft, Star } from 'lucide-react'
import { getProfessionalById } from '@/services/professionalService'
import type { User } from '@/services/types'

export function ProfessionalProfilePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [professional, setProfessional] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProfessional = async () => {
      if (!id) {
        setError('ID de profesional no válido')
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const data = await getProfessionalById(parseInt(id))
        setProfessional(data)
      } catch (err: any) {
        console.error('Error cargando profesional:', err)
        setError(err.message || 'Error al cargar el perfil del profesional')
      } finally {
        setIsLoading(false)
      }
    }

    loadProfessional()
  }, [id])

  const handleWhatsAppContact = () => {
    if (!professional?.telefono) {
      alert('El profesional no tiene un número de teléfono registrado')
      return
    }
    
    // Limpiar el número de teléfono (remover espacios, guiones, etc.)
    const phoneNumber = professional.telefono.replace(/\D/g, '')
    
    // Mensaje predeterminado
    const message = `Hola ${professional.nombre}, te contacto desde OferTu. Me gustaría solicitar información sobre tus servicios.`
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank')
  }

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DBA668] mx-auto"></div>
          <p className="text-gray-600 mt-4">Cargando perfil...</p>
        </div>
      </DashboardLayout>
    )
  }

  if (error || !professional) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Error</h3>
          <p className="text-gray-600 mb-4">{error || 'Profesional no encontrado'}</p>
          <Button
            onClick={() => navigate('/dashboard')}
            className="bg-[#DBA668] hover:bg-[#c89555] text-white"
          >
            Volver al dashboard
          </Button>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header con botones de acción */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => navigate('/dashboard')}
            variant="ghost"
            className="text-[#1F1F1F] hover:text-[#DBA668]"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Button>
          <Button
            onClick={handleWhatsAppContact}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Contactar por WhatsApp
          </Button>
        </div>

        {/* Perfil del profesional */}
        <ProfessionalHeader professional={professional} />
        <ProfessionalInfo professional={professional} />

        {/* Comentarios/Reseñas */}
        {professional.profesional?.comentarios && professional.profesional.comentarios.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-[#1F1F1F] mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              Reseñas de clientes
            </h3>
            <div className="space-y-4">
              {professional.profesional.comentarios.map((comentario) => (
                <div key={comentario.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < comentario.estrellas
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {comentario.fecha ? new Date(comentario.fecha).toLocaleDateString() : 'Sin fecha'}
                    </span>
                  </div>
                  <p className="text-gray-700">{comentario.comentario}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
