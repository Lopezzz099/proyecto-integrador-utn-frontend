import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Search, Loader2 } from 'lucide-react'

interface AutocompleteOption {
  id: string
  nombre: string
}

interface AutocompleteInputProps {
  label: string
  value: string
  placeholder: string
  error?: string
  disabled?: boolean
  onSearch: (query: string) => Promise<AutocompleteOption[]>
  onSelect: (option: AutocompleteOption | null) => void
  selectedId?: string
}

export function AutocompleteInput({
  label,
  value,
  placeholder,
  error,
  disabled,
  onSearch,
  onSelect,
  selectedId,
}: AutocompleteInputProps) {
  const [inputValue, setInputValue] = useState(value)
  const [options, setOptions] = useState<AutocompleteOption[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Actualizar input cuando cambia el value desde afuera
  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = async (newValue: string) => {
    setInputValue(newValue)
    
    // Si se borra todo, limpiar selección
    if (!newValue) {
      onSelect(null)
      setOptions([])
      setIsOpen(false)
      return
    }

    // Debounce: esperar 300ms después de que el usuario deje de escribir
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(async () => {
      if (newValue.length >= 2) {
        setIsLoading(true)
        setIsOpen(true)
        try {
          const results = await onSearch(newValue)
          setOptions(results)
        } catch (error) {
          console.error('Error buscando:', error)
          setOptions([])
        } finally {
          setIsLoading(false)
        }
      } else {
        setOptions([])
        setIsOpen(false)
      }
    }, 300)
  }

  const handleSelectOption = (option: AutocompleteOption) => {
    setInputValue(option.nombre)
    onSelect(option)
    setIsOpen(false)
    setOptions([])
  }

  const handleFocus = async () => {
    if (inputValue.length >= 2 && !selectedId) {
      setIsLoading(true)
      setIsOpen(true)
      try {
        const results = await onSearch(inputValue)
        setOptions(results)
      } catch (error) {
        console.error('Error buscando:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">{label}</label>
      
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Search className="w-4 h-4" />
          )}
        </div>
        
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        />
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Dropdown de opciones */}
      {isOpen && options.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelectOption(option)}
              className="w-full px-4 py-2 text-left hover:bg-[#DBA668]/10 focus:bg-[#DBA668]/20 focus:outline-none transition"
            >
              <span className="text-sm text-[#1F1F1F]">{option.nombre}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mensaje de "no hay resultados" */}
      {isOpen && !isLoading && inputValue.length >= 2 && options.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          <p className="text-sm text-gray-500 text-center">No se encontraron resultados</p>
        </div>
      )}

      {/* Mensaje de error */}
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <span>⚠️</span>
          {error}
        </p>
      )}
      
      {/* Ayuda contextual */}
      {!disabled && inputValue.length < 2 && inputValue.length > 0 && (
        <p className="text-gray-500 text-xs mt-1">Escribe al menos 2 caracteres para buscar</p>
      )}
    </div>
  )
}
