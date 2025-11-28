export function ContactIntro() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">¿Por qué contactarnos?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            En OferTu nos importa tu experiencia. Este formulario de contacto es un espacio dedicado a:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Dudas y Consultas</h3>
              <p className="text-gray-700">
                ¿No entiendes cómo funciona algo? ¿Tienes preguntas sobre cómo usar OferTu?
                Estamos aquí para ayudarte a resolver todas tus dudas.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Mejoras y Sugerencias</h3>
              <p className="text-gray-700">
                Tienes una idea brillante para mejorar OferTu? Nos encantaría escucharla.
                Tu feedback nos ayuda a crecer y ser mejor cada día.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">Artículos para el Blog</h3>
              <p className="text-gray-700">
                ¿Tienes una historia, consejo o noticia para compartir? Envíanos tu artículo
                y te ayudaremos a publicarlo en nuestro blog.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
