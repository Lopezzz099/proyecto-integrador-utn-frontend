import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      {}
      <header className="bg-[#1F1F1F] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#DBA668]">ManosLibres</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm">Bienvenido, {user?.nombre || 'Usuario'}</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#DBA668] hover:bg-white/10"
              onClick={handleLogout}
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline ml-2">Salir</span>
            </Button>
          </div>
        </div>
      </header>

      {}
      <main className="p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
}
