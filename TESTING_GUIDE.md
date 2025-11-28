# 🚀 Cómo Probar la Integración Frontend-Backend

## ✅ Requisitos Previos

1. **Backend corriendo** en `http://localhost:4000`
2. **Node.js** instalado (v16 o superior)
3. **npm** instalado

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

## ⚙️ Configuración

1. El archivo `.env` ya está configurado con:
   ```env
   VITE_API_BASE_URL=http://localhost:4000/api
   ```

2. Si tu backend está en otra URL, modifica el `.env`

## 🏃 Iniciar el Frontend

```bash
npm run dev
```

El frontend se iniciará en `http://localhost:5173`

## 🧪 Probar la Integración

### 1️⃣ Registro de Usuario (Cliente)

1. Ve a la página principal
2. Haz clic en "Registrarse"
3. Selecciona el rol de **Cliente** (por defecto)
4. Completa el formulario:
   - **Paso 1**: Nombre, Apellido, Email
   - **Paso 2**: Teléfono, Ubicación
   - **Paso 3**: Contraseña y Confirmar Contraseña
5. Haz clic en "Crear cuenta"

**Datos de ejemplo:**
```
Nombre: Juan
Apellido: Pérez
Email: juan@example.com
Teléfono: 1234567890
Ubicación: Centro, Buenos Aires
Contraseña: 123456
```

### 2️⃣ Registro de Profesional (Trabajador)

1. Ve a la página principal
2. Haz clic en "Registrarse"
3. Selecciona el rol de **Profesional**
4. Completa el formulario:
   - **Paso 1**: Nombre, Apellido, Email
   - **Paso 2**: Teléfono, Ubicación
   - **Paso 3**: Oficios/Habilidades (separados por comas)
   - **Paso 4**: Contraseña y Confirmar Contraseña
5. Haz clic en "Crear cuenta"

**Datos de ejemplo:**
```
Nombre: María
Apellido: García
Email: maria@example.com
Teléfono: 0987654321
Ubicación: Norte, Córdoba
Oficios: Plomería, Gasista
Contraseña: 123456
```

### 3️⃣ Login

1. Si ya registraste un usuario, haz clic en "Iniciar sesión"
2. Ingresa tu email y contraseña
3. El sistema te redirigirá al dashboard correspondiente:
   - **Cliente** → Dashboard de búsqueda de profesionales
   - **Profesional** → Dashboard de perfil del trabajador

### 4️⃣ Dashboard de Cliente

Una vez iniciada sesión como cliente:
- Verás la lista de profesionales disponibles (cargados desde el backend)
- Puedes buscar por nombre, servicio o especialidad
- Puedes filtrar por categoría, ubicación, calificación, etc.
- Si el backend no tiene profesionales, verás datos mock de ejemplo

### 5️⃣ Dashboard de Profesional

Una vez iniciada sesión como profesional:
- Verás tu perfil con tus datos
- Puedes editar tu información
- Verás tus oficios y calificaciones

## 🔍 Verificar en la Consola del Navegador

Abre las **DevTools** (F12) y:

1. Ve a la pestaña **Network**
2. Realiza una acción (login, registro, etc.)
3. Deberías ver las peticiones a `http://localhost:4000/api`

**Peticiones esperadas:**

- `POST /api/usuarios` (registro)
- `POST /api/usuarios/login` (login)
- `GET /api/usuarios/:id` (obtener datos del usuario)
- `GET /api/profesionales` (obtener lista de profesionales)

## 🐛 Troubleshooting

### Error: "Network Error" o "ERR_CONNECTION_REFUSED"

**Solución:** Verifica que el backend esté corriendo en `http://localhost:4000`

```bash
# En el directorio del backend
node src/app.js
# o
npm start
```

### Error: "CORS policy"

**Solución:** El backend debe tener configurado CORS para permitir peticiones desde `http://localhost:5173`

Verifica en el backend que tenga algo como:

```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
```

### Error: "Token inválido" o "401 Unauthorized"

**Solución:** Limpia el localStorage y vuelve a hacer login

```javascript
// En la consola del navegador
localStorage.clear()
location.reload()
```

### Los profesionales no se cargan

**Solución:** 
1. Verifica que el backend tenga profesionales registrados
2. Si no hay, el frontend usará datos mock automáticamente
3. Registra al menos un profesional para ver datos reales

## 📊 Datos de Prueba del Backend

Si necesitas datos de prueba en el backend, puedes usar estos SQL inserts o usar el registro del frontend:

```sql
-- Usuario cliente
INSERT INTO usuarios (nombre, email, password, telefono, condiciones, rol_id, ubicacion_id)
VALUES ('Juan Pérez', 'juan@example.com', '123456', '1234567890', '1', 2, 1);

-- Profesional
INSERT INTO usuarios (nombre, email, password, telefono, condiciones, rol_id, ubicacion_id)
VALUES ('María García', 'maria@example.com', '123456', '0987654321', '1', 3, 2);

INSERT INTO profesionales (usuario_id, descripcion, verificacion, estado, disponibilidad, promedio)
VALUES (2, 'Plomera con 10 años de experiencia', '0', '1', 'Lunes a Viernes 9-18hs', 0);
```

## 🎯 Flujo Completo de Prueba

### Escenario 1: Cliente busca profesional

1. ✅ Registrarse como cliente
2. ✅ El sistema hace login automáticamente
3. ✅ Se redirige al dashboard de cliente
4. ✅ Se cargan los profesionales desde el backend
5. ✅ Se pueden aplicar filtros y búsquedas
6. ✅ Se muestra la información de cada profesional

### Escenario 2: Profesional crea su perfil

1. ✅ Registrarse como profesional
2. ✅ El sistema hace login automáticamente
3. ✅ Se redirige al dashboard de profesional
4. ✅ Se muestra el perfil con los datos registrados
5. ✅ Se pueden ver los oficios asociados

## 📱 URLs Importantes

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000/api
- **Login**: http://localhost:5173 → Click en "Iniciar sesión"
- **Registro**: http://localhost:5173 → Click en "Registrarse"

## 🔐 Credenciales de Prueba

Después de registrar usuarios, puedes usar:

**Cliente:**
```
Email: juan@example.com
Contraseña: 123456
```

**Profesional:**
```
Email: maria@example.com
Contraseña: 123456
```

## 📝 Notas

- Los tokens JWT expiran según la configuración del backend
- Las contraseñas deben coincidir en el campo "Contraseña" y "Confirmar Contraseña"
- Los oficios se crean automáticamente si no existen en el backend
- La ubicación debe tener formato: "localidad, municipio" (ej: "Centro, Buenos Aires")

## ✨ ¡Listo!

Si todo funciona correctamente, deberías poder:
- ✅ Registrar usuarios y profesionales
- ✅ Hacer login
- ✅ Ver el dashboard correspondiente
- ✅ Ver datos desde el backend
- ✅ Navegar entre diferentes páginas manteniendo la sesión
