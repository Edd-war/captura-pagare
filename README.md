# Sistema de Captura de Pagaré

Sistema web moderno desarrollado en Vue.js 3 para la gestión y consulta de movimientos de pagarés. Proporciona una interfaz intuitiva y responsiva para la administración de datos financieros con funcionalidades de filtrado avanzado y visualización de datos.

## 🚀 Demo en Vivo

**🌐 Aplicación Desplegada:** [http://app-front-captura-pagare.s3-website-us-east-1.amazonaws.com/](http://app-front-captura-pagare.s3-website-us-east-1.amazonaws.com/)

## 📋 Acceso Rápido a Documentación

| Documento                     | Descripción                                                                                             | Enlace                                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 📋 **Documentación Técnica**  | Especificaciones técnicas completas, arquitectura del sistema, tecnologías utilizadas y configuraciones | **[Ver Documentación](https://github.com/Edd-war/captura-pagare/blob/main/DOCUMENTACION_TECNICA.md)** |
| 📊 **Reporte de Actividades** | Cronograma de desarrollo, actividades realizadas, resultados alcanzados y deployment                    | **[Ver Reporte](https://github.com/Edd-war/captura-pagare/blob/main/REPORTE_ACTIVIDADES.md)**         |

## ✨ Características

- 🔍 **Sistema de Filtros Avanzados** - Búsqueda por número de cliente y estado de recibo
- 📊 **Visualización de Datos** - Tabla responsiva con paginación automática
- 🌙 **Modo Oscuro/Claro** - Toggle para cambiar tema de la aplicación
- 📱 **Diseño Responsivo** - Compatible con dispositivos móviles y desktop
- ⚡ **Performance Optimizada** - Debounce en búsquedas y lazy loading
- 🔧 **TypeScript** - Tipado estricto para mayor confiabilidad

## 🛠️ Stack Tecnológico

- **Frontend:** Vue.js 3.5.18 con Composition API
- **Lenguaje:** TypeScript 5.8.0
- **UI Framework:** PrimeVue 4.3.7 + Tailwind CSS 4.1.12
- **Build Tool:** Vite 7.0.6
- **Estado:** Pinia 3.0.3
- **Routing:** Vue Router 4.5.1
- **Testing:** Vitest + Cypress
- **Deployment:** AWS S3 Static Website Hosting

## 📋 Requisitos del Sistema

- **Node.js:** ^20.19.0 || >=22.12.0
- **Package Manager:** npm/yarn/pnpm

## 🔧 IDE Recomendado

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desactivar Vetur)

## ⚙️ Configuración TypeScript

Para soporte completo de TypeScript con archivos `.vue`, utilizamos `vue-tsc` en lugar de `tsc`. Asegúrate de tener [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) instalado en tu editor.

## 🚀 Instalación y Configuración

### Clonar el repositorio

```bash
git clone https://github.com/Edd-war/captura-pagare.git
cd captura-pagare
```

### Instalar dependencias

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

## 🧪 Testing

### Pruebas unitarias con [Vitest](https://vitest.dev/)

```bash
npm run test:unit
```

### Pruebas E2E con [Cypress](https://www.cypress.io/)

Para desarrollo (más rápido):

```bash
npm run test:e2e:dev
```

Para producción (recomendado antes del deploy):

```bash
npm run build
npm run test:e2e
```

## 🔍 Linting y Formateo

### Linting con [ESLint](https://eslint.org/)

```bash
npm run lint
```

### Formateo con Prettier

```bash
npm run format
```

## 📁 Estructura del Proyecto

```
captura-pagare/
├── src/
│   ├── App.vue                 # Componente principal
│   ├── main.ts                 # Punto de entrada
│   ├── components/             # Componentes reutilizables
│   ├── models/
│   │   └── movimiento.ts       # Interfaces TypeScript
│   ├── router/
│   │   └── index.ts           # Configuración de rutas
│   ├── services/
│   │   └── CustomerService.ts  # Servicios de API
│   ├── stores/
│   │   └── counter.ts         # Stores de Pinia
│   └── views/
│       └── FiltroView.vue     # Vista principal
├── cypress/                   # Pruebas E2E
├── public/                    # Assets estáticos
└── dist/                      # Build de producción
```

## 🌐 Deployment

La aplicación está desplegada en AWS S3 con hosting de sitio web estático:

- **URL:** http://app-front-captura-pagare.s3-website-us-east-1.amazonaws.com/
- **Región:** us-east-1
- **CDN Ready:** Compatible con CloudFront
- **Auto-scaling:** Nativo de AWS S3

## 📖 Documentación

Para documentación técnica detallada, consulta:

- 📋 **[Documentación Técnica](https://github.com/Edd-war/captura-pagare/blob/main/DOCUMENTACION_TECNICA.md)** - Especificaciones técnicas completas, arquitectura y configuraciones
- 📊 **[Reporte de Actividades](https://github.com/Edd-war/captura-pagare/blob/main/REPORTE_ACTIVIDADES.md)** - Cronograma de desarrollo, actividades realizadas y resultados

### 📑 Documentos Locales

Si estás en el repositorio local, también puedes acceder a:

- [Documentación Técnica Local](./DOCUMENTACION_TECNICA.md)
- [Reporte de Actividades Local](./REPORTE_ACTIVIDADES.md)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y pertenece a Eduardo Arroyo.

## 👨‍💻 Autor

**Eduardo Arroyo** - [Edd-war](https://github.com/Edd-war)

---

⭐ ¡Dale una estrella al proyecto si te ha sido útil!
