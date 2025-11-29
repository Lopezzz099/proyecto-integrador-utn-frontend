import { AlertCircle } from 'lucide-react'
import { MultiSelect } from '@/components/ui/MultiSelect'
import { oficios } from '@/lib/oficios'

interface Step3ContentProps {
  selectedRole: 'client' | 'provider'
  password: string
  confirmPassword: string
  skills: string[]
  selectedOficiosIds?: number[]
  onPasswordChange: (password: string) => void
  onConfirmPasswordChange: (confirmPassword: string) => void
  onSkillsChange: (skills: string[]) => void
  onOficiosChange?: (oficiosIds: number[]) => void
  errors: { [key: string]: string }
}

export function Step3Content({
  selectedRole,
  password,
  confirmPassword,
  skills,
  selectedOficiosIds = [],
  onPasswordChange,
  onConfirmPasswordChange,
  onSkillsChange,
  onOficiosChange,
  errors,
}: Step3ContentProps) {
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

  if (selectedRole === 'provider') {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#1F1F1F] mb-6">Oficios y Habilidades</h2>

        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
            Oficios/Habilidades <span className="text-red-500">*</span>
          </label>
          <MultiSelect
            options={oficios}
            selectedIds={selectedOficiosIds}
            onChange={(ids) => {
              if (onOficiosChange) {
                onOficiosChange(ids)
                // También actualizar el array de strings para compatibilidad
                const selectedNames = oficios
                  .filter(o => ids.includes(o.id))
                  .map(o => o.nombre)
                onSkillsChange(selectedNames)
              }
            }}
            placeholder="Selecciona tus oficios o habilidades"
            error={errors.skills}
          />
          {renderErrorMessage('skills')}
          <p className="text-xs text-gray-500 mt-2">
            Puedes seleccionar múltiples oficios. Usa el buscador para encontrarlos más rápido.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-[#1F1F1F] mb-6">Crear Contraseña</h2>

      <div>
        <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="••••••••"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.password
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
          }`}
          required
        />
        {renderErrorMessage('password')}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
          placeholder="••••••••"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.confirmPassword
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
          }`}
          required
        />
        {renderErrorMessage('confirmPassword')}
      </div>
    </div>
  )
}
