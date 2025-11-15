interface RoleSelectorProps {
  selectedRole: 'client' | 'provider'
  onRoleChange: (role: 'client' | 'provider') => void
}

export function RoleSelector({ selectedRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-[#1F1F1F] mb-3">
        ¿Cuál es tu rol?
      </label>
      <div className="flex gap-4">
        <button
          onClick={() => onRoleChange('client')}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
            selectedRole === 'client'
              ? 'bg-[#DBA668] text-[#1F1F1F]'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          Cliente
        </button>
        <button
          onClick={() => onRoleChange('provider')}
          className={`flex-1 py-3 px-4 rounded-lg font-semibold transition ${
            selectedRole === 'provider'
              ? 'bg-[#DBA668] text-[#1F1F1F]'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          Proveedor
        </button>
      </div>
    </div>
  )
}
