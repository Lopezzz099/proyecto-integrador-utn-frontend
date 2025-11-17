import { Button } from '@/components/ui/button'

interface HeroSectionWorkerProps {
  onNavigate?: (page: 'login' | 'register') => void
  onRoleChange?: (role: 'resident' | 'worker') => void
}

export function HeroSectionWorker({ onNavigate, onRoleChange }: HeroSectionWorkerProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1F1F1F] via-[#2d2d2d] to-[#DBA668] text-[#EEEEEE] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crece tu <span className="text-[#DBA668]">Negocio</span>
        </h2>
        <p className="text-xl md:text-2xl mb-4 text-gray-300">
          Conecta con clientes que necesitan tus servicios todos los días
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-400">
          Expande tu cartera de clientes sin comisiones ocultas. Gestiona tus proyectos de forma profesional
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-8 py-6 text-lg"
            onClick={() => onNavigate?.('login')}
          >
            Iniciar sesión como Trabajador
          </Button>
          <Button
            variant="outline"
            className="border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-[#1F1F1F] px-8 py-6 text-lg"
            onClick={() => onRoleChange?.('resident')}
          >
            Soy Residente
          </Button>
        </div>
      </div>
    </section>
  )
}
