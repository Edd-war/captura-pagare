# Documentación Técnica - Sistema de Captura de Pagaré

## Información General del Proyecto

**Nombre del Proyecto:** captura-pagare  
**Versión:** 0.0.0  
**Fecha de Desarrollo:** Septiembre 2025  
**Desarrollador:** Eduardo Arroyo  
**Repositorio:** https://github.com/Edd-war/captura-pagare

## Descripción del Proyecto

Sistema web desarrollado en Vue.js 3 para la gestión y consulta de movimientos de pagarés. La aplicación permite filtrar y visualizar información de clientes, movimientos financieros y recibos asociados, proporcionando una interfaz intuitiva y responsiva para la administración de datos financieros.

## Arquitectura Tecnológica

### Frontend

- **Framework:** Vue.js 3.5.18 con Composition API
- **Lenguaje:** TypeScript 5.8.0
- **Build Tool:** Vite 7.0.6
- **UI Framework:** PrimeVue 4.3.7 con Tailwind CSS 4.1.12
- **Estado:** Pinia 3.0.3
- **Routing:** Vue Router 4.5.1

### Herramientas de Desarrollo

- **Testing:**
  - Vitest 3.2.4 (Unit Testing)
  - Cypress 14.5.3 (E2E Testing)
- **Linting:** ESLint 9.31.0
- **Formatting:** Prettier 3.6.2
- **Type Checking:** Vue TSC 3.0.4

### Dependencias de Producción

```json
{
  "@primeuix/themes": "^1.2.3",
  "@tailwindcss/vite": "^4.1.12",
  "pinia": "^3.0.3",
  "primevue": "^4.3.7",
  "tailwindcss-primeui": "^0.6.1",
  "vue": "^3.5.18",
  "vue-router": "^4.5.1"
}
```

## Estructura del Proyecto

```
captura-pagare/
├── src/
│   ├── App.vue                 # Componente principal con toggle de modo oscuro
│   ├── main.ts                 # Punto de entrada de la aplicación
│   ├── components/             # Componentes reutilizables
│   ├── models/
│   │   └── movimiento.ts       # Interfaces TypeScript para datos
│   ├── router/
│   │   └── index.ts           # Configuración de rutas
│   ├── services/
│   │   └── CustomerService.ts  # Servicio para API calls
│   ├── stores/
│   │   └── counter.ts         # Store de Pinia
│   └── views/
│       └── FiltroView.vue     # Vista principal de filtros
├── cypress/                   # Configuración de pruebas E2E
├── public/                    # Assets estáticos
└── [archivos de configuración]
```

## Funcionalidades Implementadas

### 1. Sistema de Filtros Avanzados

- **Filtro por Número de Cliente:** Campo de texto con debounce de 1 segundo
- **Filtro por Recibo:** Toggle button para incluir/excluir registros con recibo
- **Búsqueda en Tiempo Real:** Los filtros se aplican automáticamente al cambiar valores

### 2. Visualización de Datos

- **DataTable Responsiva:** Tabla con paginación automática (10 registros por página)
- **Columnas Configuradas:**
  - Número de Cliente
  - Nombre
  - Movimiento
  - Consecutivo
  - Importe (formateo de moneda mexicana)
  - Sucursal
  - Fecha de Emisión (formato DD/MM/YYYY)
  - Recibo

### 3. Interfaz de Usuario

- **Modo Oscuro/Claro:** Toggle global para cambiar tema
- **Diseño Responsivo:** Adaptable a dispositivos móviles y desktop
- **Loading States:** Indicadores de carga durante las consultas
- **Estados Vacíos:** Mensajes informativos cuando no hay datos

### 4. Servicios y API

- **CustomerService:** Servicio para consultas a API externa
- **Manejo de Parámetros:** Envío de filtros como query parameters
- **Gestión de Errores:** Estructura preparada para manejo de errores HTTP

## Modelos de Datos

### Interface Movimiento

```typescript
export interface Movimiento {
  id: number
  numeroCliente: string
  nombre: string
  movimiento: string
  consecutivo: string | number
  importe: number
  fechaEmision: Date | string
  recibo: string | boolean
}
```

