import { FaPlug, FaSatellite, FaBatteryFull } from "react-icons/fa"

const Conectividad = ({ conectividad }) => {
  if (!conectividad) {
    return null
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaPlug className="text-2xl text-cyan-400" />
        Conectividad
      </h3>
      <div className="space-y-3">
        {conectividad.wireless && (
          <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <FaSatellite className="text-2xl text-cyan-400" />
            <div>
              <div className="text-sm font-semibold text-slate-200 mb-1">Wireless</div>
              <div className="text-sm text-slate-400">{conectividad.wireless}</div>
              <div className="text-xs text-slate-500 mt-1">Baja latencia</div>
            </div>
          </div>
        )}

        {conectividad.bateria && (
          <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <FaBatteryFull className="text-2xl text-cyan-400" />
            <div>
              <div className="text-sm font-semibold text-slate-200 mb-1">Batería</div>
              <div className="text-sm text-slate-400">{conectividad.bateria}</div>
            </div>
          </div>
        )}

        {conectividad.cableado && (
          <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <FaPlug className="text-2xl text-cyan-400" />
            <div>
              <div className="text-sm font-semibold text-slate-200 mb-1">Modo Cableado</div>
              <div className="text-sm text-slate-400">{conectividad.cableado}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Conectividad

