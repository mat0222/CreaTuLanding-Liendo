import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const Carousel = ({ productos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const juegos = productos.filter((p) => p.categoria === "juegos").slice(0, 5)

  useEffect(() => {
    if (juegos.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % juegos.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [juegos.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + juegos.length) % juegos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % juegos.length)
  }

  if (juegos.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Juegos Destacados
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {juegos.map((juego, index) => (
                <div key={juego.id} className="min-w-full">
                  <Link
                    to={`/item/${juego.id}`}
                    className="block relative group"
                  >
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                      <img
                        src={juego.imagen}
                        alt={juego.nombre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Información del juego */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                          {juego.nombre}
                        </h3>
                        <p className="text-slate-300 mb-4 text-lg md:text-xl max-w-2xl">
                          {juego.descripcion}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-3xl md:text-4xl font-bold text-cyan-400">
                            ${juego.precio}
                          </span>
                          <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/50">
                            Ver Detalles
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          {juegos.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Anterior"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Siguiente"
              >
                <FaChevronRight size={24} />
              </button>
            </>
          )}

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-4">
            {juegos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-cyan-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel




