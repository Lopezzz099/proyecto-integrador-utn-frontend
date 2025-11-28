import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function TermsContent() {
  const navigate = useNavigate()
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">1. Introducción</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bienvenido a OferTu. Estos Términos de Servicio ("Términos") regulan el acceso y uso de la plataforma OferTu, 
            incluido nuestro sitio web, aplicación móvil y todos los servicios relacionados. Al acceder o utilizar OferTu, 
            aceptas estar vinculado por estos Términos. Si no estás de acuerdo con alguna parte, te pedimos que no uses nuestros servicios.
          </p>
        </div>

        {/* Definitions */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">2. Definiciones</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <strong className="text-[#1F1F1F]">Usuario:</strong> Cualquier persona que acceda o utilice la plataforma OferTu.
            </li>
            <li>
              <strong className="text-[#1F1F1F]">Residente:</strong> Usuario que busca servicios profesionales a través de la plataforma.
            </li>
            <li>
              <strong className="text-[#1F1F1F]">Profesional:</strong> Usuario que ofrece servicios en la plataforma.
            </li>
            <li>
              <strong className="text-[#1F1F1F]">Servicio:</strong> Las transacciones y trabajos realizados entre Residentes y Profesionales.
            </li>
          </ul>
        </div>

        {/* User Responsibilities */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">3. Responsabilidades del Usuario</h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Proporcionar información precisa y completa al registrarte.</li>
            <li>Mantener la confidencialidad de tu contraseña y cuenta.</li>
            <li>Ser responsable de todas las actividades bajo tu cuenta.</li>
            <li>No usar la plataforma para actividades ilegales o fraudulentas.</li>
            <li>Respetar los derechos y privacidad de otros usuarios.</li>
            <li>Cumplir con todas las leyes y regulaciones aplicables.</li>
          </ul>
        </div>

        {/* Services Description */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">4. Descripción de Servicios</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            OferTu es una plataforma que conecta Residentes con Profesionales. No somos un empleador ni empleado de ninguno de nuestros usuarios. 
            Actuamos como intermediario para facilitar transacciones entre partes independientes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            No garantizamos la calidad, seguridad o legalidad de ningún servicio ofrecido en la plataforma. Cada Usuario es responsable de 
            evaluar y aceptar los riesgos asociados con el uso de nuestros servicios.
          </p>
        </div>

        {/* Payment Terms */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">5. Términos de Pago</h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Los precios y tarifas están disponibles en el sitio web y pueden cambiar sin previo aviso.</li>
            <li>Los pagos deben realizarse a través de los métodos especificados en la plataforma.</li>
            <li>OferTu no es responsable por disputas de pago entre Residentes y Profesionales.</li>
            <li>Se aplican comisiones según la política de comisiones de OferTu.</li>
          </ul>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">6. Limitación de Responsabilidad</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, OFERTA NO SERÁ RESPONSABLE POR NINGÚN DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, 
            CONSECUENTE O PUNITIVO, INCLUYENDO PERO NO LIMITADO A PÉRDIDA DE GANANCIAS, DATOS O USO, INCLUSO SI HA SIDO ADVERTIDO DE 
            LA POSIBILIDAD DE TALES DAÑOS.
          </p>
        </div>

        {/* Modification */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668] mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">7. Modificación de Términos</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            OferTu se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigor inmediatamente 
            después de su publicación en la plataforma. Tu uso continuado de OferTu constituye la aceptación de los Términos modificados.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#DBA668]">
          <h2 className="text-3xl font-bold mb-4 text-[#1F1F1F]">8. Contacto</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Si tienes preguntas sobre estos Términos de Servicio, por favor contacta con nosotros a través de nuestra página de contacto.
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
