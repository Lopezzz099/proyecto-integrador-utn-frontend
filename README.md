# ��� OferTu - Plataforma de Servicios para el Hogar

Aplicación web para conectar residentes con profesionales de servicios del hogar en la provincia de Buenos Aires, Argentina.

## ��� Descripción del Proyecto

OferTu es una plataforma que facilita la conexión entre personas que necesitan servicios para el hogar y profesionales capacitados. Los usuarios pueden buscar y filtrar profesionales por oficio y ubicación, mientras que los profesionales pueden crear y gestionar sus perfiles.

## ��� Inicio Rápido

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Iniciar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## ��� Requisitos Previos

- **Node.js** 16 o superior
- **npm** o **yarn**
- **Backend** corriendo en `http://localhost:4000`

## ⚙️ Configuración

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

## ���️ Tecnologías Utilizadas

### Frontend
- **React 19.1** - Biblioteca de UI
- **TypeScript 5.8** - Tipado estático
- **Vite 7.1** - Build tool y dev server
- **React Router DOM 7.9** - Enrutamiento

### Estilos
- **Tailwind CSS 3.4** - Framework de utilidades CSS
- **Tailwind Animate** - Animaciones
- **Lucide React 0.542** - Librería de iconos
- **Class Variance Authority** - Gestión de variantes de componentes
- **clsx** - Utilidad para clases condicionales

### Estado y Datos
- **Axios 1.13** - Cliente HTTP para API REST
- **React Context API** - Gestión de estado de autenticación

### Validación y Utilidades
- **Zod 4.1** - Validación de esquemas y formularios
- **Radix UI** - Componentes primitivos accesibles

### Desarrollo
- **ESLint 9.33** - Linter de código
- **TypeScript ESLint** - Reglas de ESLint para TypeScript
- **PostCSS & Autoprefixer** - Procesamiento de CSS

## ��� APIs Utilizadas

### API Backend Propia
**Base URL:** `http://localhost:4000/api`

#### Endpoints de Usuarios
- `POST /usuarios` - Registrar usuario o profesional
- `POST /usuarios/login` - Iniciar sesión
- `GET /usuarios/:id` - Obtener usuario por ID
- `PUT /usuarios/:id` - Actualizar usuario
- `DELETE /usuarios/:id` - Eliminar usuario

#### Endpoints de Profesionales
- `GET /usuarios/todos/profesionales` - Listar profesionales
- `GET /usuarios/oficio/:nombre` - Filtrar por oficio
- `GET /usuarios/ubicacion/:localidad/:municipio` - Filtrar por ubicación

#### Endpoints de Oficios
- `GET /oficios` - Listar oficios disponibles
- `GET /oficios/:id` - Obtener oficio por ID

#### Endpoints de Ubicaciones
- `GET /ubicaciones` - Listar ubicaciones
- `GET /ubicaciones/:id` - Obtener ubicación por ID

#### Endpoints de Comentarios
- `POST /comentarios` - Crear comentario/valoración

### API Externa - GeoRef Argentina
**Base URL:** `https://apis.datos.gob.ar/georef/api`

Servicio de normalización de datos geográficos de Argentina (datos abiertos del gobierno).

#### Endpoints Utilizados
- `GET /municipios` - Obtener municipios de Buenos Aires
- `GET /localidades` - Obtener localidades por municipio

**Parámetros usados:**
- `provincia=06` - Buenos Aires
- `municipio` - Filtrar por municipio
- `nombre` - Búsqueda por nombre
- `max` - Cantidad máxima de resultados
- `campos` - Campos a devolver

## ��� Estructura del Proyecto

```
proyecto-integrador-utn-frontend/
├── public/                      # Archivos estáticos
├── src/
│   ├── assets/                  # Imágenes y recursos
│   ├── components/              # Componentes React
│   │   ├── auth/               # Autenticación (login, registro)
│   │   ├── dashboard/          # Dashboard de cliente
│   │   ├── professional/       # Componentes de profesionales
│   │   ├── worker/             # Panel de trabajador
│   │   ├── sections/           # Secciones de landing pages
│   │   └── ui/                 # Componentes UI reutilizables
│   ├── context/                # Context API
│   │   └── AuthContext.tsx     # Contexto de autenticación
│   ├── data/                   # Datos estáticos
│   ├── lib/                    # Utilidades
│   │   ├── oficios.ts          # Catálogo de oficios
│   │   ├── utils.ts            # Funciones auxiliares
│   │   └── validations.ts      # Validaciones con Zod
│   ├── pages/                  # Páginas principales
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── WorkerDashboardPage.tsx
│   │   ├── ProfessionalProfilePage.tsx
│   │   └── ...
│   ├── services/               # Servicios de API
│   │   ├── api.ts              # Configuración de Axios
│   │   ├── authService.ts      # Autenticación
│   │   ├── userService.ts      # Gestión de usuarios
│   │   ├── professionalService.ts  # Gestión de profesionales
│   │   ├── comentarioService.ts    # Comentarios
│   │   ├── georefService.ts    # API de GeoRef
│   │   └── types.ts            # Tipos TypeScript
│   ├── App.tsx                 # Componente raíz
│   ├── main.tsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── .env                        # Variables de entorno
├── package.json                # Dependencias
├── tsconfig.json               # Configuración TypeScript
├── vite.config.ts              # Configuración Vite
└── tailwind.config.js          # Configuración Tailwind
```

