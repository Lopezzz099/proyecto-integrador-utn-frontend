export interface WorkerProfile {
  id: string
  name: string
  email: string
  phone: string
  category: string
  specialties: string[]
  description: string
  experience: number
  hourlyRate: number
  location: string
  address: string
  image: string
  verified: boolean
  rating: number
  reviewCount: number
  completedJobs: number
  responseTime: string
  availability: 'available' | 'busy' | 'unavailable'
  workingHours: {
    start: string
    end: string
  }
  certifications: string[]
  languages: string[]
}

export const workerProfile: WorkerProfile = {
  id: '1',
  name: 'Juan Trabajador',
  email: 'juan@ejemplo.com',
  phone: '+54 11 1234-5678',
  category: 'Plomería',
  specialties: ['Reparación de tuberías', 'Instalación de sanitarios', 'Destapado de cañerías'],
  description: 'Plomero profesional con más de 10 años de experiencia en todo tipo de instalaciones y reparaciones. Trabajo con compromiso y calidad garantizada.',
  experience: 10,
  hourlyRate: 1500,
  location: 'Centro',
  address: 'Av. Corrientes 1234, CABA',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  verified: true,
  rating: 4.8,
  reviewCount: 127,
  completedJobs: 453,
  responseTime: '30 min',
  availability: 'available',
  workingHours: {
    start: '08:00',
    end: '18:00'
  },
  certifications: ['Gasista Matriculado', 'Plomero Certificado'],
  languages: ['Español', 'Inglés']
}
