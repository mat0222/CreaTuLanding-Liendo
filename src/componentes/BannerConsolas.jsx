import { Link } from "react-router-dom"
import { FaGamepad, FaArrowRight } from "react-icons/fa"

const BannerConsolas = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-pink-500/10 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contenido de texto */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/50">
              <FaGamepad className="text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Nueva Generación</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Consolas de Nueva Generación
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-xl mx-auto md:mx-0">
              Experimenta la potencia de las consolas más avanzadas. Gráficos 4K, ray tracing, y rendimiento increíble en cada juego.
            </p>
            <Link
              to="/categoria/consolas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Ver Todas las Consolas
              <FaArrowRight />
            </Link>
          </div>

          {/* Cards de consolas */}
          <div className="grid grid-cols-3 gap-4">
            {/* PlayStation */}
            <Link
              to="/categoria/consolas"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-white mb-2">PS5</div>
                <div className="text-xs text-blue-200">PlayStation</div>
              </div>
            </Link>

            {/* Xbox */}
            <Link
              to="/categoria/consolas"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-600 to-green-800 p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 text-center">
                <div className="text-3xl font-bold text-white mb-2">XBOX</div>
                <div className="text-xs text-green-200">Series X</div>
              </div>
            </Link>

            {/* Nintendo */}
            <Link
              to="/categoria/consolas"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-red-800 p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10 text-center">
                <div className="text-2xl font-bold text-white mb-2">SWITCH</div>
                <div className="text-xs text-red-200">Nintendo</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerConsolas




