import { FaCog, FaHdd, FaTv, FaVolumeUp, FaSync, FaBolt, FaGamepad, FaMemory, FaMobileAlt, FaBatteryFull, FaFileAlt } from "react-icons/fa"

const FichaTecnica = ({ especificaciones }) => {
  if (!especificaciones) {
    return null
  }

  const iconos = {
    almacenamiento: <FaHdd className="text-2xl text-cyan-400" />,
    resolucion: <FaTv className="text-2xl text-cyan-400" />,
    audio: <FaVolumeUp className="text-2xl text-cyan-400" />,
    retrocompatibilidad: <FaSync className="text-2xl text-cyan-400" />,
    procesador: <FaBolt className="text-2xl text-cyan-400" />,
    gpu: <FaGamepad className="text-2xl text-cyan-400" />,
    memoria: <FaMemory className="text-2xl text-cyan-400" />,
    pantalla: <FaMobileAlt className="text-2xl text-cyan-400" />,
    bateria: <FaBatteryFull className="text-2xl text-cyan-400" />,
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaCog className="text-2xl text-cyan-400" />
        Ficha Técnica
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(especificaciones).map(([key, value]) => (
          <div
            key={key}
            className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700/30"
          >
            {iconos[key] || <FaFileAlt className="text-2xl text-cyan-400" />}
            <div>
              <div className="text-xs text-slate-500 uppercase font-semibold mb-1">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
              <div className="text-slate-300 text-sm font-medium">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FichaTecnica

