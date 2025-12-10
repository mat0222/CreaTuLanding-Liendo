import { FaCreditCard, FaShieldAlt } from "react-icons/fa"

const FinanciacionGarantia = ({ financiacion, garantia, precio }) => {
  return (
    <div className="space-y-4">
      {/* Financiación */}
      {financiacion?.disponible && (
        <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-center gap-2 mb-3">
            <FaCreditCard className="text-2xl text-green-400" />
            <h3 className="text-lg font-bold text-slate-200">Financiación Disponible</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-green-400">
                ${financiacion.precioCuota.toFixed(2)}
              </span>
              <span className="text-slate-400">/mes</span>
            </div>
            <p className="text-sm text-slate-300">
              O llévala por <span className="font-semibold text-green-400">
                ${financiacion.precioCuota.toFixed(2)}/mes
              </span>{" "}
              en <span className="font-semibold">{financiacion.cuotas} cuotas</span> sin intereses
            </p>
            <p className="text-xs text-slate-500">
              Precio total: ${precio} (sin intereses)
            </p>
          </div>
        </div>
      )}

      {/* Garantía */}
      {garantia && (
        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-4xl text-cyan-400" />
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">Garantía</h3>
              <p className="text-slate-300 text-sm">{garantia}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FinanciacionGarantia

