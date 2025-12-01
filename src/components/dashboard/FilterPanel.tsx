import { useState, useEffect } from 'react'
import { Filter, X, MapPin, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getAllOficios, getAllUbicaciones } from '@/services/professionalService'
import type { Oficio, Ubicacion } from '@/services/types'

interface FilterPanelProps {
  selectedCategory: string
  selectedLocation: string
  onCategoryChange: (category: string) => void
  onLocationChange: (location: string) => void
  onClearFilters: () => void
}

export function FilterPanel({
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange,
  onClearFilters
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [oficios, setOficios] = useState<Oficio[]>([])
  const [ubicaciones, setUbicaciones] = useState<Ubicacion[]>([])
  const [loadingOficios, setLoadingOficios] = useState(true)
  const [loadingUbicaciones, setLoadingUbicaciones] = useState(true)

  
  useEffect(() => {
    const loadOficios = async () => {
      try {
        setLoadingOficios(true)
        const oficiosData = await getAllOficios()
        setOficios(oficiosData)
      } catch (error) {
        console.error('Error cargando oficios:', error)
        setOficios([])
      } finally {
        setLoadingOficios(false)
      }
    }

    loadOficios()
  }, [])

  
  useEffect(() => {
    const loadUbicaciones = async () => {
      try {
        setLoadingUbicaciones(true)
        const ubicacionesData = await getAllUbicaciones()
        setUbicaciones(ubicacionesData)
      } catch (error) {
        console.error('Error cargando ubicaciones:', error)
        setUbicaciones([])
      } finally {
        setLoadingUbicaciones(false)
      }
    }

    loadUbicaciones()
  }, [])

  const hasActiveFilters = 
    selectedCategory !== 'Todos' || 
    selectedLocation !== 'Todas'

  return (
    <>
      {}
      <div className="lg:hidden mb-4">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#1F1F1F] text-white hover:bg-[#2F2F2F]"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filtros {hasActiveFilters && '•'}
        </Button>
      </div>

      {}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} lg:block
        bg-white rounded-lg shadow-md p-6 space-y-6
      `}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[#1F1F1F] flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
          </h3>
          {hasActiveFilters && (
            <Button
              onClick={onClearFilters}
              variant="ghost"
              size="sm"
              className="text-[#DBA668] hover:text-[#c89555]"
            >
              <X className="w-4 h-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>

        {}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            Oficio
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
            disabled={loadingOficios}
          >
            <option value="Todos">Todos</option>
            {oficios.map((oficio) => (
              <option key={oficio.id} value={oficio.nombre}>
                {oficio.nombre}
              </option>
            ))}
          </select>
          {loadingOficios && (
            <p className="text-xs text-gray-500 mt-1">Cargando oficios...</p>
          )}
        </div>

        {}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Ubicación
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
            disabled={loadingUbicaciones}
          >
            <option value="Todas">Todas</option>
            {ubicaciones.map((ubicacion) => (
              <option 
                key={ubicacion.id} 
                value={`${ubicacion.localidad}, ${ubicacion.municipio}`}
              >
                {ubicacion.localidad}, {ubicacion.municipio}
              </option>
            ))}
          </select>
          {loadingUbicaciones && (
            <p className="text-xs text-gray-500 mt-1">Cargando ubicaciones...</p>
          )}
        </div>
      </div>
    </>
  )
}
