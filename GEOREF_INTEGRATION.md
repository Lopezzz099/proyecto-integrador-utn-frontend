# 🗺️ Sistema de Ubicación con GeoRef API

## 📋 Descripción

Se ha implementado un sistema de autocompletado para la selección de ubicación usando la API oficial de GeoRef del Gobierno de Argentina.

## 🎯 Características

### ✅ Autocompletado Inteligente
- Búsqueda en tiempo real con debounce (300ms)
- Muestra los primeros 5 resultados mientras escribes
- Filtrado por provincia de Buenos Aires

### ✅ Campos Separados
- **Municipio**: Primer campo a completar (requerido)
- **Localidad**: Se habilita solo después de seleccionar municipio

### ✅ Validación
- Campo de localidad deshabilitado hasta seleccionar municipio
- Validación de campos requeridos
- Mensajes de error contextuales

## 🔧 Componentes Creados

### 1. `AutocompleteInput.tsx`
Componente reutilizable de autocompletado con las siguientes características:
- Búsqueda con debounce
- Dropdown con opciones
- Estados de carga
- Icono de búsqueda y chevron
- Soporte para deshabilitar
- Manejo de errores

### 2. `georefService.ts`
Servicio para interactuar con la API de GeoRef:
- `searchMunicipios(query)` - Buscar municipios
- `searchLocalidades(municipioId, query)` - Buscar localidades
- `getMunicipios(nombre?)` - Obtener todos los municipios
- `getLocalidades(municipio?, nombre?)` - Obtener localidades

## 📡 API Utilizada

**GeoRef API - Datos Abiertos Argentina**
- Base URL: `https://apis.datos.gob.ar/georef/api`
- Documentación: https://datosgobar.github.io/georef-ar-api/

### Endpoints:
```
GET /municipios?provincia=06&nombre={query}&max=5
GET /localidades?provincia=06&municipio={id}&nombre={query}&max=5
```

### Parámetros:
- `provincia=06` - Buenos Aires
- `nombre` - Texto de búsqueda
- `municipio` - ID del municipio (para localidades)
- `max` - Límite de resultados (5 por defecto)
- `campos` - Campos a retornar

## 🎨 Interfaz de Usuario

### Municipio
```
┌─────────────────────────────────────┐
│ 🔍 La Plata                      ▼ │
├─────────────────────────────────────┤
│ La Plata                            │
│ La Matanza                          │
│ Lanús                               │
└─────────────────────────────────────┘
```

### Localidad (habilitada después de municipio)
```
┌─────────────────────────────────────┐
│ 🔍 City                          ▼ │
├─────────────────────────────────────┤
│ City Bell                           │
│ Casco Urbano                        │
└─────────────────────────────────────┘
```

## 💾 Estructura de Datos

### Formulario (RegisterPage)
```typescript
{
  municipio: 'La Plata',          // Nombre del municipio
  municipioId: '060427',          // ID del municipio
  localidad: 'City Bell',         // Nombre de la localidad
  localidadId: '06427010'         // ID de la localidad
}
```

### Enviado al Backend
```json
{
  "ubicacion": {
    "localidad": "La Plata",      // municipio
    "municipio": "City Bell"    // localidad
  }
}
```

## 🔄 Flujo de Uso

1. **Usuario escribe en "Municipio"**
   - Mínimo 2 caracteres
   - Debounce de 300ms
   - Se muestran primeros 5 resultados

2. **Usuario selecciona municipio**
   - Se guarda nombre e ID
   - Se habilita campo "Localidad"
   - Se limpia localidad anterior si existía

3. **Usuario escribe en "Localidad"**
   - Solo funciona si hay municipio seleccionado
   - Búsqueda filtrada por municipio
   - Muestra primeros 5 resultados

4. **Usuario selecciona localidad**
   - Se guarda nombre e ID
   - Formulario listo para continuar

## 🎯 Casos de Uso

### Cliente (Residente)
```
Municipio: La Plata
Localidad: City Bell
→ Backend recibe: localidad="La Plata", municipio="City Bell"
```

### Profesional (Trabajador)
```
Municipio de Cobertura: San Isidro
Localidad de Cobertura: Martínez
→ Backend recibe: localidad="San Isidro", municipio="Martínez"
```

## 🔍 Ejemplos de Búsqueda

### Búsqueda de Municipios
```typescript
// Usuario escribe: "pla"
Resultados:
- La Plata
- Magdalena
- Brandsen

// Usuario escribe: "san"
Resultados:
- San Isidro
- San Fernando
- San Vicente
- San Martín
- San Miguel
```

### Búsqueda de Localidades (Municipio: La Plata)
```typescript
// Usuario escribe: "city"
Resultados:
- City Bell

// Usuario escribe: "villa"
Resultados:
- Villa Elisa
- Villa Elvira
- Villa Garibaldi
```

## ⚡ Performance

- **Debounce**: 300ms - Reduce peticiones innecesarias
- **Límite**: 5 resultados - Dropdown manejable
- **Cache**: No implementado (API pública gratuita)

## 🐛 Manejo de Errores

### API no disponible
```typescript
// Se retorna array vacío
return []
```

### Sin resultados
```
┌─────────────────────────────────────┐
│ No se encontraron resultados       │
└─────────────────────────────────────┘
```

### Localidad sin municipio
```
⚠️ Primero selecciona un municipio
```

## 🔒 Validaciones

### Paso 2 del Registro
```typescript
step2Schema.parse({
  phone: '1234567890',
  municipio: 'La Plata',      // Requerido (min 2 caracteres)
  localidad: 'City Bell'      // Requerido (min 2 caracteres)
})
```

### Mensajes de Error
- `"Debes seleccionar un municipio"`
- `"Debes seleccionar una localidad"`
- `"Primero selecciona un municipio"`

## 🎨 Estilos y UX

### Estados del Input
- **Normal**: Border gris
- **Focus**: Border dorado (#DBA668) con ring
- **Error**: Border rojo con mensaje
- **Disabled**: Background gris, cursor not-allowed

### Iconos
- **🔍 Search**: Indica campo de búsqueda
- **⏳ Loader**: Indica carga en proceso
- **▼ Chevron**: Indica dropdown (rota 180° cuando abierto)

### Animaciones
- Fade-in del dropdown
- Hover en opciones
- Rotación del chevron
- Spinner de carga

## 📱 Responsive

- Input adaptable a todos los tamaños
- Dropdown con max-height y scroll
- Touch-friendly para móviles

## 🚀 Mejoras Futuras

### Implementables
- [ ] Cache de resultados en sessionStorage
- [ ] Soporte para más provincias
- [ ] Búsqueda por coordenadas GPS
- [ ] Mapa interactivo para selección
- [ ] Guardar ubicaciones recientes
- [ ] Autodetección de ubicación (Geolocation API)

### Backend
- [ ] Guardar IDs de GeoRef en la base de datos
- [ ] Indexar por ubicación para búsquedas
- [ ] Calcular distancias reales entre usuarios

## 📚 Referencias

- **GeoRef API**: https://datosgobar.github.io/georef-ar-api/
- **Datos Abiertos Argentina**: https://datos.gob.ar/
- **Provincia de Buenos Aires**: Código `06`

## 🎓 Tecnologías Usadas

- React Hooks (useState, useEffect, useRef)
- TypeScript interfaces
- Fetch API
- Debouncing
- Click outside detection
- Componente controlado

---

**Implementado**: 28 de Noviembre, 2025
**Versión**: 1.0.0
