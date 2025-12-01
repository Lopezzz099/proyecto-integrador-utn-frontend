export function AboutSectionWorker() {
  return (
    <section className="py-20 px-4 bg-[#EEEEEE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1F1F1F]">¿Por qué ManosLibres?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#DBA668]">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Gana Más</h3>
            <p className="text-[#1F1F1F]">
              Accede a una red constante de clientes sin depender de referencias de boca en boca
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#DBA668]">
            <div className="text-3xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Construye Reputación</h3>
            <p className="text-[#1F1F1F]">
              Sistema de calificaciones que te ayuda a crecer y destacar entre competidores
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#DBA668]">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">Seguridad Garantizada</h3>
            <p className="text-[#1F1F1F]">
              Pagos seguros y sistema de resolución de conflictos para proteger tu trabajo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
