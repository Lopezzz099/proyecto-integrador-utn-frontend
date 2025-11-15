import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface StepNavigationProps {
  currentStep: number
  totalSteps: number
  onBack: () => void
  onNext: () => void
  onSubmit: (e: React.FormEvent) => void
  isNextDisabled?: boolean
  isLoading?: boolean
}

export function StepNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit,
  isNextDisabled = false,
  isLoading = false,
}: StepNavigationProps) {
  const isLastStep = currentStep === totalSteps

  return (
    <div className="flex gap-3 mt-6">
      <Button
        type="button"
        variant="outline"
        className="flex-1 border-gray-300 text-gray-600"
        onClick={onBack}
        disabled={currentStep === 1}
      >
        <ChevronLeft className="w-4 h-4 mr-1" /> Atrás
      </Button>
      {isLastStep ? (
        <Button
          type="submit"
          className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold disabled:opacity-50"
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Registrando...' : 'Registrarse'}
        </Button>
      ) : (
        <Button
          type="button"
          className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-[#1F1F1F] font-bold disabled:opacity-50"
          onClick={onNext}
          disabled={isNextDisabled}
        >
          Siguiente <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </div>
  )
}
