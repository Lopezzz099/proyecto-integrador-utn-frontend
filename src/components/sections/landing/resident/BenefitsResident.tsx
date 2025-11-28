import { Check } from 'lucide-react'

export function BenefitsResident() {
  const benefits = [
    {
      title: 'Encuentra Profesionales Confiables',
      description: 'Accede a un directorio verificado de trabajadores en tu localidad',
      items: [
        'Perfiles profesionales con certificaciones',
        'Historial completo de trabajos realizados',
        'Calificaciones de clientes anteriores',
        'Disponibilidad y ubicación en tiempo real',
      ],
    },
    {
      title: 'Presupuestos sin Compromiso',
      description: 'Compara precios y elige lo mejor para tu bolsillo',
      items: [
        'Múltiples presupuestos para elegir',
        'Transparencia total en precios',
        'Sin costos ocultos o sorpresas',
        'Negocia directamente con profesionales',
      ],
    },
    {
      title: 'Seguridad Garantizada',
      description: 'Tus pagos y datos están protegidos',
      items: [
        'Pagos seguros en la plataforma',
        'Sistema de resolución de conflictos',
        'Profesionales verificados y asegurados',
        'Soporte 24/7 disponible siempre',
      ],
    },
    {
      title: 'Ahorra Tiempo y Dinero',
      description: 'Soluciona problemas rápidamente sin buscar referencias',
      items: [
        'Encuentra profesionales en minutos',
        'Historial de todos tus trabajos',
        'Descuentos especiales para clientes frecuentes',
        'Notificaciones cuando hay disponibilidad',
      ],
    },
  ]

  return (
    <section id="benefits" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1F1F1F]">
          Beneficios para Residentes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#EEEEEE] to-white border-2 border-[#DBA668] rounded-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">{benefit.title}</h3>
              <p className="text-gray-700 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#DBA668] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1F1F1F]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Problemas que resuelve */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1F1F1F]">
            Problemas que Resolvemos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="font-semibold text-red-700 mb-2">❌ El problema:</p>
              <p className="text-gray-700 mb-4">No encuentras un electricista de confianza y no sabes a quién llamar</p>
              <p className="font-semibold text-green-700">✅ Nuestra solución:</p>
              <p className="text-gray-700">Directorio completo de electricistas verificados con calificaciones reales</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="font-semibold text-red-700 mb-2">❌ El problema:</p>
              <p className="text-gray-700 mb-4">Dudas sobre si el precio es justo o te están engañando</p>
              <p className="font-semibold text-green-700">✅ Nuestra solución:</p>
              <p className="text-gray-700">Compara múltiples presupuestos y elige el mejor precio</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="font-semibold text-red-700 mb-2">❌ El problema:</p>
              <p className="text-gray-700 mb-4">Riesgo de ser estafado o trabajos mal hechos</p>
              <p className="font-semibold text-green-700">✅ Nuestra solución:</p>
              <p className="text-gray-700">Sistema de calificaciones, comentarios y resolución de conflictos</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="font-semibold text-red-700 mb-2">❌ El problema:</p>
              <p className="text-gray-700 mb-4">Desorden con contactos y sin historial de trabajos pasados</p>
              <p className="font-semibold text-green-700">✅ Nuestra solución:</p>
              <p className="text-gray-700">Historial completo de todos tus trabajos en un solo lugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
