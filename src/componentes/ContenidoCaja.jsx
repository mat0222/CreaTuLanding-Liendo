import { FaBox, FaGamepad, FaPlug, FaBolt, FaUsb, FaBook } from "react-icons/fa"

const ContenidoCaja = ({ contenidoCaja }) => {
  if (!contenidoCaja || contenidoCaja.length === 0) {
    return null
  }

  const getIcono = (nombre) => {
    const nombreLower = nombre.toLowerCase()
    if (nombreLower.includes("consola")) return <FaGamepad className="text-2xl text-cyan-400" />
    if (nombreLower.includes("control") || nombreLower.includes("mando") || nombreLower.includes("dualsense") || nombreLower.includes("joy-con")) return <FaGamepad className="text-2xl text-cyan-400" />
    if (nombreLower.includes("cable") || nombreLower.includes("hdmi") || nombreLower.includes("usb")) return <FaPlug className="text-2xl text-cyan-400" />
    if (nombreLower.includes("alimentación") || nombreLower.includes("corriente")) return <FaBolt className="text-2xl text-cyan-400" />
    if (nombreLower.includes("base")) return <FaUsb className="text-2xl text-cyan-400" />
    if (nombreLower.includes("manual") || nombreLower.includes("inicio")) return <FaBook className="text-2xl text-cyan-400" />
    return <FaBox className="text-2xl text-cyan-400" />
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaBox className="text-2xl text-cyan-400" />
        ¿Qué hay en la caja?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contenidoCaja.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-700/30 hover:border-cyan-500/50 transition-colors"
          >
            {getIcono(item.nombre)}
            <span className="text-slate-300 text-sm font-medium">{item.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContenidoCaja

