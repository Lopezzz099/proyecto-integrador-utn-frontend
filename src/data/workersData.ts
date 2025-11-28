export interface Worker {
  id: string
  name: string
  category: string
  specialties: string[]
  rating: number
  reviewCount: number
  location: string
  distance: number
  hourlyRate: number
  availability: 'available' | 'busy' | 'unavailable'
  image: string
  description: string
  experience: number
  verified: boolean
  responseTime: string
}

export const categories = [
  'Todos',
  'Plomería',
  'Electricidad',
  'Carpintería',
  'Pintura',
  'Jardinería',
  'Limpieza',
  'Construcción',
  'Reparaciones',
  'Otros'
]

export const workers: Worker[] = [
  {
    id: '1',
    name: 'Carlos Rodríguez',
    category: 'Plomería',
    specialties: ['Reparación de tuberías', 'Instalación de sanitarios', 'Destapado de cañerías'],
    rating: 4.8,
    reviewCount: 127,
    location: 'Centro',
    distance: 2.5,
    hourlyRate: 1500,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    description: 'Plomero profesional con más de 10 años de experiencia en todo tipo de instalaciones.',
    experience: 10,
    verified: true,
    responseTime: '30 min'
  },
  {
    id: '2',
    name: 'María González',
    category: 'Electricidad',
    specialties: ['Instalaciones eléctricas', 'Reparación de cortocircuitos', 'Iluminación LED'],
    rating: 4.9,
    reviewCount: 203,
    location: 'Norte',
    distance: 3.8,
    hourlyRate: 1800,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    description: 'Electricista certificada con especialización en instalaciones residenciales y comerciales.',
    experience: 8,
    verified: true,
    responseTime: '15 min'
  },
  {
    id: '3',
    name: 'Juan Pérez',
    category: 'Carpintería',
    specialties: ['Muebles a medida', 'Reparación de puertas', 'Instalación de pisos'],
    rating: 4.7,
    reviewCount: 89,
    location: 'Sur',
    distance: 5.2,
    hourlyRate: 2000,
    availability: 'busy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    description: 'Carpintero artesanal especializado en trabajos personalizados de alta calidad.',
    experience: 15,
    verified: true,
    responseTime: '1 hora'
  },
  {
    id: '4',
    name: 'Ana Martínez',
    category: 'Pintura',
    specialties: ['Pintura interior', 'Pintura exterior', 'Trabajos decorativos'],
    rating: 4.6,
    reviewCount: 156,
    location: 'Este',
    distance: 4.1,
    hourlyRate: 1200,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    description: 'Pintora profesional con ojo para el detalle y acabados impecables.',
    experience: 7,
    verified: true,
    responseTime: '45 min'
  },
  {
    id: '5',
    name: 'Roberto Silva',
    category: 'Jardinería',
    specialties: ['Diseño de jardines', 'Mantenimiento', 'Poda de árboles'],
    rating: 4.8,
    reviewCount: 94,
    location: 'Oeste',
    distance: 6.7,
    hourlyRate: 1400,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    description: 'Jardinero profesional especializado en diseño paisajístico y mantenimiento.',
    experience: 12,
    verified: true,
    responseTime: '1 hora'
  },
  {
    id: '6',
    name: 'Laura Fernández',
    category: 'Limpieza',
    specialties: ['Limpieza profunda', 'Limpieza post-obra', 'Mantenimiento'],
    rating: 4.9,
    reviewCount: 312,
    location: 'Centro',
    distance: 1.8,
    hourlyRate: 1000,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    description: 'Servicio de limpieza profesional con productos ecológicos y atención al detalle.',
    experience: 5,
    verified: true,
    responseTime: '20 min'
  },
  {
    id: '7',
    name: 'Diego Ramírez',
    category: 'Construcción',
    specialties: ['Albañilería', 'Remodelaciones', 'Reparaciones estructurales'],
    rating: 4.7,
    reviewCount: 178,
    location: 'Norte',
    distance: 4.5,
    hourlyRate: 2200,
    availability: 'busy',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    description: 'Maestro mayor de obra con amplia experiencia en construcción y remodelación.',
    experience: 20,
    verified: true,
    responseTime: '2 horas'
  },
  {
    id: '8',
    name: 'Patricia López',
    category: 'Reparaciones',
    specialties: ['Electrodomésticos', 'Pequeñas reparaciones', 'Mantenimiento general'],
    rating: 4.5,
    reviewCount: 67,
    location: 'Sur',
    distance: 3.2,
    hourlyRate: 1300,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    description: 'Técnica en reparaciones del hogar, rápida y eficiente en todo tipo de arreglos.',
    experience: 6,
    verified: false,
    responseTime: '40 min'
  },
  {
    id: '9',
    name: 'Fernando Castro',
    category: 'Electricidad',
    specialties: ['Domótica', 'Sistemas de seguridad', 'Automatización'],
    rating: 4.9,
    reviewCount: 145,
    location: 'Este',
    distance: 5.8,
    hourlyRate: 2500,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    description: 'Electricista especializado en sistemas inteligentes y automatización del hogar.',
    experience: 9,
    verified: true,
    responseTime: '25 min'
  },
  {
    id: '10',
    name: 'Sofía Morales',
    category: 'Pintura',
    specialties: ['Murales artísticos', 'Técnicas decorativas', 'Restauración'],
    rating: 5.0,
    reviewCount: 82,
    location: 'Centro',
    distance: 2.1,
    hourlyRate: 1800,
    availability: 'busy',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    description: 'Artista y pintora profesional especializada en trabajos decorativos únicos.',
    experience: 11,
    verified: true,
    responseTime: '1 hora'
  },
  {
    id: '11',
    name: 'Miguel Ángel Torres',
    category: 'Plomería',
    specialties: ['Sistemas de calefacción', 'Gas natural', 'Instalaciones sanitarias'],
    rating: 4.6,
    reviewCount: 134,
    location: 'Oeste',
    distance: 7.3,
    hourlyRate: 1700,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    description: 'Gasista matriculado y plomero con especialización en sistemas de calefacción.',
    experience: 13,
    verified: true,
    responseTime: '50 min'
  },
  {
    id: '12',
    name: 'Valentina Ruiz',
    category: 'Jardinería',
    specialties: ['Huertos urbanos', 'Plantas ornamentales', 'Sistemas de riego'],
    rating: 4.8,
    reviewCount: 76,
    location: 'Norte',
    distance: 4.9,
    hourlyRate: 1500,
    availability: 'available',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    description: 'Paisajista especializada en espacios verdes urbanos y sostenibilidad.',
    experience: 8,
    verified: true,
    responseTime: '35 min'
  }
]
