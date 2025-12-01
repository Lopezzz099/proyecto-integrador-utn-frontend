import { useNavigate } from 'react-router-dom'

interface FooterProps {
  onRoleChange?: (role: 'resident' | 'worker') => void
}

export function Footer({ onRoleChange }: FooterProps) {
  const navigate = useNavigate()

  return (
    <footer className="bg-[#1F1F1F] text-[#EEEEEE] py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#DBA668]">ManosLibres</h4>
          <p className="text-sm text-gray-400">
            Conectando residentes con profesionales en tu localidad
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Compañía</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <button onClick={() => navigate('/about')} className="hover:text-[#DBA668] cursor-pointer">
                Sobre nosotros
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/blog')} className="hover:text-[#DBA668] cursor-pointer">
                Blog
              </button>
            </li>
            <li>
              <button onClick={() => navigate('/contact')} className="hover:text-[#DBA668] cursor-pointer">
                Contacto
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Usuarios</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <button
                onClick={() => {
                  onRoleChange?.('resident')
                  navigate('/')
                }}
                className="hover:text-[#DBA668] cursor-pointer"
              >
                Para Residentes
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onRoleChange?.('worker')
                  navigate('/')
                }}
                className="hover:text-[#DBA668] cursor-pointer"
              >
                Para Profesionales
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <button
                onClick={() => navigate('/terms')}
                className="hover:text-[#DBA668] cursor-pointer"
              >
                Términos de servicio
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/privacy')}
                className="hover:text-[#DBA668] cursor-pointer"
              >
                Privacidad
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 ManosLibres. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
