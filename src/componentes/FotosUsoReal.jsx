import { useState } from "react"
import { FaUser } from "react-icons/fa"

const FotosUsoReal = ({ fotosUsoReal }) => {
  const [fotoActual, setFotoActual] = useState(fotosUsoReal?.[0])

  if (!fotosUsoReal || fotosUsoReal.length === 0) {
    return null
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaUser className="text-2xl text-cyan-400" />
        Fotos de Uso Real
      </h3>
      <div className="space-y-4">
        {/* Imagen principal */}
        <div className="bg-slate-900/50 rounded-lg overflow-hidden">
          <img
            src={fotoActual?.imagen}
            alt={fotoActual?.titulo}
            className="w-full h-auto block"
          />
          {fotoActual?.titulo && (
            <div className="p-3 bg-slate-900/80 text-center">
              <p className="text-slate-300 font-medium">{fotoActual.titulo}</p>
            </div>
          )}
        </div>

        {/* Miniaturas */}
        {fotosUsoReal.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {fotosUsoReal.map((foto, index) => (
              <button
                key={index}
                onClick={() => setFotoActual(foto)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  fotoActual === foto
                    ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                    : "border-slate-700 hover:border-cyan-500/50"
                }`}
              >
                <img
                  src={foto.imagen}
                  alt={foto.titulo}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default FotosUsoReal

