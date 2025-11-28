import { Button } from '@/components/ui/button'

interface BlogCTAProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') => void
}

export function BlogCTA({ onNavigate }: BlogCTAProps) {
  return (
    <section className="bg-gradient-to-r from-[#1F1F1F] to-[#DBA668] text-[#EEEEEE] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para empezar?</h2>
        <p className="text-xl mb-8 opacity-90">
          Únete a nuestra comunidad de profesionales y residentes. Encuentra el servicio perfecto o comparte tu experiencia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => onNavigate?.('register')}
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-8 py-3 text-lg"
          >
            Registrarse
          </Button>
          <Button
            onClick={() => onNavigate?.('login')}
            className="bg-transparent border-2 border-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#1F1F1F] text-[#EEEEEE] font-bold px-8 py-3 text-lg transition-all"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </section>
  )
}
