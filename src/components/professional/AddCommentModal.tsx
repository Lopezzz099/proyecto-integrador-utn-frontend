import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Star, X } from 'lucide-react'

interface AddCommentModalProps {
  isOpen: boolean
  professionalName: string
  professionalId: number
  userId: number
  onClose: () => void
  onSubmit: (comentario: string, estrellas: number) => Promise<void>
}

export function AddCommentModal({ 
  isOpen, 
  professionalName, 
  onClose,
  onSubmit 
}: AddCommentModalProps) {
  const [comentario, setComentario] = useState('')
  const [estrellas, setEstrellas] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    setError(null)

    if (!comentario.trim()) {
      setError('Por favor escribe un comentario')
      return
    }

    if (estrellas === 0) {
      setError('Por favor selecciona una calificación')
      return
    }

    try {
      setIsSubmitting(true)
      await onSubmit(comentario, estrellas)
      // El modal se cerrará y la página se recargará desde el componente padre
    } catch (err: any) {
      setError(err.message || 'Error al enviar el comentario')
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setComentario('')
      setEstrellas(0)
      setError(null)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h3 className="text-xl font-bold text-[#1F1F1F]">
              Agregar comentario
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Califica a {professionalName}
            </p>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Calificación con estrellas */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Calificación
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setEstrellas(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  disabled={isSubmitting}
                  className="transition-transform hover:scale-110 disabled:cursor-not-allowed"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoveredStar || estrellas)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {estrellas > 0 && (
              <p className="text-sm text-gray-600 mt-1">
                {estrellas === 1 && 'Malo'}
                {estrellas === 2 && 'Regular'}
                {estrellas === 3 && 'Bueno'}
                {estrellas === 4 && 'Muy bueno'}
                {estrellas === 5 && 'Excelente'}
              </p>
            )}
          </div>

          {/* Comentario */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tu comentario
            </label>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Describe tu experiencia con este profesional..."
              rows={5}
              maxLength={500}
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none resize-none disabled:bg-gray-100"
            />
            <p className="text-xs text-gray-500 mt-1 text-right">
              {comentario.length}/500 caracteres
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              Tu comentario ayudará a otros usuarios a tomar mejores decisiones.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg">
          <Button
            onClick={handleClose}
            variant="outline"
            className="flex-1"
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !comentario.trim() || estrellas === 0}
            className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Enviando...
              </>
            ) : (
              'Publicar comentario'
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
