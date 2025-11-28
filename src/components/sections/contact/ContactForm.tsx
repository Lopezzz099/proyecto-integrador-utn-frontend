import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: 'duda' as 'duda' | 'mejora' | 'articulo' | 'otro',
    message: '',
    category: '',
    articleTitle: '',
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
        category: '',
        articleTitle: '',
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
        <h2 className="text-4xl font-bold mb-6 text-[#1F1F1F] text-center">Envíanos tu mensaje</h2>
        <p className="text-center text-gray-600 mb-8">
          ¿Tienes una noticia o información interesante? Ahora puedes enviar artículos para que sean publicados en nuestro blog.
        </p>

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
              <option value="articulo">Enviar Artículo para el Blog</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Campos especiales para artículos */}
          {formData.type === 'articulo' && (
            <>
              {/* Título del Artículo */}
              <div className="mb-6 p-4 bg-[#DBA668] bg-opacity-10 rounded-lg border border-[#DBA668]">
                <label htmlFor="articleTitle" className="block text-[#1F1F1F] font-bold mb-2">
                  Título del Artículo *
                </label>
                <input
                  type="text"
                  id="articleTitle"
                  name="articleTitle"
                  value={formData.articleTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668]"
                  placeholder="Ej: Cómo elegir el profesional perfecto"
                />
              </div>

              {/* Categoría del Artículo */}
              <div className="mb-6 p-4 bg-[#DBA668] bg-opacity-10 rounded-lg border border-[#DBA668]">
                <label htmlFor="category" className="block text-[#1F1F1F] font-bold mb-2">
                  Categoría del Artículo *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668]"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="consejos">Consejos</option>
                  <option value="tendencias">Tendencias</option>
                  <option value="historias">Historias de Éxito</option>
                  <option value="seguridad">Seguridad</option>
                  <option value="comunidad">Comunidad</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
            </>
          )}

          {/* Mensaje */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#1F1F1F] font-bold mb-2">
              {formData.type === 'articulo' ? 'Contenido del Artículo *' : 'Mensaje *'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#DBA668] resize-none"
              placeholder={formData.type === 'articulo' ? 'Escribe el contenido de tu artículo aquí...' : 'Cuéntanos más detalles...'}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-8 py-3 text-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : formData.type === 'articulo' ? 'Enviar Artículo' : 'Enviar Mensaje'}
            </Button>
            <Button
              type="button"
              onClick={() => navigate('/')}
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
