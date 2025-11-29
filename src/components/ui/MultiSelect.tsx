import { useState, useRef, useEffect } from 'react'
import { X, ChevronDown, Search } from 'lucide-react'

interface Option {
  id: number
  nombre: string
}

interface MultiSelectProps {
  options: Option[]
  selectedIds: number[]
  onChange: (selectedIds: number[]) => void
  placeholder?: string
  error?: string
}

export function MultiSelect({
  options,
  selectedIds,
  onChange,
  placeholder = 'Seleccionar...',
  error,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOptions = options.filter((opt) => selectedIds.includes(opt.id))

  const filteredOptions = options.filter((option) =>
    option.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleOption = (id: number) => {
    if (selectedIds.includes(id)) {
      onChange(selectedIds.filter((selectedId) => selectedId !== id))
    } else {
      onChange([...selectedIds, id])
    }
  }

  const removeOption = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(selectedIds.filter((selectedId) => selectedId !== id))
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Campo de selección */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`min-h-[42px] px-4 py-2 border rounded-lg cursor-pointer transition flex items-center justify-between ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
            : 'border-gray-300 hover:border-[#DBA668] focus:border-[#DBA668]'
        } ${isOpen ? 'ring-2 ring-[#DBA668]/20' : ''}`}
      >
        <div className="flex-1 flex flex-wrap gap-1.5">
          {selectedOptions.length === 0 ? (
            <span className="text-gray-400">{placeholder}</span>
          ) : (
            selectedOptions.map((option) => (
              <span
                key={option.id}
                className="inline-flex items-center gap-1 bg-[#DBA668] text-white px-2 py-0.5 rounded-md text-sm"
              >
                {option.nombre}
                <button
                  onClick={(e) => removeOption(option.id, e)}
                  className="hover:bg-[#C49558] rounded-full p-0.5 transition"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-hidden">
          {/* Buscador */}
          <div className="p-2 border-b border-gray-200 sticky top-0 bg-white">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar oficios..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DBA668]/20 focus:border-[#DBA668] text-sm"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Lista de opciones */}
          <div className="max-h-[200px] overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No se encontraron oficios
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = selectedIds.includes(option.id)
                return (
                  <div
                    key={option.id}
                    onClick={() => toggleOption(option.id)}
                    className={`px-4 py-2 cursor-pointer transition flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#DBA668]/10 text-[#DBA668] font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                        isSelected ? 'bg-[#DBA668] border-[#DBA668]' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 bg-white rounded-sm" />}
                    </div>
                    <span className="text-sm">{option.nombre}</span>
                  </div>
                )
              })
            )}
          </div>

          {/* Footer con contador */}
          {selectedOptions.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
              <span className="text-xs text-gray-600">
                {selectedOptions.length} {selectedOptions.length === 1 ? 'oficio seleccionado' : 'oficios seleccionados'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
