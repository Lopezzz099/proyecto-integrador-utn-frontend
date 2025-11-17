import { Check } from 'lucide-react'

export function FeaturesWorker() {
  const features = [
    {
      title: 'Perfil Profesional',
      description: 'Crea un perfil que destaque tu experiencia y certificaciones',
      benefits: [
        'Portafolio de trabajos realizados',
        'Certificaciones verificadas',
        'Galería de fotos',
        'Información de contacto verificada',
      ],
    },
    {
      title: 'Gestión de Proyectos',
      description: 'Controla todas tus solicitudes y proyectos desde un solo lugar',
      benefits: [
        'Panel de solicitudes de clientes',
        'Calendario de disponibilidad',
        'Gestión de precios',
        'Seguimiento de trabajos en progreso',
      ],
    },
    {
      title: 'Crece tu Negocio',
      description: 'Herramientas para expandir tu cartera de clientes',
      benefits: [
        'Acceso a miles de clientes potenciales',
        'Sistema de recomendaciones',
        'Historial de calificaciones',
        'Soporte 24/7',
      ],
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1F1F1F]">Herramientas para tu Éxito</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#EEEEEE] to-white border-2 border-[#DBA668] rounded-lg p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">{feature.title}</h3>
              <p className="text-gray-700 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#DBA668] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1F1F1F]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
