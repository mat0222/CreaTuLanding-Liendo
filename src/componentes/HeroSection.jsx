import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900 py-20 md:py-32">
      {/* Efecto de fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Bienvenido a GameTech
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Tu tienda gamer de confianza. Descubre los mejores juegos, consolas y periféricos para vivir la experiencia gaming que siempre quisiste.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/categoria/juegos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Explorar Juegos
            <FaArrowRight />
          </Link>
          <Link
            to="/categoria/consolas"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-slate-700 transition-all duration-300"
          >
            Ver Consolas
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection




