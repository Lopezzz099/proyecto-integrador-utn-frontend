import { useState, useMemo } from 'react'
import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { SearchBar } from '@/components/dashboard/SearchBar'
import { FilterPanel } from '@/components/dashboard/FilterPanel'
import { WorkerCard } from '@/components/dashboard/WorkerCard'
import { workers } from '@/data/workersData'
import { SlidersHorizontal } from 'lucide-react'

interface DashboardPageProps {
  onNavigate?: (page: 'landing' | 'login' | 'register' | 'about' | 'contact' | 'terms' | 'privacy' | 'blog') => void
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  // Estados de búsqueda y filtros
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedLocation, setSelectedLocation] = useState('Todas')
  const [minRating, setMinRating] = useState(0)
  const [maxDistance, setMaxDistance] = useState(20)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [sortBy, setSortBy] = useState<'rating' | 'distance' | 'price'>('rating')

  // Filtrar y ordenar trabajadores
  const filteredWorkers = useMemo(() => {
    let filtered = workers.filter((worker) => {
      // Búsqueda por nombre o especialidades
      const matchesSearch = 
        worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        worker.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        worker.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))

      // Filtro de categoría
      const matchesCategory = 
        selectedCategory === 'Todos' || worker.category === selectedCategory

      // Filtro de ubicación
      const matchesLocation = 
        selectedLocation === 'Todas' || worker.location === selectedLocation

      // Filtro de calificación
      const matchesRating = worker.rating >= minRating

      // Filtro de distancia
      const matchesDistance = worker.distance <= maxDistance

      // Filtro de precio
      const matchesPrice = worker.hourlyRate <= maxPrice

      return matchesSearch && matchesCategory && matchesLocation && 
             matchesRating && matchesDistance && matchesPrice
    })

    // Ordenar
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'distance':
          return a.distance - b.distance
        case 'price':
          return a.hourlyRate - b.hourlyRate
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedLocation, minRating, maxDistance, maxPrice, sortBy])

  const handleClearFilters = () => {
    setSelectedCategory('Todos')
    setSelectedLocation('Todas')
    setMinRating(0)
    setMaxDistance(20)
    setMaxPrice(5000)
    setSearchQuery('')
  }

  const handleViewProfile = (workerId: string) => {
    console.log('Ver perfil del trabajador:', workerId)
    // Aquí puedes navegar a la página de perfil
  }

  const handleContact = (workerId: string) => {
    console.log('Contactar trabajador:', workerId)
    // Aquí puedes abrir un modal de contacto o navegar a mensajes
  }

  return (
    <DashboardLayout onNavigate={onNavigate}>
      <div className="max-w-7xl mx-auto">
        {/* Header de la página */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">
            Encuentra tu profesional ideal
          </h1>
          <p className="text-gray-600">
            Busca y filtra entre cientos de profesionales verificados en tu zona
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
              maxDistance={maxDistance}
              maxPrice={maxPrice}
              onCategoryChange={setSelectedCategory}
              onLocationChange={setSelectedLocation}
              onRatingChange={setMinRating}
              onDistanceChange={setMaxDistance}
              onPriceChange={setMaxPrice}
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
                  onChange={(e) => setSortBy(e.target.value as 'rating' | 'distance' | 'price')}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none text-sm"
                >
                  <option value="rating">Mejor calificados</option>
                  <option value="distance">Más cercanos</option>
                  <option value="price">Menor precio</option>
                </select>
              </div>
            </div>

            {/* Grid de tarjetas */}
            {filteredWorkers.length > 0 ? (
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
