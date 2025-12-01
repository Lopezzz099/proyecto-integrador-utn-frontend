export function ContactInfo() {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl mb-3">⏱️</div>
        <h3 className="font-bold text-[#1F1F1F] mb-2">Respuesta Rápida</h3>
        <p className="text-gray-700 text-sm">
          Respondemos tus mensajes en menos de 48 horas
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl mb-3">🤝</div>
        <h3 className="font-bold text-[#1F1F1F] mb-2">Te Escuchamos</h3>
        <p className="text-gray-700 text-sm">
          Cada sugerencia es valiosa para mejorar ManosLibres
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-[#1F1F1F] mb-2">Transparencia</h3>
        <p className="text-gray-700 text-sm">
          Somos transparentes con tu información y feedback
        </p>
      </div>
    </div>
  )
}
