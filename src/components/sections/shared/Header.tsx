import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  currentRole: 'resident' | 'worker'
  onRoleChange?: (role: 'resident' | 'worker') => void
}

export function Header({ currentRole, onRoleChange }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="bg-[#1F1F1F] text-[#EEEEEE] sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-bold hover:text-[#DBA668] transition-colors cursor-pointer"
          >
            ManosLibres
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          {}
          <Button
            onClick={() => onRoleChange?.(currentRole === 'resident' ? 'worker' : 'resident')}
            variant="outline"
            className="hidden sm:block border-[#DBA668] text-[#DBA668] hover:bg-[#DBA668] hover:text-[#1F1F1F]"
          >
            {currentRole === 'resident' ? 'Soy Trabajador' : 'Soy Residente'}
          </Button>
          
          {}
          <Button
            variant="ghost"
            className="text-[#EEEEEE] hover:text-[#DBA668]"
            onClick={() => navigate('/login')}
          >
            Iniciar sesión
          </Button>
          <Button
            className="bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold"
            onClick={() => navigate('/register')}
          >
            Registrarse
          </Button>
        </div>
      </nav>
    </header>
  )
}
