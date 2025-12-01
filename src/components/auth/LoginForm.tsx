interface LoginFormProps {
  email: string
  password: string
  onEmailChange: (email: string) => void
  onPasswordChange: (password: string) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading?: boolean
  errors: { [key: string]: string }
}

export function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isLoading = false,
  errors,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {}
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
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {}
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
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      {}
      {errors.general && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-600 text-sm">{errors.general}</p>
        </div>
      )}

      {}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>
    </form>
  )
}
