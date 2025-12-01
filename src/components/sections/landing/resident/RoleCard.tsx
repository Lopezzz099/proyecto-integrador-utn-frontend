import { Check, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RoleCardProps {
  icon: LucideIcon
  title: string
  features: string[]
  description: string
  problems: Array<{ problem: string; solution: string }>
  buttonText: string
}

export function RoleCard({
  icon: Icon,
  title,
  features,
  description,
  problems,
  buttonText,
}: RoleCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#EEEEEE] to-white border-2 border-[#DBA668] rounded-lg p-8 hover:shadow-2xl transition">
      <div className="mb-6">
        <Icon className="w-16 h-16 text-[#DBA668] mb-4" />
        <h3 className="text-3xl font-bold text-[#1F1F1F]">{title}</h3>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#DBA668] mb-4">¿Qué puedes hacer?</h4>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-[#DBA668] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-[#1F1F1F]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#DBA668] mb-4">¿Por qué usar ManosLibres?</h4>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[#DBA668] mb-4">Problemas que resuelve</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {problems.map((item, idx) => (
            <li key={idx}>
              ❌ {item.problem} → ✅ {item.solution}
            </li>
          ))}
        </ul>
      </div>

      <Button className="w-full bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold py-3 text-lg">
        {buttonText}
      </Button>
    </div>
  )
}
