export function AboutValues() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#1F1F1F] text-center">Nuestros Valores</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Confianza</h3>
            <p className="text-gray-700">
              La confianza es el pilar fundamental de OferTu. Nos comprometemos a verificar y validar
              cada profesional en nuestra plataforma.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Calidad</h3>
            <p className="text-gray-700">
              Buscamos mantener los más altos estándares en cada interacción, cada servicio y cada
              experiencia de usuario.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-5xl mb-4">🏘️</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Comunidad</h3>
            <p className="text-gray-700">
              Creemos en el poder de las comunidades fuertes donde residentes y profesionales trabajan
              juntos con respeto mutuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
