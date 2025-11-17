import { Button } from '@/components/ui/button'

interface AboutCTAProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact' | 'terms' | 'privacy') => void
}

export function AboutCTA({ onNavigate }: AboutCTAProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#DBA668] to-[#1F1F1F] text-[#EEEEEE]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para ser parte de la solución?</h2>
        <p className="text-xl mb-12">
          Únete a nuestra comunidad de residentes y profesionales comprometidos con la confianza y la calidad
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onNavigate?.('register')}
            className="bg-[#EEEEEE] hover:bg-gray-200 text-[#1F1F1F] font-bold px-8 py-6 text-lg"
          >
            Registrarse Ahora
          </Button>
          <Button
            onClick={() => onNavigate?.('login')}
            className="bg-transparent hover:bg-[#EEEEEE] hover:text-[#1F1F1F] text-[#EEEEEE] font-bold px-8 py-6 text-lg border-2 border-[#EEEEEE]"
          >
            Iniciar Sesión
          </Button>
          <Button
            onClick={() => onNavigate?.('landing')}
            className="bg-transparent hover:bg-[#EEEEEE] hover:text-[#1F1F1F] text-[#EEEEEE] font-bold px-8 py-6 text-lg border-2 border-[#EEEEEE]"
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    </section>
  )
}
