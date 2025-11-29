import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare, X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  professionalName: string
  professionalId: string
  onClose: () => void
}

export function ContactModal({ 
  isOpen, 
  professionalName, 
  professionalId, 
  onClose 
}: ContactModalProps) {
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSendMessage = async () => {
    if (!message.trim()) return

    setIsSending(true)
    
    // Aquí implementarías el envío del mensaje al backend
    console.log('Enviando mensaje:', {
      to: professionalId,
      message: message.trim()
    })

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('¡Mensaje enviado! El profesional recibirá tu mensaje y te contactará pronto.')
    setMessage('')
    setIsSending(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#DBA668]" />
            <h3 className="text-xl font-bold text-[#1F1F1F]">
              Contactar profesional
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            Envía un mensaje a <span className="font-semibold text-[#1F1F1F]">{professionalName}</span>
          </p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tu mensaje
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe el servicio que necesitas, cuándo lo necesitas, ubicación, etc."
              rows={6}
              maxLength={500}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none resize-none"
            />
            <p className="text-xs text-gray-500 mt-1 text-right">
              {message.length}/500 caracteres
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-blue-800">
              <strong>💡 Consejo:</strong> Sé específico sobre el trabajo que necesitas para recibir una respuesta más precisa.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1"
            disabled={isSending}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSendMessage}
            disabled={!message.trim() || isSending}
            className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <MessageSquare className="w-4 h-4 mr-2" />
                Enviar mensaje
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
