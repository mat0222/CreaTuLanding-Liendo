import { useState } from "react"
import { FaCamera } from "react-icons/fa"

const GaleriaDetalles = ({ galeriaDetalles }) => {
  const [imagenActual, setImagenActual] = useState(galeriaDetalles?.[0])

  if (!galeriaDetalles || galeriaDetalles.length === 0) {
    return null
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaCamera className="text-2xl text-cyan-400" />
        Puertos y Ángulos
      </h3>
      <div className="space-y-4">
        {/* Imagen principal */}
        <div className="bg-slate-900/50 rounded-lg overflow-hidden">
          <img
            src={imagenActual?.imagen}
            alt={imagenActual?.titulo}
            className="w-full h-auto block"
          />
          {imagenActual?.titulo && (
            <div className="p-3 bg-slate-900/80 text-center">
              <p className="text-slate-300 font-medium">{imagenActual.titulo}</p>
            </div>
          )}
        </div>

        {/* Miniaturas */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {galeriaDetalles.map((item, index) => (
            <button
              key={index}
              onClick={() => setImagenActual(item)}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                imagenActual === item
                  ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                  : "border-slate-700 hover:border-cyan-500/50"
              }`}
            >
              <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GaleriaDetalles