### Type FiltrosMovimiento

```typescript
export type FiltrosMovimiento = Pick<Movimiento, 'numeroCliente' | 'recibo'>
```

## Características Técnicas

### Performance

- **Debounce:** Implementado en búsquedas para evitar requests excesivos
- **Lazy Loading:** Carga diferida de componentes de vista
- **Tree Shaking:** Optimización automática del bundle con Vite

### Accesibilidad

- **Labels Semánticos:** Uso correcto de etiquetas para formularios
- **Navegación por Teclado:** Compatible con navegación sin mouse
- **Contraste:** Soporte para modo oscuro/claro

### Escalabilidad

- **Composición API:** Uso de Vue 3 Composition API para mejor reutilización
- **TypeScript:** Tipado estricto para prevenir errores en tiempo de ejecución
- **Modular:** Arquitectura basada en módulos independientes

## Scripts de NPM Configurados

```json
{
  "dev": "vite", // Servidor de desarrollo
  "build": "run-p type-check \"build-only {@}\" --", // Build de producción
  "preview": "vite preview", // Preview del build
  "test:unit": "vitest", // Pruebas unitarias
  "test:e2e": "cypress run --e2e", // Pruebas E2E
  "lint": "eslint . --fix", // Linting y auto-fix
  "format": "prettier --write src/" // Formateo de código
}
```

## Configuración de Build

### Vite Configuration

- Hot Module Replacement (HMR) habilitado
- Optimización automática de assets
- Support para Vue SFC (Single File Components)

### TypeScript Configuration

- Strict mode habilitado
- Path mapping configurado
- Soporte completo para Vue 3 + TypeScript

## Testing Strategy

### Unit Testing (Vitest)

- Framework configurado para pruebas unitarias
- Soporte para mocking de módulos
- Coverage reports disponibles

### E2E Testing (Cypress)

- Configuración para pruebas end-to-end
- Tests contra servidor de desarrollo y producción
- Visual regression testing capability

## Despliegue y Producción

### Build Process

El proyecto se compila exitosamente utilizando el comando:

```bash
npm run build
```

### Deployment en AWS S3

✅ **Compilación Exitosa:** El proyecto se compiló sin errores utilizando Vite  
✅ **Despliegue Completado:** La aplicación se desplegó correctamente en un bucket de AWS S3  
✅ **Configuración Web:** El bucket está configurado para servir contenido web estático  
✅ **Acceso Público:** La aplicación es accesible públicamente a través de la URL del bucket

**🌐 URL de Acceso:** http://app-front-captura-pagare.s3-website-us-east-1.amazonaws.com/

### Características del Deploy

- **Hosting:** AWS S3 Static Website Hosting
- **CDN:** Compatible con CloudFront para distribución global
- **HTTPS:** Soporte para certificados SSL/TLS
- **Escalabilidad:** Auto-scaling automático basado en demanda

## Requisitos del Sistema

### Node.js

- **Versión requerida:** ^20.19.0 || >=22.12.0
- **Package Manager:** npm/yarn/pnpm

### Navegadores Soportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Comandos de Instalación y Ejecución

```bash
# Instalación de dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Ejecutar tests
npm run test:unit
npm run test:e2e

# Linting y formateo
npm run lint
npm run format
```

## Conclusiones

El sistema de Captura de Pagaré representa una solución moderna y escalable para la gestión de movimientos financieros. Utilizando las mejores prácticas de desarrollo frontend y un stack tecnológico robusto, la aplicación ofrece:

- **Rendimiento Óptimo:** Gracias a Vite y las optimizaciones de Vue 3
- **Experiencia de Usuario Superior:** Interfaz intuitiva con PrimeVue y Tailwind CSS
- **Mantenibilidad:** Código TypeScript bien estructurado y documentado
- **Escalabilidad:** Arquitectura preparada para crecimiento futuro
- **Despliegue Exitoso:** Implementación completa en infraestructura AWS

La aplicación está lista para producción y puede servir como base para futuras funcionalidades del sistema financiero.
