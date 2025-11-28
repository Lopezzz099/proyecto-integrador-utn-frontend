import { z } from 'zod'

// Esquema de validación para el paso 1
export const step1Schema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
})

// Esquema de validación para el paso 2
export const step2Schema = z.object({
  phone: z.string().min(7, 'El teléfono debe tener al menos 7 caracteres').optional().or(z.literal('')),
  municipio: z.string().min(2, 'Debes seleccionar un municipio'),
  localidad: z.string().min(2, 'Debes seleccionar una localidad'),
})

// Esquema de validación para el paso 3 (clientes - contraseña, proveedores - skills)
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

// Esquema de validación para el paso 4 (solo proveedores - contraseña)
export const step4ProviderSchema = z.object({
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Confirma tu contraseña'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})

// Tipos derivados de los esquemas
export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3ClientData = z.infer<typeof step3ClientSchema>
export type Step3ProviderData = z.infer<typeof step3ProviderSchema>
export type Step4ProviderData = z.infer<typeof step4ProviderSchema>
