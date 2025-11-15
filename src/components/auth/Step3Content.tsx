import { AlertCircle } from 'lucide-react'

interface Step3ContentProps {
  selectedRole: 'client' | 'provider'
  password: string
  confirmPassword: string
  skills: string[]
  onPasswordChange: (password: string) => void
  onConfirmPasswordChange: (confirmPassword: string) => void
  onSkillsChange: (skills: string[]) => void
  errors: { [key: string]: string }
}

export function Step3Content({
  selectedRole,
  password,
  confirmPassword,
  skills,
  onPasswordChange,
  onConfirmPasswordChange,
  onSkillsChange,
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
            Oficios/Habilidades
          </label>
          <textarea
            value={skills.join(', ')}
            onChange={(e) => {
              const skillsArray = e.target.value
                .split(',')
                .map((skill) => skill.trim())
                .filter((skill) => skill)
              onSkillsChange(skillsArray)
            }}
            placeholder="Ej: Electricista, Plomería, Carpintería (separados por comas)"
            rows={3}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.skills
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
            }`}
          />
          {renderErrorMessage('skills')}
          <p className="text-xs text-gray-500 mt-2">Puedes agregar múltiples oficios separándolos por comas</p>
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
