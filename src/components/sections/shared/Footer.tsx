interface FooterProps {
  onNavigate?: (page: 'login' | 'register' | 'about' | 'contact' | 'landing' | 'terms' | 'privacy') => void
  onRoleChange?: (role: 'resident' | 'worker') => void
}

export function Footer({ onNavigate, onRoleChange }: FooterProps) {
  return (
    <footer className="bg-[#1F1F1F] text-[#EEEEEE] py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-bold text-lg mb-4 text-[#DBA668]">OferTu</h4>
          <p className="text-sm text-gray-400">
            Conectando residentes con profesionales en tu zona
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Compañía</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <button onClick={() => onNavigate?.('about')} className="hover:text-[#DBA668] cursor-pointer">
                Sobre nosotros
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-[#DBA668]">
                Blog
              </a>
            </li>
            <li>
              <button onClick={() => onNavigate?.('contact')} className="hover:text-[#DBA668] cursor-pointer">
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
                  onNavigate?.('landing')
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
                  onNavigate?.('landing')
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
                onClick={() => onNavigate?.('terms')}
                className="hover:text-[#DBA668] cursor-pointer"
              >
                Términos de servicio
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate?.('privacy')}
                className="hover:text-[#DBA668] cursor-pointer"
              >
                Privacidad
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 OferTu. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
