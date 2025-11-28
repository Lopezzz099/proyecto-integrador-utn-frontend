# 🔌 Integración con Backend

Este documento explica cómo se conecta el frontend con el backend de OferTu.

## 📋 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (ya existe `.env.example` como referencia):

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

### Instalación de Dependencias

```bash
npm install
```

El proyecto usa `axios` para las peticiones HTTP al backend.

## 🏗️ Estructura de Servicios

```
src/services/
├── api.ts                      # Configuración de axios y endpoints
├── types.ts                    # Tipos TypeScript para la API
├── authService.ts              # Servicios de autenticación
├── userService.ts              # Servicios de usuarios
├── professionalService.ts      # Servicios de profesionales
└── index.ts                    # Exportaciones centralizadas
```

## 🔑 Autenticación

### Login

El login funciona tanto para usuarios (clientes) como para profesionales:

```typescript
import { login } from '@/services/authService'

try {
  const token = await login({
    email: 'usuario@ejemplo.com',
    password: '123456'
  })
  // El token se guarda automáticamente en localStorage
} catch (error) {
  console.error('Error en login:', error)
}
```

### Registro

**Usuario/Cliente (rol_id: 2):**

```typescript
import { registerUser } from '@/services/userService'

await registerUser({
  nombre: 'Juan Pérez',
  email: 'juan@example.com',
  password: '123456',
  telefono: '1234567890',
  condiciones: '1',
  rol_id: 2,
  ubicacion: {
    localidad: 'Centro',
    municipio: 'Buenos Aires'
  }
})
```

**Profesional/Trabajador (rol_id: 3):**

```typescript
import { registerProfessional } from '@/services/userService'

await registerProfessional({
  nombre: 'María García',
  email: 'maria@example.com',
  password: '123456',
  telefono: '0987654321',
  condiciones: '1',
  rol_id: 3,
  ubicacion: {
    localidad: 'Norte',
    municipio: 'Córdoba'
  },
  descripcion: 'Plomera con 10 años de experiencia',
  estado: '1',
  disponibilidad: 'Lunes a Viernes 9-18hs',
  oficios: ['Plomería', 'Gasista']
})
```

### Token JWT

El token se gestiona automáticamente:
- Se guarda en `localStorage` después del login
- Se incluye en todas las peticiones mediante un interceptor de axios
- Se decodifica para obtener información del usuario (id, rol_id)

## 📊 Obtener Datos

### Usuario por ID

```typescript
import { getUserById } from '@/services/userService'

const user = await getUserById(1)
console.log(user.nombre, user.email)
```

### Todos los Profesionales

```typescript
import { getAllProfessionals } from '@/services/professionalService'

const professionals = await getAllProfessionals()
professionals.forEach(prof => {
  console.log(prof.descripcion, prof.oficios)
})
```

## 🎯 Context de Autenticación

El `AuthContext` maneja el estado de autenticación:

```typescript
import { useAuth } from '@/context/AuthContext'

function MiComponente() {
  const { user, isAuthenticated, login, register, logout } = useAuth()

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <div>
      <h1>Bienvenido {user.nombre}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}
```

## 🔒 Roles

- **rol_id: 1** → Admin
- **rol_id: 2** → Usuario/Cliente
- **rol_id: 3** → Profesional/Trabajador

## 🚀 Flujo Completo

### 1. Usuario se registra

```typescript
// En RegisterPage.tsx
const handleRegister = async () => {
  await register({
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    password: '123456',
    telefono: '1234567890',
    condiciones: '1',
    rol_id: 2,
    ubicacion: {
      localidad: 'Centro',
      municipio: 'Buenos Aires'
    }
  })
  // Después del registro exitoso, se hace login automáticamente
}
```

### 2. Backend responde con token

```json
{
  "error": false,
  "status": 200,
  "body": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Token se guarda y decodifica

```typescript
// authService.ts
localStorage.setItem('token', token)
const decoded = decodeToken(token)
// { id: 1, rol_id: 2, iat: 1234567890, exp: 1234567890 }
```

### 4. Se obtienen datos completos del usuario

```typescript
const userData = await getUserById(decoded.id)
setUser(userData)
```

### 5. Se muestra el dashboard correspondiente

```typescript
// App.tsx
if (user.rol_id === 3) {
  return <WorkerDashboardPage />
} else {
  return <DashboardPage />
}
```

## 🐛 Manejo de Errores

Todos los servicios lanzan errores que deben ser capturados:

```typescript
try {
  await login(email, password)
} catch (error) {
  setErrors({
    general: error.message || 'Error en el login'
  })
}
```

## 📡 Endpoints Disponibles

### Usuarios

- `POST /usuarios` - Registrar usuario o profesional
- `POST /usuarios/login` - Login
- `GET /usuarios/:id` - Obtener usuario por ID
- `GET /usuarios` - Obtener todos (requiere admin)
- `PUT /usuarios/:id` - Actualizar usuario
- `DELETE /usuarios/:id` - Eliminar usuario

### Profesionales

- `GET /usuarios/todos/profesionales` - Obtener todos los profesionales
- `GET /usuarios/:id` - Obtener profesional por ID (mismo que usuarios)
- `PUT /usuarios/:id` - Actualizar profesional (mismo que usuarios)
- `DELETE /usuarios/:id` - Eliminar profesional (mismo que usuarios)

## 🔧 Desarrollo

### Iniciar el Frontend

```bash
npm run dev
```

### Iniciar el Backend

Asegúrate de que el backend esté corriendo en `http://localhost:4000`

### Verificar Conexión

1. Abre la consola del navegador
2. Intenta hacer login
3. Verifica que las peticiones se hacen a `http://localhost:4000/api`

## ⚠️ Notas Importantes

1. **CORS**: El backend debe tener configurado CORS para permitir peticiones desde `http://localhost:5173` (o el puerto de Vite)

2. **Token Expirado**: Si el token expira, el interceptor de axios redirige automáticamente al login

3. **Fallback de Datos**: Si el backend no está disponible, el dashboard usa datos mock como fallback

4. **Tipos TypeScript**: Todos los tipos están definidos en `services/types.ts` y coinciden con la estructura del backend

5. **Validación**: Las validaciones de formularios se hacen con Zod en el frontend antes de enviar al backend
