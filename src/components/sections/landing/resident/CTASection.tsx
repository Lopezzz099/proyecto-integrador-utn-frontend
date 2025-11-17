import { Button } from '@/components/ui/button'

interface CTASectionProps {
  onNavigate?: (page: 'login' | 'register' | 'about' | 'landing' | 'contact' | 'terms' | 'privacy') => void
}

export function CTASection({ onNavigate }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#DBA668] to-[#1F1F1F] text-[#EEEEEE]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
        <p className="text-xl mb-12">Únete a miles de residentes y profesionales que ya usan OferTu</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => onNavigate?.('register')} className="bg-[#EEEEEE] hover:bg-gray-200 text-[#1F1F1F] font-bold px-8 py-6 text-lg">
            Registrarse Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
