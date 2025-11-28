# 🏠 OferTu - Frontend

Plataforma web para conectar residentes con profesionales de servicios del hogar.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📋 Requisitos

- Node.js 16+
- npm o yarn
- Backend corriendo en `http://localhost:4000` (ver configuración)

## 🔌 Integración con Backend

El proyecto está **completamente integrado** con el backend. Ver documentación completa:

- 📖 **[INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md)** - Resumen de la integración
- 📚 **[BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md)** - Documentación técnica
- 🧪 **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Guía de pruebas

## ⚙️ Configuración

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

## 🛠️ Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Axios** - Cliente HTTP
- **Zod** - Validación de formularios
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── auth/           # Componentes de autenticación
│   ├── dashboard/      # Componentes del dashboard
│   ├── sections/       # Secciones de páginas
│   └── ui/             # Componentes UI reutilizables
├── context/            # Context API (AuthContext)
├── data/               # Datos mock
├── lib/                # Utilidades y validaciones
├── pages/              # Páginas principales
├── services/           # 🆕 Servicios de API
│   ├── api.ts
│   ├── authService.ts
│   ├── userService.ts
│   ├── professionalService.ts
│   └── types.ts
└── App.tsx             # Componente principal
```

## 🔑 Funcionalidades

### ✅ Autenticación
- Login de usuarios y profesionales
- Registro con validación
- JWT tokens
- Sesión persistente
- Logout

### ✅ Dashboard Cliente
- Búsqueda de profesionales
- Filtros avanzados
- Lista de profesionales desde el backend
- Perfiles detallados

### ✅ Dashboard Profesional
- Perfil del trabajador
- Gestión de oficios
- Disponibilidad

## 🧪 Probar la Aplicación

### 1. Iniciar el Backend
```bash
# En el directorio del backend
npm start
# o
node src/app.js
```

### 2. Iniciar el Frontend
```bash
npm run dev
```

### 3. Abrir en el navegador
```
http://localhost:5173
```

### 4. Registrar un usuario

**Cliente:**
- Email: `cliente@example.com`
- Contraseña: `123456`

**Profesional:**
- Email: `profesional@example.com`
- Contraseña: `123456`
- Oficios: `Plomería, Electricidad`

## 📚 Documentación Adicional

- **[AUTH_SYSTEM.md](./AUTH_SYSTEM.md)** - Sistema de autenticación
- **[components.json](./components.json)** - Configuración de componentes

## 🤝 Integración API

El frontend se comunica con el backend mediante servicios en `src/services/`:

```typescript
// Login
import { login } from '@/services/authService'
const token = await login({ email, password })

// Registro
import { registerUser } from '@/services/userService'
await registerUser({ nombre, email, password, ... })

// Obtener profesionales
import { getAllProfessionals } from '@/services/professionalService'
const professionals = await getAllProfessionals()
```

## 🔒 Seguridad

- Tokens JWT almacenados en localStorage
- Interceptores de axios para autenticación automática
- Redirección en caso de token expirado
- Validación de formularios con Zod

## 📱 Responsive

- Diseño adaptable a móviles, tablets y desktop
- Componentes optimizados con Tailwind CSS

## 🎨 Temas

- Paleta de colores personalizada (#DBA668, #1F1F1F)
- Modo claro (modo oscuro pendiente)

---

## 📄 Template Original: React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
