import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function PrivacyContent() {
  const navigate = useNavigate()
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">1. Introducción</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En OferTu, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
            Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu información 
            cuando utilizas nuestra plataforma, incluido nuestro sitio web y aplicación móvil.
          </p>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">2. Información que Recopilamos</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <strong className="text-[#1F1F1F] block mb-2">Información de Registro:</strong>
              <p>Nombre, correo electrónico, número de teléfono, dirección, información de pago y datos de verificación de identidad.</p>
            </div>
            <div>
              <strong className="text-[#1F1F1F] block mb-2">Información de Transacciones:</strong>
              <p>Detalles sobre servicios solicitados, fechas, montos, historial de pagos y comunicaciones relacionadas.</p>
            </div>
            <div>
              <strong className="text-[#1F1F1F] block mb-2">Información de Uso:</strong>
              <p>Registros de actividad, páginas visitadas, búsquedas realizadas, dispositivos utilizados e información técnica.</p>
            </div>
            <div>
              <strong className="text-[#1F1F1F] block mb-2">Información de Ubicación:</strong>
              <p>Tu ubicación geográfica aproximada para ayudarte a encontrar profesionales cerca de ti.</p>
            </div>
            <div>
              <strong className="text-[#1F1F1F] block mb-2">Cookies e Identificadores:</strong>
              <p>Utilizamos cookies y tecnologías similares para mejorar tu experiencia en la plataforma.</p>
            </div>
          </div>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">3. Cómo Usamos tu Información</h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Procesar transacciones y pagos</li>
            <li>Verificar tu identidad y prevenir fraudes</li>
            <li>Comunicarnos contigo sobre tu cuenta y servicios</li>
            <li>Enviar actualizaciones, promociones y noticias (si lo autorizas)</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Analizar y mejorar la experiencia del usuario</li>
            <li>Resolver disputas y brindar soporte al cliente</li>
          </ul>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">4. Compartición de Datos</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            No vendemos tu información personal a terceros. Solo compartimos tus datos en los siguientes casos:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Con otros usuarios de la plataforma según sea necesario para facilitar servicios</li>
            <li>Con proveedores de servicios de confianza (procesadores de pago, proveedores de hosting)</li>
            <li>Cuando la ley lo requiere o es necesario para proteger derechos legales</li>
            <li>En caso de fusión, adquisición o venta de activos (con previo aviso)</li>
          </ul>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">5. Seguridad de Datos</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tus datos:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Encriptación SSL/TLS en todas las conexiones</li>
            <li>Almacenamiento seguro con acceso restringido</li>
            <li>Auditorías de seguridad regulares</li>
            <li>Protocolos de autenticación robustos</li>
            <li>Monitoreo continuo de actividad sospechosa</li>
          </ul>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">6. Tus Derechos</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Tienes derecho a:
          </p>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Acceder a tus datos personales</li>
            <li>Corregir información inexacta</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerme al uso de tus datos</li>
            <li>Solicitar una copia de tus datos en formato legible</li>
            <li>Retirar tu consentimiento en cualquier momento</li>
          </ul>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">7. Período de Retención</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Retenemos tus datos personales solo mientras sea necesario para proporcionar nuestros servicios 
            y cumplir con obligaciones legales. Puedes solicitar la eliminación de tu cuenta en cualquier momento, 
            aunque algunos datos pueden retenerse si es requerido por ley.
          </p>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">8. Enlaces a Terceros</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nuestra plataforma puede contener enlaces a sitios web de terceros. No somos responsables 
            de sus prácticas de privacidad. Te recomendamos leer sus políticas de privacidad.
          </p>
        </div>

        {}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668]">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">9. Contacto</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, 
            por favor contacta con nosotros a través de nuestra página de contacto.
          </p>
          <Button
            onClick={() => navigate('/contact')}
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold px-8 py-3 text-lg"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}
