# Sistema de Autenticación - OferTu

## 🏗️ Estructura Implementada

### Páginas Creadas

1. **LoginPage** (`src/pages/LoginPage.tsx`)
   - Selector de rol (Cliente/Proveedor)
   - Formulario de login con email y contraseña
   - Link a registro
   - Credenciales de demo

2. **RegisterPage** (`src/pages/RegisterPage.tsx`)
   - Selector de rol (Cliente/Proveedor)
   - Formulario diferenciado según rol:
     - **Cliente**: Nombre, Email, Teléfono, Barrio
     - **Proveedor**: Nombre, Email, Teléfono, Ubicación, Oficios/Habilidades
   - Validación de contraseñas
   - Términos y condiciones
   - Link a login

### Contexto de Autenticación

**AuthContext** (`src/context/AuthContext.tsx`)
- Maneja el estado global del usuario autenticado
- Funciones: `login()`, `register()`, `logout()`
- Hook: `useAuth()` para acceder desde cualquier componente

### Flujo de la Aplicación

```
Landing Page (Residente/Trabajador)
    ↓
    ├── "Iniciar sesión" → Login Page
    │   ↓
    │   ├── Login exitoso → Dashboard
    │   └── "¿No tienes cuenta?" → Register Page
    │
    └── "Registrarse" → Register Page
        ↓
        ├── Registro exitoso → Dashboard
        └── "¿Ya tienes cuenta?" → Login Page
```

## 🧪 Credenciales de Prueba

**Email:** `demo@ofertu.com`  
**Contraseña:** `demo123`

## 📋 Estructura de Datos

### Cliente
```typescript
{
  name: string
  email: string
  role: 'client'
  phone?: string
  location?: string (barrio)
}
```

### Proveedor
```typescript
{
  name: string
  email: string
  role: 'provider'
  phone?: string
  location?: string (localidad de cobertura)
  skills?: string[] (oficios/habilidades)
}
```

## 🎨 Colores Utilizados

- **Primario:** `#DBA668` (Dorado)
- **Fondo:** `#EEEEEE` (Blanco/Gris claro)
- **Oscuro:** `#1F1F1F` (Negro)

## 🔒 Notas Importantes

- El sistema de autenticación es simulado (mock)
- Los datos se guardan en `localStorage` para persistencia local
- En producción, se debe conectar con una API backend
- Las contraseñas actualmente NO se encriptan (agregar en producción)
- Se debe implementar validación del lado del servidor

## 📱 Responsive

- ✅ Mobile first
- ✅ Tablet optimizado
- ✅ Desktop completo

## 🚀 Próximos Pasos

1. Conectar con API backend
2. Implementar autenticación real (JWT)
3. Crear Dashboard para usuarios autenticados
4. Agregar validaciones avanzadas
5. Implementar recuperación de contraseña
6. Agregar verificación de email
