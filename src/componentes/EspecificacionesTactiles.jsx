import { FaKeyboard, FaMouse, FaHeadphones, FaGamepad, FaCog } from "react-icons/fa"

const EspecificacionesTactiles = ({ especificaciones }) => {
  if (!especificaciones) {
    return null
  }

  const getIcono = (tipo) => {
    if (tipo === "Teclado Mecánico") return <FaKeyboard className="text-2xl text-cyan-400" />
    if (tipo === "Mouse") return <FaMouse className="text-2xl text-cyan-400" />
    if (tipo === "Auriculares") return <FaHeadphones className="text-2xl text-cyan-400" />
    if (tipo === "Mando") return <FaGamepad className="text-2xl text-cyan-400" />
    return <FaCog className="text-2xl text-cyan-400" />
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        {getIcono(especificaciones.tipo)}
        Especificaciones de Rendimiento
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Para Teclados */}
        {especificaciones.switches && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">
              Tipo de Switch
            </div>
            <div className="text-slate-200 font-semibold mb-1">
              {especificaciones.switches}
            </div>
            {especificaciones.alternativas && (
              <div className="text-xs text-slate-400">{especificaciones.alternativas}</div>
            )}
          </div>
        )}

        {/* Para Mouse */}
        {especificaciones.dpi && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">DPI</div>
            <div className="text-slate-200 font-semibold">{especificaciones.dpi}</div>
          </div>
        )}

        {especificaciones.peso && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Peso</div>
            <div className="text-slate-200 font-semibold">{especificaciones.peso}</div>
          </div>
        )}

        {especificaciones.sensor && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Sensor</div>
            <div className="text-slate-200 font-semibold text-sm">
              {especificaciones.sensor}
            </div>
          </div>
        )}

        {especificaciones.agarre && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">
              Tipo de Agarre
            </div>
            <div className="text-slate-200 font-semibold">{especificaciones.agarre}</div>
          </div>
        )}

        {/* Para Auriculares */}
        {especificaciones.cancelacionRuido && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">
              Cancelación de Ruido
            </div>
            <div className="text-slate-200 font-semibold">
              {especificaciones.cancelacionRuido}
            </div>
          </div>
        )}

        {especificaciones.almohadillas && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">
              Almohadillas
            </div>
            <div className="text-slate-200 font-semibold">{especificaciones.almohadillas}</div>
          </div>
        )}

        {especificaciones.duracionBateria && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">
              Duración de Batería
            </div>
            <div className="text-slate-200 font-semibold">
              {especificaciones.duracionBateria}
            </div>
          </div>
        )}

        {especificaciones.microfono && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Micrófono</div>
            <div className="text-slate-200 font-semibold text-sm">{especificaciones.microfono}</div>
          </div>
        )}

        {/* Para Mandos */}
        {especificaciones.retroalimentacion && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">
              Retroalimentación
            </div>
            <div className="text-slate-200 font-semibold text-sm">
              {especificaciones.retroalimentacion}
            </div>
          </div>
        )}

        {especificaciones.botones && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Botones</div>
            <div className="text-slate-200 font-semibold">{especificaciones.botones}</div>
          </div>
        )}

        {especificaciones.bateria && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Batería</div>
            <div className="text-slate-200 font-semibold text-sm">{especificaciones.bateria}</div>
          </div>
        )}

        {/* Campos adicionales */}
        {especificaciones.material && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Material</div>
            <div className="text-slate-200 font-semibold">{especificaciones.material}</div>
          </div>
        )}

        {especificaciones.layout && (
          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
            <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Layout</div>
            <div className="text-slate-200 font-semibold">{especificaciones.layout}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EspecificacionesTactiles

