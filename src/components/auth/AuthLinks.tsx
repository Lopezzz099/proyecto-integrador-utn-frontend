interface AuthLinksProps {
  onNavigate: (page: 'login' | 'register' | 'landing') => void
  type: 'login' | 'register'
}

export function AuthLinks({ onNavigate, type }: AuthLinksProps) {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-center text-sm text-gray-600">
      {type === 'login' ? (
        <>
          <p>
            ¿No tienes cuenta?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="text-[#DBA668] font-semibold hover:underline"
            >
              Regístrate
            </button>
          </p>
        </>
      ) : (
        <>
          <p>
            ¿Ya tienes cuenta?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-[#DBA668] font-semibold hover:underline"
            >
              Inicia sesión
            </button>
          </p>
        </>
      )}
      <p>
        <button
          onClick={() => onNavigate('landing')}
          className="text-[#DBA668] font-semibold hover:underline"
        >
          ← Volver al inicio
        </button>
      </p>
    </div>
  )
}
