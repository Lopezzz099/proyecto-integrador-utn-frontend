import { AlertCircle } from 'lucide-react'

interface Step2ContentProps {
  phone: string
  location: string
  selectedRole: 'client' | 'provider'
  onPhoneChange: (phone: string) => void
  onLocationChange: (location: string) => void
  errors: { [key: string]: string }
}

export function Step2Content({
  phone,
  location,
  selectedRole,
  onPhoneChange,
  onLocationChange,
  errors,
}: Step2ContentProps) {
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

      <div>
        <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
          {selectedRole === 'client' ? 'Barrio / Zona' : 'Zona de Cobertura'}
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          placeholder={selectedRole === 'client' ? 'Ej: Caballito' : 'Ej: CABA, Buenos Aires'}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.location
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
          }`}
        />
        {renderErrorMessage('location')}
      </div>
    </div>
  )
}
