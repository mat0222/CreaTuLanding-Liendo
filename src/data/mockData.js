// Mock de datos de productos
const productos = [
  {
    id: 1,
    nombre: "PlayStation 5",
    precio: 499.99,
    categoria: "consolas",
    subcategoria: "PlayStation",
    imagen: "/productos/play5.jpg",
    descripcion: "La consola de nueva generación de Sony con gráficos 4K y ray tracing.",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Xbox Series X",
    precio: 499.99,
    categoria: "consolas",
    subcategoria: "Xbox",
    imagen: "/productos/xboxx.jpg",
    descripcion: "La consola más potente de Microsoft con 4K a 60fps.",
    stock: 8,
  },
  {
    id: 3,
    nombre: "Nintendo Switch",
    precio: 299.99,
    categoria: "consolas",
    subcategoria: "Nintendo",
    imagen: "/productos/nintendo.jpg",
    descripcion: "Consola híbrida que puedes usar en casa o en movimiento.",
    stock: 15,
  },
  {
    id: 4,
    nombre: "Spider-Man 2",
    precio: 69.99,
    categoria: "juegos",
    subcategoria: "PlayStation",
    imagen: "/productos/spiderman.jpg",
    descripcion: "Aventura épica con Peter Parker y Miles Morales.",
    stock: 20,
  },
  {
    id: 5,
    nombre: "Halo Infinite",
    precio: 59.99,
    categoria: "juegos",
    subcategoria: "Xbox",
    imagen: "/productos/halo.jpg",
    descripcion: "La épica aventura del Jefe Maestro continúa.",
    stock: 18,
  },
  {
    id: 6,
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    precio: 69.99,
    categoria: "juegos",
    subcategoria: "Nintendo",
    imagen: "/productos/zelda.jpg",
    descripcion: "Nueva aventura de Link en Hyrule.",
    stock: 12,
  },
  {
    id: 7,
    nombre: "Mando DualSense",
    precio: 69.99,
    categoria: "perifericos",
    subcategoria: "Mandos",
    imagen: "/productos/dualsense.jpg",
    descripcion: "Mando inalámbrico para PlayStation 5 con retroalimentación háptica.",
    stock: 25,
  },
  {
    id: 8,
    nombre: "Mando Xbox Wireless",
    precio: 59.99,
    categoria: "perifericos",
    subcategoria: "Mandos",
    imagen: "/productos/xboxmando.jpg",
    descripcion: "Mando inalámbrico oficial de Xbox con diseño ergonómico.",
    stock: 22,
  },
  {
    id: 9,
    nombre: "Auriculares Gaming HyperX",
    precio: 89.99,
    categoria: "perifericos",
    subcategoria: "Auriculares",
    imagen: "/productos/auriculares.jpg",
    descripcion: "Auriculares gaming con sonido surround 7.1 y micrófono retráctil.",
    stock: 30,
  },
  {
    id: 10,
    nombre: "Teclado Mecánico RGB",
    precio: 129.99,
    categoria: "perifericos",
    subcategoria: "Teclados",
    imagen: "/productos/teclado.jpg",
    descripcion: "Teclado mecánico con switches RGB y retroiluminación personalizable.",
    stock: 15,
  },
  {
    id: 11,
    nombre: "Mouse Gaming Pro",
    precio: 49.99,
    categoria: "perifericos",
    subcategoria: "Mouse",
    imagen: "/productos/mouse.jpg",
    descripcion: "Mouse gaming de alta precisión con sensor óptico avanzado.",
    stock: 20,
  },
  {
    id: 12,
    nombre: "God of War Ragnarök",
    precio: 69.99,
    categoria: "juegos",
    subcategoria: "PlayStation",
    imagen: "/productos/godofwar.jpg",
    descripcion: "La épica continuación de la saga de Kratos y Atreus.",
    stock: 16,
  },
]


export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 1000)
  })
}


export const getProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = categoria
        ? productos.filter((producto) => producto.categoria === categoria)
        : productos
      resolve(productosFiltrados)
    }, 1000)
  })
}


export const getSubcategoriasPorCategoria = (categoria) => {
  if (!categoria) return []
  const productosCategoria = productos.filter((p) => p.categoria === categoria)
  const subcategorias = [...new Set(productosCategoria.map((p) => p.subcategoria))]
  return subcategorias
}


export const getProductoPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(id))
      if (producto) {
        resolve(producto)
      } else {
        reject(new Error("Producto no encontrado"))
      }
    }, 1000)
  })
}

