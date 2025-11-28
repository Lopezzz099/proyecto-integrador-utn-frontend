import { useState } from 'react'
import { Filter, X, Star, MapPin, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { categories } from '@/data/workersData'

interface FilterPanelProps {
  selectedCategory: string
  selectedLocation: string
  minRating: number
  maxDistance: number
  maxPrice: number
  onCategoryChange: (category: string) => void
  onLocationChange: (location: string) => void
  onRatingChange: (rating: number) => void
  onDistanceChange: (distance: number) => void
  onPriceChange: (price: number) => void
  onClearFilters: () => void
}

const locations = ['Todas', 'Centro', 'Norte', 'Sur', 'Este', 'Oeste']

export function FilterPanel({
  selectedCategory,
  selectedLocation,
  minRating,
  maxDistance,
  maxPrice,
  onCategoryChange,
  onLocationChange,
  onRatingChange,
  onDistanceChange,
  onPriceChange,
  onClearFilters
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasActiveFilters = 
    selectedCategory !== 'Todos' || 
    selectedLocation !== 'Todas' || 
    minRating > 0 || 
    maxDistance < 20 || 
    maxPrice < 5000

  return (
    <>
      {/* Botón para móvil */}
      <div className="lg:hidden mb-4">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-[#1F1F1F] text-white hover:bg-[#2F2F2F]"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filtros {hasActiveFilters && '•'}
        </Button>
      </div>

      {/* Panel de filtros */}
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

        {/* Categoría */}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
            Categoría
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Ubicación */}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Ubicación
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Calificación mínima */}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 flex items-center gap-1">
            <Star className="w-4 h-4" />
            Calificación mínima: {minRating > 0 ? minRating : 'Todas'}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => onRatingChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DBA668]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Todas</span>
            <span>5.0</span>
          </div>
        </div>

        {/* Distancia máxima */}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
            Distancia máxima: {maxDistance} km
          </label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={maxDistance}
            onChange={(e) => onDistanceChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DBA668]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 km</span>
            <span>20 km</span>
          </div>
        </div>

        {/* Precio máximo por hora */}
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2 flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            Precio máximo: ${maxPrice}/hora
          </label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={maxPrice}
            onChange={(e) => onPriceChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DBA668]"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$500</span>
            <span>$5000</span>
          </div>
        </div>
      </div>
    </>
  )
}
