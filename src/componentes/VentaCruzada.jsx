import { useState, useEffect } from "react"
import { FaShoppingCart } from "react-icons/fa"

const VentaCruzada = ({ accesoriosRecomendados, onAccesoriosChange }) => {
  const [accesoriosSeleccionados, setAccesoriosSeleccionados] = useState({})

  if (!accesoriosRecomendados || accesoriosRecomendados.length === 0) {
    return null
  }

  // Notificar al componente padre cuando cambien los accesorios seleccionados
  useEffect(() => {
    if (onAccesoriosChange) {
      const accesorios = accesoriosRecomendados.filter(
        (accesorio) => accesoriosSeleccionados[accesorio.id]
      )
      console.log("VentaCruzada: Accesorios seleccionados:", accesorios)
      onAccesoriosChange(accesorios)
    }
  }, [accesoriosSeleccionados, accesoriosRecomendados, onAccesoriosChange])

  const toggleAccesorio = (accesorio) => {
    setAccesoriosSeleccionados((prev) => ({
      ...prev,
      [accesorio.id]: !prev[accesorio.id],
    }))
  }

  const precioTotal = accesoriosRecomendados.reduce((total, accesorio) => {
    return total + (accesoriosSeleccionados[accesorio.id] ? accesorio.precio : 0)
  }, 0)

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaShoppingCart className="text-2xl text-cyan-400" />
        Accesorios Recomendados
      </h3>
      <p className="text-sm text-slate-400 mb-4">
        ¿Necesitas algo más? Añade estos accesorios esenciales a tu pedido:
      </p>
      <div className="space-y-3">
        {accesoriosRecomendados.map((accesorio) => (
          <label
            key={accesorio.id}
            className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30 hover:border-cyan-500/50 transition-colors cursor-pointer"
          >
            <input
              type="checkbox"
              checked={accesoriosSeleccionados[accesorio.id] || false}
              onChange={() => toggleAccesorio(accesorio)}
              className="w-5 h-5 text-cyan-500 rounded border-slate-600 focus:ring-cyan-500 focus:ring-2"
            />
            <div className="flex-grow">
              <div className="font-semibold text-slate-200">{accesorio.nombre}</div>
            </div>
            <div className="text-lg font-bold text-cyan-500">${accesorio.precio}</div>
          </label>
        ))}
      </div>
      {precioTotal > 0 && (
        <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 font-medium">Total accesorios:</span>
            <span className="text-xl font-bold text-cyan-400">+${precioTotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default VentaCruzada

