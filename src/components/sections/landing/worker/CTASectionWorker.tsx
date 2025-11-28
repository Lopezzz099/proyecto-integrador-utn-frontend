import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function CTASectionWorker() {
  const navigate = useNavigate()

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#DBA668] to-[#1F1F1F] text-[#EEEEEE]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para empezar a ganar?</h2>
        <p className="text-xl mb-12">Únete a miles de trabajadores que ya están ganando dinero a través de OferTu</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/register')} className="bg-[#EEEEEE] hover:bg-gray-200 text-[#1F1F1F] font-bold px-8 py-6 text-lg">
            Registrarse Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
