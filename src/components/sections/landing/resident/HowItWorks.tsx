export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#1F1F1F] text-[#EEEEEE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Cómo Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#DBA668] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#1F1F1F]">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Regístrate</h3>
            <p>Crea tu perfil indicando tu rol y preferencias</p>
          </div>
          <div className="text-center">
            <div className="bg-[#DBA668] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#1F1F1F]">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Conecta</h3>
            <p>Busca profesionales o recibe solicitudes de clientes</p>
          </div>
          <div className="text-center">
            <div className="bg-[#DBA668] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#1F1F1F]">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Concreta</h3>
            <p>Acuerda términos y realiza el trabajo de forma segura</p>
          </div>
        </div>
      </div>
    </section>
  )
}
