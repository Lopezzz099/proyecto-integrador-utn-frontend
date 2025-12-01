export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1F1F1F]">¿Qué es ManosLibres?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#DBA668]">
            <div className="text-3xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Para Residentes</h3>
            <p className="text-[#1F1F1F]">
              Encuentra profesionales confiables cerca de ti para resolver tus necesidades del día a día
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#DBA668]">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Para Profesionales</h3>
            <p className="text-[#1F1F1F]">
              Ofrece tus servicios y conecta con clientes que buscan tu experiencia
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#DBA668]">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Confianza Garantizada</h3>
            <p className="text-[#1F1F1F]">
              Perfiles verificados y calificaciones para una experiencia segura y confiable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
