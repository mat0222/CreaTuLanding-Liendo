import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const ItemListHeader = ({ categoria, greeting }) => {
  const titulo = categoria.charAt(0).toUpperCase() + categoria.slice(1)

  return (
    <div className="bg-gradient-to-b from-cyan-500/10 to-transparent">
      <div className="pt-8 pb-6 px-4 text-center">
        <div className="flex justify-center mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
          >
            <FaHome className="text-sm" />
            <span className="text-sm font-medium">Volver al inicio</span>
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {titulo}
        </h1>
        {greeting && (
          <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-2xl mx-auto">
            {greeting}
          </p>
        )}
      </div>
    </div>
  )
}

export default ItemListHeader

