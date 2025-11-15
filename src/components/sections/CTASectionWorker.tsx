import { Button } from '@/components/ui/button'

export function CTASectionWorker() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#DBA668] to-[#1F1F1F] text-[#EEEEEE]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para empezar a ganar?</h2>
        <p className="text-xl mb-12">Únete a miles de trabajadores que ya están ganando dinero a través de OferTu</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#EEEEEE] hover:bg-gray-200 text-[#1F1F1F] font-bold px-8 py-6 text-lg">
            Registrarse Ahora
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#EEEEEE] text-[#1F1F1F] bg-[#EEEEEE] hover:bg-gray-300 hover:text-[#1F1F1F] px-8 py-6 text-lg font-bold"
          >
            Saber más
          </Button>
        </div>
      </div>
    </section>
  )
}
