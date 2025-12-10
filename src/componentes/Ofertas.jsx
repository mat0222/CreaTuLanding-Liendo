import { Link } from "react-router-dom"
import { FaFire, FaTag } from "react-icons/fa"
import Item from "./Item"

const Ofertas = ({ productos = [] }) => {
  // Simular ofertas (productos con descuento)
  const ofertas = productos
    .map((producto) => ({
      ...producto,
      precioOriginal: producto.precio * 1.3, // Precio original 30% más caro
      descuento: 30,
    }))
    .slice(0, 4) // Mostrar solo 4 ofertas

  if (ofertas.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaFire className="text-orange-500 text-3xl animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Ofertas Especiales
            </span>
          </h2>
          <FaFire className="text-orange-500 text-3xl animate-pulse" />
        </div>
        <p className="text-center text-slate-400 mb-10 text-lg">
          Aprovecha estas increíbles ofertas por tiempo limitado
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ofertas.map((producto) => (
            <div key={producto.id} className="relative group">
              {/* Badge de descuento */}
              <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-1">
                <FaTag size={14} />
                -{producto.descuento}%
              </div>

              {/* Contenedor personalizado para mostrar precio original */}
              <Link
                to={`/item/${producto.id}`}
                className="block no-underline text-inherit"
              >
                <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-4 transition-all duration-300 cursor-pointer h-full flex flex-col hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_10px_30px_rgba(255,140,0,0.3)]">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-slate-200 mb-2 line-clamp-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3 flex-grow line-clamp-2">
                    {producto.descripcion.substring(0, 80)}...
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 line-through">
                        ${producto.precioOriginal.toFixed(2)}
                      </span>
                      <span className="text-2xl font-bold text-orange-500">
                        ${producto.precio.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">
                      Stock: {producto.stock}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/categoria/juegos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
          >
            Ver Todas las Ofertas
            <FaTag />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Ofertas

