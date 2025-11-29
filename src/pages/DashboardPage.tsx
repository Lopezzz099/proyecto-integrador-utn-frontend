import { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { SearchBar } from '@/components/dashboard/SearchBar'
import { FilterPanel } from '@/components/dashboard/FilterPanel'
import { WorkerCard } from '@/components/dashboard/WorkerCard'
import { getAllProfessionals } from '@/services/professionalService'
import type { User } from '@/services/types'
import { SlidersHorizontal } from 'lucide-react'

export function DashboardPage() {
  const navigate = useNavigate()
  
  // Estados de búsqueda y filtros
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedLocation, setSelectedLocation] = useState('Todas')
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState<'rating'>('rating')
  const [professionals, setProfessionals] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Cargar profesionales desde el backend
  useEffect(() => {
    const loadProfessionals = async () => {
      try {
        setIsLoading(true)
        const professionalsData = await getAllProfessionals()
        setProfessionals(professionalsData)
      } catch (err: any) {
        console.error('Error cargando profesionales:', err)
        setError(err.message || 'Error al cargar profesionales')
        setProfessionals([])
      } finally {
        setIsLoading(false)
      }
    }

    loadProfessionals()
  }, [])

  // Filtrar y ordenar trabajadores
  const filteredWorkers = useMemo(() => {
    // Transformar datos del backend al formato esperado por WorkerCard
    const dataSource = professionals
      .filter(prof => prof.profesional) // Solo incluir usuarios que tienen datos de profesional
      .map(prof => ({
        id: prof.id.toString(),
        name: prof.nombre || 'Sin nombre',
        category: prof.profesional?.oficios?.[0]?.nombre || 'General',
        specialties: prof.profesional?.oficios?.map(o => o.nombre) || [],
        rating: prof.profesional?.promedio || 0,
        reviewCount: prof.profesional?.comentarios?.length || 0,
        locations: prof.profesional?.ubicaciones || [],
        verified: prof.profesional?.verificacion === 1,
        estado: prof.profesional?.estado === 1 ? 'Activo' : 'Inactivo',
        disponibilidad: prof.profesional?.disponibilidad || 'No disponible',
        availability: (prof.profesional?.estado === 1 ? 'available' : 'unavailable') as 'available' | 'busy' | 'unavailable',
        description: prof.profesional?.descripcion || '',
      }))

    let filtered = dataSource.filter((worker) => {
      // Búsqueda por nombre o especialidades
      const matchesSearch = 
        (worker.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (worker.category || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        worker.specialties.some(s => (s || '').toLowerCase().includes(searchQuery.toLowerCase()))

      // Filtro de categoría
      const matchesCategory = 
        selectedCategory === 'Todos' || (worker.category || '') === selectedCategory

      // Filtro de ubicación
      const matchesLocation = 
        selectedLocation === 'Todas' || 
        worker.locations.some(loc => `${loc?.localidad || ''}, ${loc?.municipio || ''}` === selectedLocation)

      // Filtro de calificación
      const matchesRating = (worker.rating || 0) >= minRating

      return matchesSearch && matchesCategory && matchesLocation && matchesRating
    })

    // Ordenar
    filtered.sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating
      }
      return 0
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedLocation, minRating, sortBy, professionals])

  const handleClearFilters = () => {
    setSelectedCategory('Todos')
    setSelectedLocation('Todas')
    setMinRating(0)
    setSearchQuery('')
  }

  const handleViewProfile = (workerId: string) => {
    navigate(`/professional/${workerId}`)
  }

  const handleContact = (workerId: string) => {
    navigate(`/professional/${workerId}`)
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header de la página */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">
            Encuentra tu profesional ideal
          </h1>
          <p className="text-gray-600">
            Busca y filtra entre cientos de profesionales verificados en tu localidad
          </p>
        </div>

        {/* Búsqueda */}
        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Buscar por nombre, servicio o especialidad..."
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Panel de filtros - Sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel
              selectedCategory={selectedCategory}
              selectedLocation={selectedLocation}
              minRating={minRating}
              onCategoryChange={setSelectedCategory}
              onLocationChange={setSelectedLocation}
              onRatingChange={setMinRating}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Lista de trabajadores */}
          <div className="lg:col-span-3">
            {/* Barra de ordenamiento y resultados */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <p className="text-gray-600">
                <span className="font-semibold text-[#1F1F1F]">{filteredWorkers.length}</span>
                {' '}profesionales encontrados
              </p>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-gray-500" />
                <label className="text-sm text-gray-600">Ordenar por:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'rating')}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none text-sm"
                >
                  <option value="rating">Mejor calificados</option>
                </select>
              </div>
            </div>

            {/* Grid de tarjetas */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DBA668] mx-auto"></div>
                <p className="text-gray-600 mt-4">Cargando profesionales...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  Error al cargar datos
                </h3>
                <p className="text-gray-600 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 bg-[#DBA668] hover:bg-[#c89555] text-white rounded-lg font-medium transition-colors"
                >
                  Reintentar
                </button>
              </div>
            ) : filteredWorkers.length > 0 ? (
              <div className="space-y-4">
                {filteredWorkers.map((worker) => (
                  <WorkerCard
                    key={worker.id}
                    worker={worker}
                    onViewProfile={handleViewProfile}
                    onContact={handleContact}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                    No se encontraron resultados
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Intenta ajustar tus filtros o búsqueda para encontrar más profesionales
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-6 py-2 bg-[#DBA668] hover:bg-[#c89555] text-white rounded-lg font-medium transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
