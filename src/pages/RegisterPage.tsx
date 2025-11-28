import { useState, useEffect } from 'react'
import { useAuth, type UserRole } from '@/context/AuthContext'
import { ZodError } from 'zod'
import { step1Schema, step2Schema, step3ClientSchema, step3ProviderSchema, step4ProviderSchema } from '@/lib/validations'
import { AuthContainer } from '@/components/auth/AuthContainer'
import { RoleSelector } from '@/components/auth/RoleSelector'
import { ProgressBar } from '@/components/auth/ProgressBar'
import { StepNavigation } from '@/components/auth/StepNavigation'
import { Step1Content } from '@/components/auth/Step1Content'
import { Step2Content } from '@/components/auth/Step2Content'
import { Step3Content } from '@/components/auth/Step3Content'
import { Step4Content } from '@/components/auth/Step4Content'
import { AuthLinks } from '@/components/auth/AuthLinks'

interface RegisterPageProps {
  onNavigate?: (page: 'login' | 'register' | 'landing' | 'about' | 'contact') => void
  initialRole?: 'resident' | 'worker'
}

interface StepErrors {
  [key: string]: string
}

export function RegisterPage({ onNavigate, initialRole }: RegisterPageProps) {
  const [step, setStep] = useState(1)
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole === 'worker' ? 'provider' : 'client')
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    skills: [] as string[],
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<StepErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Limpiar error cuando el usuario comienza a editar
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateStep = (): boolean => {
    try {
      setErrors({})

      switch (step) {
        case 1:
          step1Schema.parse({
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
          })
          break
        case 2:
          step2Schema.parse({
            phone: formData.phone,
            location: formData.location,
          })
          break
        case 3:
          if (selectedRole === 'provider') {
            step3ProviderSchema.parse({
              skills: formData.skills,
            })
          } else {
            step3ClientSchema.parse({
              password: formData.password,
              confirmPassword: formData.confirmPassword,
            })
          }
          break
        case 4:
          if (selectedRole === 'provider') {
            step4ProviderSchema.parse({
              password: formData.password,
              confirmPassword: formData.confirmPassword,
            })
          }
          break
        default:
          return false
      }
      return true
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: StepErrors = {}
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0].toString()] = issue.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleNext = () => {
    if (validateStep() && step < getTotalSteps()) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      setErrors({})
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep()) {
      return
    }

    setIsLoading(true)
    try {
      // Preparar datos para el backend
      const registerData = {
        nombre: `${formData.name} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        telefono: formData.phone,
        condiciones: '1',
        rol_id: selectedRole === 'provider' ? 3 : 2,
        ubicacion: {
          zona: formData.location.split(',')[0]?.trim() || formData.location,
          ciudad: formData.location.split(',')[1]?.trim() || 'Buenos Aires',
        },
      }

      // Si es profesional, agregar datos adicionales
      if (selectedRole === 'provider') {
        Object.assign(registerData, {
          descripcion: `Profesional de ${formData.skills.join(', ')}`,
          estado: '1',
          disponibilidad: 'Consultar disponibilidad',
          oficios: formData.skills,
        })
      }

      await register(registerData)
      
      // Redirigir al dashboard correspondiente después del registro exitoso
      if (onNavigate) {
        // El AuthContext ya redirige automáticamente después del login
      }
    } catch (error: any) {
      setErrors({
        general: error.message || 'Error al registrar usuario',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getTotalSteps = () => (selectedRole === 'provider' ? 4 : 3)

  const isNextDisabled = () => {
    if (step === 1) {
      return !formData.name || !formData.lastName || !formData.email
    }
    if (step === 2) {
      return !formData.location
    }
    if (step === 3) {
      if (selectedRole === 'provider') {
        return formData.skills.length === 0
      }
      return !formData.password || !formData.confirmPassword
    }
    return false
  }

  return (
    <AuthContainer title="OferTu" subtitle="Crea tu cuenta">
      {step === 1 && (
        <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />
      )}

      <ProgressBar currentStep={step} totalSteps={getTotalSteps()} />

      {/* Step Contents */}
      {step === 1 && (
        <Step1Content
          name={formData.name}
          lastName={formData.lastName}
          email={formData.email}
          onNameChange={(value) => handleChange('name', value)}
          onLastNameChange={(value) => handleChange('lastName', value)}
          onEmailChange={(value) => handleChange('email', value)}
          errors={errors}
        />
      )}

      {step === 2 && (
        <Step2Content
          phone={formData.phone}
          location={formData.location}
          selectedRole={selectedRole}
          onPhoneChange={(value) => handleChange('phone', value)}
          onLocationChange={(value) => handleChange('location', value)}
          errors={errors}
        />
      )}

      {step === 3 && (
        <Step3Content
          selectedRole={selectedRole}
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          skills={formData.skills}
          onPasswordChange={(value) => handleChange('password', value)}
          onConfirmPasswordChange={(value) => handleChange('confirmPassword', value)}
          onSkillsChange={(value) => handleChange('skills', value)}
          errors={errors}
        />
      )}

      {step === 4 && (
        <Step4Content
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          onPasswordChange={(value) => handleChange('password', value)}
          onConfirmPasswordChange={(value) => handleChange('confirmPassword', value)}
          errors={errors}
        />
      )}

      <StepNavigation
        currentStep={step}
        totalSteps={getTotalSteps()}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleRegister}
        isNextDisabled={isNextDisabled()}
        isLoading={isLoading}
      />

      <AuthLinks onNavigate={onNavigate || (() => {})} type="register" />
    </AuthContainer>
  )
}
