import { HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export function FAQWorker() {
  const faqItems: FAQItem[] = [
    {
      question: '¿Cuánto cuesta registrarse?',
      answer:
        'El registro es completamente gratis. Solo cobras una pequeña comisión cuando recibas pagos de clientes a través de la plataforma.',
    },
    {
      question: '¿Cómo recibo los pagos?',
      answer:
        'Los pagos se realizan de forma segura directamente a tu cuenta bancaria después de completar el trabajo. El dinero se retiene hasta la confirmación del cliente.',
    },
    {
      question: '¿Puedo establecer mis propios precios?',
      answer:
        'Sí, tienes total control sobre tus tarifas. Puedes cambiarlas en cualquier momento y también ofrecer descuentos especiales si lo deseas.',
    },
    {
      question: '¿Cómo funcionan las calificaciones?',
      answer:
        'Después de completar cada trabajo, el cliente puede dejarte una calificación. Estas calificaciones ayudan a otros clientes a conocer tu trabajo y construyen tu reputación.',
    },
    {
      question: '¿Puedo rechazar solicitudes de trabajo?',
      answer:
        'Completamente. Tienes libertad total para aceptar o rechazar cualquier solicitud. Solo gestiona tu calendario de disponibilidad según tus necesidades.',
    },
    {
      question: '¿Necesito ser especialista certificado?',
      answer:
        'No es obligatorio, pero es recomendado. Puedes ofrecer servicios con la experiencia que tengas. Lo importante es ser honesto sobre tu experiencia y habilidades.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-[#EEEEEE]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1F1F1F]">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group border-l-4 border-[#DBA668] bg-white p-6 rounded-lg shadow"
            >
              <summary className="cursor-pointer font-semibold text-lg text-[#1F1F1F] flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#DBA668]" />
                {item.question}
              </summary>
              <p className="mt-4 text-gray-700 pl-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
