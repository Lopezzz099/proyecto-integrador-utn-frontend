interface AuthContainerProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

export function AuthContainer({ title, subtitle, children }: AuthContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F1F1F] to-[#2d2d2d] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-[#EEEEEE] rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2 text-center">{title}</h1>
          <p className="text-gray-600 text-center mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
