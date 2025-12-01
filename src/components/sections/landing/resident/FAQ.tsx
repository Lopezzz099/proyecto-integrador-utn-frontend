import { HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: '¿Es seguro usar ManosLibres?',
      answer:
        'Sí. Todos los profesionales pasan por un proceso de verificación y sus perfiles incluyen calificaciones de clientes anteriores. Además, cuentas con reseñas y comentarios de otros usuarios.',
    },
    {
      question: '¿Cuánto cuesta usar la plataforma?',
      answer:
        'Para residentes es completamente gratis. Para profesionales, cobramos una comisión pequeña por cada trabajo realizado a través de la plataforma.',
    },
    {
      question: '¿Cómo se hacen los pagos?',
      answer:
        'Los pagos se realizan de forma segura a través de la plataforma. Puedes pagar en línea y el dinero se retiene hasta que se complete el trabajo.',
    },
    {
      question: '¿Puedo cambiar mi rol después de registrarme?',
      answer:
        'Sí, puedes actualizar tu perfil en cualquier momento. Incluso puedes tener ambos roles si lo deseas.',
    },
    {
      question: '¿Qué hago si algo sale mal?',
      answer:
        'Contamos con un equipo de soporte disponible 24/7 y un sistema de resolución de conflictos para proteger tanto a residentes como a profesionales.',
    },
    {
      question: '¿Necesito ser especialista para ofrecer servicios?',
      answer:
        'No necesariamente. Puedes ofrecer servicios en cualquier área donde tengas experiencia. Lo importante es ser honesto sobre tu experiencia en tu perfil.',
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
