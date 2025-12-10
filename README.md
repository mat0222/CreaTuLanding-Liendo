# 🎮 GameTech - E-commerce de Videojuegos y Tecnología Gaming

E-commerce desarrollado en React para la venta de consolas, videojuegos y periféricos gaming. Incluye carrito de compras, integración con Firestore, y una interfaz moderna con Tailwind CSS.

## 📋 Descripción

GameTech es una aplicación web de comercio electrónico especializada en productos gaming. Permite a los usuarios explorar catálogos de consolas, juegos y periféricos, agregar productos al carrito, y realizar compras con un sistema de checkout completo. La aplicación utiliza Firebase Firestore como base de datos y cuenta con un sistema de migración de datos desde archivos mock.

## 👤 Autor

**Mateo**

## 🛠️ Tecnologías y Librerías

### Dependencias Principales
- **React** (^19.1.1) - Biblioteca para construir interfaces de usuario
- **React Router DOM** (^7.9.6) - Enrutamiento para aplicaciones React
- **Firebase** (^12.6.0) - Backend como servicio (Firestore para base de datos)
- **React Icons** (^5.5.0) - Iconos para React
- **Tailwind CSS** (^3.4.18) - Framework CSS utility-first

### Dependencias de Desarrollo
- **Vite** (^7.1.7) - Build tool y servidor de desarrollo
- **ESLint** (^9.36.0) - Linter para JavaScript/React
- **PostCSS** (^8.5.6) - Procesador de CSS
- **Autoprefixer** (^10.4.22) - Agregar prefijos de navegadores automáticamente

## 📦 Requisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (o yarn/pnpm equivalente)
- Cuenta de **Firebase** con proyecto configurado (opcional, puede funcionar con datos mock)

## 🚀 Instalación

1. **Clonar el repositorio** (o descargar el proyecto)
   ```bash
   git clone <url-del-repositorio>
   cd game-tech
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase** (opcional)
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Copiar las credenciales de configuración
   - Actualizar `src/firebase/config.js` con tus credenciales

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
game-tech/
├── public/
│   ├── productos/          # Imágenes de productos
│   └── logo.png            # Logo de la aplicación
├── src/
│   ├── componentes/        # Componentes React
│   │   ├── Admin/         # Componentes de administración
│   │   ├── Cart/          # Componentes del carrito
│   │   ├── ItemDetailContainer/  # Contenedor de detalle
│   │   └── ItemListContainer/    # Contenedor de lista
│   ├── context/           # Context API (CartContext)
│   ├── data/              # Datos mock
│   ├── firebase/          # Configuración y servicios de Firebase
│   ├── hooks/            # Custom hooks (useProducts)
│   ├── utils/             # Utilidades (migración a Firestore)
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Punto de entrada
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### Componentes Principales

- **NavBar**: Barra de navegación con categorías y carrito
- **Home**: Página principal con hero, carrusel y ofertas
- **ItemListContainer**: Lista de productos por categoría
- **ItemDetailContainer**: Detalle de producto individual
- **Cart**: Carrito de compras y checkout
- **CheckoutForm**: Formulario de finalización de compra

## ✨ Características

- 🛒 **Carrito de Compras**: Agregar, eliminar y modificar cantidades
- 🔍 **Filtrado por Categorías**: Juegos, Consolas, Periféricos
- 📱 **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- 🔥 **Integración Firebase**: Base de datos en tiempo real
- 💾 **Persistencia Local**: Carrito guardado en localStorage
- 🎨 **UI Moderna**: Diseño con Tailwind CSS y gradientes
- ⚡ **Rendimiento Optimizado**: Carga rápida con Vite

## 🔮 Mejoras a Futuro

### Funcionalidades
- [ ] Sistema de autenticación de usuarios
- [ ] Historial de compras
- [ ] Sistema de favoritos/wishlist
- [ ] Búsqueda de productos
- [ ] Filtros avanzados (precio, marca, etc.)
- [ ] Sistema de reseñas y calificaciones
- [ ] Integración con pasarelas de pago (Stripe, Mercado Pago)
- [ ] Panel de administración completo
- [ ] Gestión de inventario en tiempo real
- [ ] Notificaciones push

### Técnicas
- [ ] Tests unitarios y de integración
- [ ] Optimización de imágenes (lazy loading)
- [ ] PWA (Progressive Web App)
- [ ] Internacionalización (i18n)
- [ ] Mejora de SEO
- [ ] Analytics y tracking
- [ ] Optimización de bundle size
- [ ] Implementación de caché

### UX/UI
- [ ] Modo oscuro/claro
- [ ] Animaciones más fluidas
- [ ] Mejora de accesibilidad (ARIA)
- [ ] Soporte para múltiples idiomas
- [ ] Mejora de feedback visual

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🔧 Configuración Adicional

### Variables de Entorno

Para producción, puedes crear un archivo `.env`:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
```

### Migración de Datos

Para migrar productos desde `mockData.js` a Firestore:

1. Accede a `/admin/migrate` en la aplicación
2. Haz clic en "Migrar Productos"
3. Los productos se migrarán automáticamente a Firestore

## 📄 Licencia

Este proyecto es privado y de uso personal.

## 🤝 Contribuciones

Este es un proyecto personal. Si deseas contribuir, por favor contacta al autor.

---

**Desarrollado con ❤️ usando React y Firebase**

