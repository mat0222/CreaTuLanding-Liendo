import { useState } from "react"
import { FaPalette } from "react-icons/fa"

const SelectorColor = ({ colores, onColorChange }) => {
  const [colorSeleccionado, setColorSeleccionado] = useState(colores?.[0]?.nombre)

  if (!colores || colores.length === 0) {
    return null
  }

  const handleColorChange = (color) => {
    setColorSeleccionado(color.nombre)
    if (onColorChange) {
      onColorChange(color)
    }
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaPalette className="text-2xl text-cyan-400" />
        Selecciona el Color
      </h3>
      <div className="flex items-center gap-4 flex-wrap">
        {colores.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200 ${
              colorSeleccionado === color.nombre
                ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                : "border-slate-700 bg-slate-900/50 hover:border-cyan-500/50"
            }`}
          >
            <div
              className="w-12 h-12 rounded-full border-2 border-slate-600 shadow-lg"
              style={{ backgroundColor: color.codigo }}
            />
            <span className="text-sm font-medium text-slate-300">{color.nombre}</span>
            {colorSeleccionado === color.nombre && (
              <div className="flex items-center gap-1 text-cyan-400 text-xs">
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

export default SelectorColor

