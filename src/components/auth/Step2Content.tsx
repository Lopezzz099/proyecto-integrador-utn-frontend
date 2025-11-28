import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { AutocompleteInput } from '@/components/ui/AutocompleteInput'
import { searchMunicipios, searchLocalidades } from '@/services/georefService'
import type { Municipio } from '@/services/georefService'

interface Step2ContentProps {
  phone: string
  municipio: string
  municipioId: string
  localidad: string
  localidadId: string
  selectedRole: 'client' | 'provider'
  onPhoneChange: (phone: string) => void
  onMunicipioChange: (municipio: string, municipioId: string) => void
  onLocalidadChange: (localidad: string, localidadId: string) => void
  errors: { [key: string]: string }
}

export function Step2Content({
  phone,
  municipio,
  municipioId,
  localidad,
  localidadId,
  selectedRole,
  onPhoneChange,
  onMunicipioChange,
  onLocalidadChange,
  errors,
}: Step2ContentProps) {
  const [selectedMunicipio, setSelectedMunicipio] = useState<Municipio | null>(
    municipioId ? { id: municipioId, nombre: municipio } : null
  )

  const renderErrorMessage = (fieldName: string) => {
    if (errors[fieldName]) {
      return (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {errors[fieldName]}
        </p>
      )
    }
    return null
  }

  const handleMunicipioSelect = (option: { id: string; nombre: string } | null) => {
    if (option) {
      setSelectedMunicipio({ id: option.id, nombre: option.nombre })
      onMunicipioChange(option.nombre, option.id)
    } else {
      setSelectedMunicipio(null)
      onMunicipioChange('', '')
      onLocalidadChange('', '')
    }
  }

  const handleLocalidadSelect = (option: { id: string; nombre: string } | null) => {
    if (option) {
      onLocalidadChange(option.nombre, option.id)
    } else {
      onLocalidadChange('', '')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-[#1F1F1F] mb-6">Contacto y Ubicación</h2>

      <div>
        <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">Teléfono</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+54 11 1234-5678"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.phone
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
          }`}
        />
        {renderErrorMessage('phone')}
      </div>

      {/* Municipio */}
      <AutocompleteInput
        label={selectedRole === 'client' ? 'Municipio' : 'Municipio de Cobertura'}
        value={municipio}
        placeholder="Ej: La Plata, San Isidro, Tigre..."
        error={errors.municipio}
        onSearch={searchMunicipios}
        onSelect={handleMunicipioSelect}
        selectedId={municipioId}
      />

      {/* Localidad - solo se habilita si hay municipio seleccionado */}
      <AutocompleteInput
        label={selectedRole === 'client' ? 'Localidad' : 'Localidad de Cobertura'}
        value={localidad}
        placeholder={
          selectedMunicipio
            ? 'Ej: City Bell, Casco Urbano...'
            : 'Primero selecciona un municipio'
        }
        error={errors.localidad}
        disabled={!selectedMunicipio}
        onSearch={(query) =>
          selectedMunicipio ? searchLocalidades(selectedMunicipio.id, query) : Promise.resolve([])
        }
        onSelect={handleLocalidadSelect}
        selectedId={localidadId}
      />

      {!selectedMunicipio && localidad && (
        <p className="text-amber-600 text-xs flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Debes seleccionar primero un municipio
        </p>
      )}
    </div>
  )
}