## ��� Funcionalidades Principales

### Autenticación y Registro
- Sistema de login con JWT
- Registro de usuarios (clientes)
- Registro de profesionales con oficios múltiples
- Validación de formularios con Zod
- Sesión persistente con localStorage
- Auto-logout al expirar token

### Dashboard de Cliente
- Búsqueda de profesionales
- Filtros por oficio y ubicación geográfica
- Visualización de perfiles profesionales
- Sistema de contacto con profesionales
- Valoraciones y comentarios

### Dashboard de Profesional
- Gestión de perfil profesional
- Edición de oficios y especialidades
- Gestión de disponibilidad
- Visualización de comentarios recibidos
- Actualización de información de contacto

### Sistema de Ubicaciones
- Integración con GeoRef Argentina
- Autocompletado de municipios
- Autocompletado de localidades
- Filtrado por ubicación geográfica

## �� Cómo Probar la Aplicación

### 1. Iniciar el Backend
```bash
cd ../backend
npm start
```

### 2. Iniciar el Frontend
```bash
npm run dev
```

### 3. Acceder a la aplicación
Abre tu navegador en: `http://localhost:5173`

### 4. Crear cuentas de prueba

**Registrar un Cliente:**
1. Ir a "Registrarse"
2. Seleccionar rol "Busco profesionales"
3. Completar formulario
4. Aceptar términos y condiciones

**Registrar un Profesional:**
1. Ir a "Registrarse"
2. Seleccionar rol "Soy profesional"
3. Completar formulario + oficios
4. Aceptar términos y condiciones

## ��� Seguridad

- Autenticación mediante **JWT (JSON Web Tokens)**
- Tokens almacenados en `localStorage`
- Interceptores de Axios para envío automático de tokens
- Redirección automática al login si el token expira
- Validación de datos con **Zod** antes de enviar al backend
- Headers CORS configurados

## ��� Diseño Responsive

- Diseño mobile-first
- Adaptable a tablets y desktop
- Componentes optimizados con Tailwind CSS
- Navegación adaptativa

## ��� Paleta de Colores

- **Primario:** `#DBA668` (Dorado)
- **Secundario:** `#1F1F1F` (Negro)
- **Fondo:** `#FFFFFF` (Blanco)
- **Texto:** `#333333` (Gris oscuro)

## ��� Scripts Disponibles

```bash
npm run dev          # Modo desarrollo (puerto 5173)
npm run build        # Compilar para producción
npm run preview      # Preview de build de producción
npm run lint         # Ejecutar ESLint
```

## ��� Integración con Backend

Ejemplo de uso de servicios:

```typescript
// Login
import { login } from '@/services/authService'
const token = await login({ email: 'user@example.com', password: '123456' })

// Registro de cliente
import { registerUser } from '@/services/userService'
await registerUser({
  nombre: 'Juan Pérez',
  email: 'juan@example.com',
  password: '123456',
  telefono: '1145678901',
  condiciones: '1',
  rol_id: 2,
  ubicacion: { localidad: 'San Isidro', municipio: 'San Isidro' }
})

// Obtener profesionales
import { getAllProfessionals } from '@/services/professionalService'
const professionals = await getAllProfessionals()

// Filtrar por oficio
import { filterProfessionalsBySkill } from '@/services/professionalService'
const plumbers = await filterProfessionalsBySkill('Plomero')

// Buscar municipios
import { searchMunicipios } from '@/services/georefService'
const municipios = await searchMunicipios('San')
```

## ��� Licencia

Proyecto Integrador - UTN FRH

---

**Desarrollado con ❤️ para la comunidad de Buenos Aires**
