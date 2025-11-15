import { AlertCircle } from 'lucide-react'

interface Step1ContentProps {
  name: string
  lastName: string
  email: string
  onNameChange: (name: string) => void
  onLastNameChange: (lastName: string) => void
  onEmailChange: (email: string) => void
  errors: { [key: string]: string }
}

export function Step1Content({
  name,
  lastName,
  email,
  onNameChange,
  onLastNameChange,
  onEmailChange,
  errors,
}: Step1ContentProps) {
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
      <h2 className="text-xl font-bold text-[#1F1F1F] mb-6">Información Personal</h2>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Tu nombre"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
            }`}
            required
          />
          {renderErrorMessage('name')}
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">Apellido</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            placeholder="Tu apellido"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.lastName
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
            }`}
            required
          />
          {renderErrorMessage('lastName')}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="tu@email.com"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-[#DBA668] focus:ring-[#DBA668]/20'
          }`}
          required
        />
        {renderErrorMessage('email')}
      </div>
    </div>
  )
}
