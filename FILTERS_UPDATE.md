# Actualización de Filtros - Oficios y Ubicaciones

## Resumen de cambios

Se actualizaron los filtros de oficios y ubicaciones para consumir correctamente los datos del backend según la estructura de endpoints documentada.

## Cambios realizados

### 1. **api.ts** - Nuevos endpoints
Se agregaron los siguientes endpoints:

```typescript
// Profesionales con filtros
PROFESIONALES_BY_OFICIO: (nombre: string) => `/usuarios/oficio/${nombre}`
PROFESIONALES_BY_UBICACION: (localidad: string, municipio: string) => `/usuarios/ubicacion/${localidad}/${municipio}`

// Oficios
OFICIOS: '/oficios'
OFICIOS_BY_ID: (id: number) => `/oficios/${id}`

// Ubicaciones
UBICACIONES: '/ubicaciones'
UBICACIONES_BY_ID: (id: number) => `/ubicaciones/${id}`
```

### 2. **professionalService.ts** - Nuevas funciones
Se implementaron las siguientes funciones:

#### Filtros de profesionales
- **`filterProfessionalsBySkill(skill: string)`**: Obtiene profesionales por oficio
- **`filterProfessionalsByLocation(localidad: string, municipio: string)`**: Obtiene profesionales por ubicación

#### Gestión de oficios
- **`getAllOficios()`**: Obtiene todos los oficios disponibles
- **`getOficioById(id: number)`**: Obtiene un oficio específico

#### Gestión de ubicaciones
- **`getAllUbicaciones()`**: Obtiene todas las ubicaciones disponibles
- **`getUbicacionById(id: number)`**: Obtiene una ubicación específica

### 3. **FilterPanel.tsx** - Carga dinámica de datos
Se actualizó el componente para:
- Cargar oficios desde el backend usando `getAllOficios()`
- Cargar ubicaciones desde el backend usando `getAllUbicaciones()`
- Mostrar estados de carga mientras se obtienen los datos
- Deshabilitar los selectores mientras cargan los datos

## Estructura de datos del backend

### GET /oficios
```json
[
  {
    "id": 1,
    "nombre": "Plomero"
  },
  {
    "id": 2,
    "nombre": "Electricista"
  }
]
```

### GET /ubicaciones
```json
[
  {
    "id": 1,
    "localidad": "Capital",
    "municipio": "Godoy Cruz"
  },
  {
    "id": 2,
    "localidad": "Luján",
    "municipio": "Luján de Cuyo"
  }
]
```

### GET /usuarios/oficio/:nombre
Devuelve un array de usuarios completos con sus datos de profesional que tienen ese oficio.

### GET /usuarios/ubicacion/:localidad/:municipio
Devuelve un array de usuarios completos con sus datos de profesional que trabajan en esa ubicación.

## Uso de las nuevas funciones

```typescript
import { 
  getAllOficios, 
  getAllUbicaciones,
  filterProfessionalsBySkill,
  filterProfessionalsByLocation
} from '@/services/professionalService'

// Obtener todos los oficios
const oficios = await getAllOficios()

// Obtener todas las ubicaciones
const ubicaciones = await getAllUbicaciones()

// Filtrar profesionales por oficio
const plomeros = await filterProfessionalsBySkill('Plomero')

// Filtrar profesionales por ubicación
const profesionales = await filterProfessionalsByLocation('Capital', 'Godoy Cruz')
```

## Mejoras implementadas

1. **Carga dinámica**: Los filtros ahora cargan los datos reales del backend
2. **Estados de carga**: Se muestran indicadores mientras se cargan los datos
3. **Manejo de errores**: Se capturan y registran errores en la consola
4. **Interfaz mejorada**: Los selectores se deshabilitan durante la carga
5. **Tipo seguro**: Se utilizan los tipos TypeScript correctos (`Oficio`, `Ubicacion`)

## Próximos pasos recomendados

1. Integrar los filtros con la búsqueda de profesionales en `DashboardPage`
2. Implementar búsqueda combinada (oficio + ubicación)
3. Agregar caché para evitar llamadas repetidas al backend
4. Implementar manejo de errores visual para el usuario
