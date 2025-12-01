import { z } from 'zod'


export const step1Schema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
})


export const step2Schema = z.object({
  phone: z.string().min(7, 'El teléfono debe tener al menos 7 caracteres').optional().or(z.literal('')),
  municipio: z.string().min(2, 'Debes seleccionar un municipio'),
  localidad: z.string().min(2, 'Debes seleccionar una localidad'),
})


export const step3ClientSchema = z.object({
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Confirma tu contraseña'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})

export const step3ProviderSchema = z.object({
  skills: z.array(z.string()).min(1, 'Debes agregar al menos una habilidad'),
})


export const step4ProviderSchema = z.object({
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Confirma tu contraseña'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})


export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3ClientData = z.infer<typeof step3ClientSchema>
export type Step3ProviderData = z.infer<typeof step3ProviderSchema>
export type Step4ProviderData = z.infer<typeof step4ProviderSchema>
