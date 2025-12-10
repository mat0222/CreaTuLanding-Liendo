import { useState } from "react"

const ScreenshotGallery = ({ screenshots, imagenPrincipal }) => {
  const [imagenActual, setImagenActual] = useState(imagenPrincipal || screenshots[0])

  if (!screenshots || screenshots.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div className="bg-slate-800/50 rounded-xl overflow-hidden">
        <img
          src={imagenActual}
          alt="Screenshot del juego"
          className="w-full h-auto block"
        />
      </div>
      
      {/* Miniaturas */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {(imagenPrincipal ? [imagenPrincipal, ...screenshots] : screenshots).map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setImagenActual(screenshot)}
            className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              imagenActual === screenshot
                ? "border-cyan-500 shadow-lg shadow-cyan-500/50"
                : "border-slate-700 hover:border-cyan-500/50"
            }`}
          >
            <img
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ScreenshotGallery



