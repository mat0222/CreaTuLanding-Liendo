import { useState } from "react"

const SelectorVariantes = ({ variantes, onVarianteChange }) => {
  const [varianteSeleccionada, setVarianteSeleccionada] = useState(
    variantes?.find((v) => v.destacado)?.id || variantes?.[0]?.id
  )

  if (!variantes || variantes.length === 0) {
    return null
  }

  const handleVarianteChange = (variante) => {
    setVarianteSeleccionada(variante.id)
    if (onVarianteChange) {
      onVarianteChange(variante)
    }
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4">Selecciona el modelo</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {variantes.map((variante) => (
          <button
            key={variante.id}
            onClick={() => handleVarianteChange(variante)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              varianteSeleccionada === variante.id
                ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                : "border-slate-700 bg-slate-900/50 hover:border-cyan-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-slate-200">{variante.nombre}</span>
              <span className="text-2xl font-bold text-cyan-500">${variante.precio}</span>
            </div>
            <p className="text-sm text-slate-400">{variante.descripcion}</p>
            {varianteSeleccionada === variante.id && (
              <div className="mt-2 flex items-center gap-2 text-cyan-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Seleccionado
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectorVariantes



