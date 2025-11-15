import { Button } from '@/components/ui/button'

interface HeaderProps {
  currentRole: 'resident' | 'worker'
  onRoleChange: (role: 'resident' | 'worker') => void
  onNavigate?: (page: 'login' | 'register') => void
}

export function Header({ currentRole, onRoleChange, onNavigate }: HeaderProps) {
  return (
    <header className="bg-[#1F1F1F] text-[#EEEEEE] sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">OferTu</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#roles" className="hover:text-[#DBA668] transition">
              Roles
            </a>
            <a href="#faq" className="hover:text-[#DBA668] transition">
              Preguntas Frecuentes
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Botón para cambiar de vista */}
          <Button
            onClick={() => onRoleChange(currentRole === 'resident' ? 'worker' : 'resident')}
            variant="outline"
            className="hidden sm:block border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-[#1F1F1F]"
          >
            {currentRole === 'resident' ? 'Soy Trabajador' : 'Soy Residente'}
          </Button>
          
          {/* Botones de autenticación */}
          <Button
            variant="ghost"
            className="text-[#EEEEEE] hover:text-[#DBA668]"
            onClick={() => onNavigate?.('login')}
          >
            Iniciar sesión
          </Button>
          <Button
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold"
            onClick={() => onNavigate?.('register')}
          >
            Registrarse
          </Button>
        </div>
      </nav>
    </header>
  )
}
