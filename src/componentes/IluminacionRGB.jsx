import { FaLightbulb, FaStar } from "react-icons/fa"

const IluminacionRGB = ({ rgb }) => {
  if (!rgb || !rgb.disponible) {
    return null
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
      <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
        <FaLightbulb className="text-2xl text-cyan-400" />
        Iluminación RGB
      </h3>
      <div className="space-y-4">
        {rgb.fotoOscura && (
          <div className="bg-slate-900/50 rounded-lg overflow-hidden">
            <img
              src={rgb.fotoOscura}
              alt="Iluminación RGB en entorno oscuro"
              className="w-full h-auto block"
            />
            <div className="p-3 bg-slate-900/80 text-center">
              <p className="text-slate-300 font-medium text-sm">
                Vista en entorno oscuro - Efectos RGB
              </p>
            </div>
          </div>
        )}

        {rgb.personalizable && (
          <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <FaStar className="text-xl text-purple-400" />
              <span className="font-semibold text-slate-200">RGB Personalizable</span>
            </div>
            <p className="text-sm text-slate-300">
              {rgb.descripcion || "Personalizable por software con millones de colores"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default IluminacionRGB

