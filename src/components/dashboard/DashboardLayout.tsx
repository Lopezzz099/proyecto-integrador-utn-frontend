import { useNavigate } from 'react-router-dom'
import { Home, MessageSquare, Settings, LogOut, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      {/* Header */}
      <header className="bg-[#1F1F1F] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-white hover:text-[#DBA668]"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold text-[#DBA668]">OferTu</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm">Bienvenido, Usuario</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#DBA668]"
              onClick={() => navigate('/')}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-white shadow-lg
          transition-transform duration-300 ease-in-out
          mt-16 lg:mt-0
        `}>
          <nav className="p-6 space-y-2">
            <button
              className="w-full flex items-center gap-3 px-4 py-3 bg-[#DBA668] text-white rounded-lg"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Inicio</span>
            </button>
            <button
              onClick={() => console.log('Mensajes - En desarrollo')}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#1F1F1F] hover:bg-[#DBA668] hover:text-white rounded-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Mensajes</span>
            </button>
            <button
              onClick={() => console.log('Configuración - En desarrollo')}
              className="w-full flex items-center gap-3 px-4 py-3 text-[#1F1F1F] hover:bg-[#DBA668] hover:text-white rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Configuración</span>
            </button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Overlay para móvil */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 mt-16"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
