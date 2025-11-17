import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface ContactFormProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact') => void
}

export function ContactForm({ onNavigate }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'duda' as 'duda' | 'mejora' | 'otro',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    setTimeout(() => {
      console.log('Formulario enviado:', formData)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        type: 'duda',
        message: '',
      })

      // Limpiar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)

      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#1F1F1F] text-center">Envíanos tu mensaje</h2>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="font-bold">¡Gracias por contactarnos!</p>
            <p>Tu mensaje ha sido recibido. Nos pondremos en contacto pronto.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          {/* Nombre */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#1F1F1F] font-bold mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668]"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#1F1F1F] font-bold mb-2">
              Correo Electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668]"
              placeholder="tu@email.com"
            />
          </div>

          {/* Asunto */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-[#1F1F1F] font-bold mb-2">
              Asunto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668]"
              placeholder="Breve descripción del tema"
            />
          </div>

          {/* Tipo de Consulta */}
          <div className="mb-6">
            <label htmlFor="type" className="block text-[#1F1F1F] font-bold mb-2">
              Tipo de Consulta *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668]"
            >
              <option value="duda">Duda / Pregunta</option>
              <option value="mejora">Sugerencia de Mejora</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#1F1F1F] font-bold mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668] resize-none"
              placeholder="Cuéntanos más detalles..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-8 py-3 text-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
            <Button
              type="button"
              onClick={() => onNavigate?.('landing')}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-[#1F1F1F] font-bold px-8 py-3 text-lg"
            >
              Volver
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
