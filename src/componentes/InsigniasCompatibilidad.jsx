import { FaWindows, FaLaptop, FaGamepad, FaXbox, FaApple } from "react-icons/fa"
import { SiNintendoswitch } from "react-icons/si"

const InsigniasCompatibilidad = ({ compatibilidad, compatibilidadTexto }) => {
  if (!compatibilidad || compatibilidad.length === 0) {
    return null
  }

  const getIcono = (plataforma) => {
    const iconos = {
      Windows: <FaWindows className="text-lg text-cyan-400" />,
      PC: <FaLaptop className="text-lg text-cyan-400" />,
      PS5: <FaGamepad className="text-lg text-blue-400" />,
      PlayStation: <FaGamepad className="text-lg text-blue-400" />,
      Xbox: <FaXbox className="text-lg text-green-400" />,
      Mac: <FaApple className="text-lg text-slate-300" />,
      Switch: <SiNintendoswitch className="text-lg text-red-400" />,
      Nintendo: <SiNintendoswitch className="text-lg text-red-400" />,
    }
    return iconos[plataforma] || <FaGamepad className="text-lg text-cyan-400" />
  }

  const nombres = {
    Windows: "Windows",
    PC: "PC",
    PS5: "PS5",
    PlayStation: "PlayStation",
    Xbox: "Xbox",
    Mac: "Mac",
    Switch: "Switch",
    Nintendo: "Nintendo",
  }

  return (
    <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm text-slate-400 font-medium">Compatible con:</span>
        <div className="flex items-center gap-3">
          {compatibilidad.map((plataforma, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 rounded-lg border border-slate-700/30"
              title={nombres[plataforma] || plataforma}
            >
              {getIcono(plataforma)}
              <span className="text-xs text-slate-300 font-medium">
                {nombres[plataforma] || plataforma}
              </span>
            </div>
          ))}
        </div>
      </div>
      {compatibilidadTexto && (
        <p className="text-xs text-slate-500 mt-2">{compatibilidadTexto}</p>
      )}
    </div>
  )
}

export default InsigniasCompatibilidad

