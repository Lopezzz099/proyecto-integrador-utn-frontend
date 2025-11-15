import { Home, Briefcase } from 'lucide-react'
import { RoleCard } from './RoleCard'

export function RolesSection() {
  const residentFeatures = [
    'Encontrar plomeros, electricistas y otros profesionales',
    'Solicitar servicios de forma rápida y segura',
    'Ver perfiles y calificaciones antes de contratar',
    'Comparar precios y servicios disponibles',
  ]

  const residentProblems = [
    {
      problem: 'No encuentras un electricista de confianza',
      solution: 'Perfil de profesionales certificados',
    },
    {
      problem: 'Dudas sobre el precio justo',
      solution: 'Comparar presupuestos en minutos',
    },
    {
      problem: 'Riesgo de ser estafado',
      solution: 'Sistema de calificaciones y comentarios',
    },
    {
      problem: 'Desorden y falta de seguimiento',
      solution: 'Historial de trabajos realizados',
    },
  ]

  const professionalFeatures = [
    'Crear tu perfil profesional y mostrar tu experiencia',
    'Recibir solicitudes de clientes interesados',
    'Gestionar tus precios y disponibilidad',
    'Construir una reputación y obtener calificaciones',
  ]

  const professionalProblems = [
    {
      problem: 'Pocos clientes nuevos',
      solution: 'Red de miles de potenciales clientes',
    },
    {
      problem: 'Desconocimiento de tu trabajo',
      solution: 'Portafolio y certificaciones verificadas',
    },
    {
      problem: 'Falta de estabilidad laboral',
      solution: 'Flujo constante de solicitudes',
    },
    {
      problem: 'Gestión manual de clientes',
      solution: 'Plataforma centralizada para tus trabajos',
    },
  ]

  return (
    <section id="roles" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1F1F1F]">Elige tu Rol</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <RoleCard
            icon={Home}
            title="Soy Residente"
            features={residentFeatures}
            description="Amplía tu cartera de clientes sin depender de referencias de boca en boca. Accede a un mercado constante de personas buscando tus servicios."
            problems={residentProblems}
            buttonText="Registrarse como Residente"
          />
          <RoleCard
            icon={Briefcase}
            title="Soy Profesional"
            features={professionalFeatures}
            description="Amplía tu cartera de clientes sin depender de referencias de boca en boca. Accede a un mercado constante de personas buscando tus servicios."
            problems={professionalProblems}
            buttonText="Registrarse como Profesional"
          />
        </div>
      </div>
    </section>
  )
}
