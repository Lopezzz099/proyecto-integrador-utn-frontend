import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { ProfessionalHeader } from '@/components/worker/ProfessionalHeader'
import { ProfessionalInfo } from '@/components/worker/ProfessionalInfo'
import { AddCommentModal } from '@/components/professional/AddCommentModal'
import { Button } from '@/components/ui/button'
import { MessageSquare, ArrowLeft, Star, Plus } from 'lucide-react'
import { getProfessionalById } from '@/services/professionalService'
import { createComentario } from '@/services/comentarioService'
import { useAuth } from '@/context/AuthContext'
import type { User } from '@/services/types'

export function ProfessionalProfilePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [professional, setProfessional] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showCommentModal, setShowCommentModal] = useState(false)

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
    
    
    const phoneNumber = professional.telefono.replace(/\D/g, '')
    
    // Mensaje predeterminado
    const message = `Hola ${professional.nombre}, te contacto desde OferTu. Me gustaría solicitar información sobre tus servicios.`
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank')
  }

  const handleAddComment = async (comentario: string, estrellas: number) => {
    if (!user?.id || !professional?.profesional?.id) {
      throw new Error('Usuario o profesional no válido')
    }

    try {
      await createComentario({
        comentario,
        estrellas,
        profesional_id: professional.profesional.id,
        usuario_id: user.id,
      })

      
      setShowCommentModal(false)
      window.location.reload()
    } catch (error: any) {
      throw error
    }
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
        {}
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

        {}
        <ProfessionalHeader professional={professional} />
        <ProfessionalInfo professional={professional} />

        {}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-[#1F1F1F] flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              Comentarios de clientes
            </h3>
            {user && user.id !== professional.id && (
              <Button
                onClick={() => setShowCommentModal(true)}
                className="bg-[#DBA668] hover:bg-[#c89555] text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Agregar comentario
              </Button>
            )}
          </div>

          {professional.profesional?.comentarios && professional.profesional.comentarios.length > 0 ? (
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
                  </div>
                  <p className="text-gray-700">{comentario.comentario}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                Aún no hay comentarios. ¡Sé el primero en comentar!
              </p>
            </div>
          )}
        </div>
      </div>

      {}
      {user && professional && (
        <AddCommentModal
          isOpen={showCommentModal}
          professionalName={professional.nombre}
          professionalId={professional.id}
          userId={user.id}
          onClose={() => setShowCommentModal(false)}
          onSubmit={handleAddComment}
        />
      )}
    </DashboardLayout>
  )
}
