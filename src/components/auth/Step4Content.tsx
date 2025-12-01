import { AlertCircle } from 'lucide-react'

interface Step4ContentProps {
  password: string
  confirmPassword: string
  onPasswordChange: (password: string) => void
  onConfirmPasswordChange: (confirmPassword: string) => void
  errors: { [key: string]: string }
}

export function Step4Content({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  errors,
}: Step4ContentProps) {
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

      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 text-[#DBA668] rounded cursor-pointer"
          required
        />
        <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
          Acepto los términos y condiciones de ManosLibres
        </label>
      </div>
    </div>
  )
}
