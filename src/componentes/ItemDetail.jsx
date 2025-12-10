import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaRuler, FaArrowLeft } from "react-icons/fa"
import ItemCount from "./ItemCount"
import ScreenshotGallery from "./ScreenshotGallery"
import ContenidoCaja from "./ContenidoCaja"
import SelectorVariantes from "./SelectorVariantes"
import FichaTecnica from "./FichaTecnica"
import GaleriaDetalles from "./GaleriaDetalles"
import FinanciacionGarantia from "./FinanciacionGarantia"
import VentaCruzada from "./VentaCruzada"
import InsigniasCompatibilidad from "./InsigniasCompatibilidad"
import EspecificacionesTactiles from "./EspecificacionesTactiles"
import SelectorColor from "./SelectorColor"
import Conectividad from "./Conectividad"
import IluminacionRGB from "./IluminacionRGB"
import FotosUsoReal from "./FotosUsoReal"

const ItemDetail = ({ producto, onAdd }) => {
  const [enWishlist, setEnWishlist] = useState(false)
  const [varianteActual, setVarianteActual] = useState(null)
  const [colorActual, setColorActual] = useState(null)
  const [accesoriosSeleccionados, setAccesoriosSeleccionados] = useState([])
  const esConsola = producto.categoria === "consolas"
  const esPeriferico = producto.categoria === "perifericos"
  
  // Debug: mostrar cuando cambian los accesorios seleccionados
  useEffect(() => {
    if (accesoriosSeleccionados.length > 0) {
      console.log("ItemDetail: Accesorios seleccionados actualizados:", accesoriosSeleccionados)
    }
  }, [accesoriosSeleccionados])
  
  // Producto con variante/color aplicada
  const productoMostrado = colorActual
    ? { ...producto, imagen: colorActual.imagen }
    : varianteActual
    ? { ...producto, precio: varianteActual.precio, imagen: varianteActual.imagen }
    : producto

  const toggleWishlist = () => {
    setEnWishlist(!enWishlist)
  }

  const renderEstrellas = (rating) => {
    if (!rating) return null
    const estrellasLlenas = Math.floor(rating)
    const tieneMedia = rating % 1 >= 0.5
    const estrellasVacias = 5 - estrellasLlenas - (tieneMedia ? 1 : 0)

    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(estrellasLlenas)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
          {tieneMedia && <span className="text-yellow-400 text-xl">⭐</span>}
          {[...Array(estrellasVacias)].map((_, i) => (
            <span key={i} className="text-slate-600 text-xl">⭐</span>
          ))}
        </div>
        <span className="text-slate-300 font-semibold">{rating}/5</span>
      </div>
    )
  }

  const handleVarianteChange = (variante) => {
    setVarianteActual(variante)
  }

  const handleColorChange = (color) => {
    setColorActual(color)
  }

  const bannerFondo = producto.banner || producto.imagen

  return (
    <div className="relative">
      {/* Fondo inmersivo con banner difuminado */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bannerFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(40px) brightness(0.2)",
          transform: "scale(1.1)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-slate-900/80" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        {/* Botón volver al catálogo */}
        <Link
          to={`/categoria/${producto.categoria}`}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/60 hover:bg-slate-800/80 text-slate-300 hover:text-cyan-400 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
        >
          <FaArrowLeft className="text-sm" />
          <span className="text-sm font-medium">Volver al catálogo</span>
        </Link>

        {/* Etiquetas dinámicas */}
        {producto.etiquetas && producto.etiquetas.length > 0 && (
          <div className="flex gap-2 mb-4">
            {producto.etiquetas.map((etiqueta, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  etiqueta === "Novedad"
                    ? "bg-green-500/30 text-green-400 border border-green-500/50"
                    : etiqueta === "Best Seller"
                    ? "bg-yellow-500/30 text-yellow-400 border border-yellow-500/50"
                    : "bg-cyan-500/30 text-cyan-400 border border-cyan-500/50"
                }`}
              >
                {etiqueta}
              </span>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Sección de multimedia */}
          <div className="space-y-6">
            {producto.screenshots ? (
              <ScreenshotGallery
                screenshots={producto.screenshots}
                imagenPrincipal={productoMostrado.imagen}
              />
            ) : (
              <div className="bg-slate-800/50 rounded-xl overflow-hidden">
                <img
                  src={productoMostrado.imagen}
                  alt={producto.nombre}
                  className="w-full h-auto block"
                />
              </div>
            )}
            
            {/* Selector de Variantes (solo consolas) */}
            {esConsola && producto.variantes && (
              <SelectorVariantes
                variantes={producto.variantes}
                onVarianteChange={handleVarianteChange}
              />
            )}

            {/* Selector de Color (solo periféricos) */}
            {esPeriferico && producto.colores && (
              <SelectorColor
                colores={producto.colores}
                onColorChange={handleColorChange}
              />
            )}
          </div>

          {/* Sección de información */}
          <div className="space-y-6">
            {/* Título y Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-200 mb-3">
                {producto.nombre}
              </h1>
              {producto.rating && (
                <div className="mb-2">
                  {renderEstrellas(producto.rating)}
                  {producto.numResenas && (
                    <button className="text-sm text-cyan-400 hover:text-cyan-300 ml-2 underline">
                      Ver {producto.numResenas} opiniones
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Insignias de Compatibilidad (solo periféricos) */}
            {esPeriferico && producto.compatibilidad && (
              <InsigniasCompatibilidad
                compatibilidad={producto.compatibilidad}
                compatibilidadTexto={producto.compatibilidadTexto}
              />
            )}

            {/* Etiquetas de categoría */}
            <div className="flex gap-3 flex-wrap">
              <span className="bg-cyan-500/20 text-cyan-500 px-3 py-1 rounded-lg text-sm capitalize">
                {producto.categoria}
              </span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm">
                {producto.subcategoria}
              </span>
              {producto.genero && (
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-lg text-sm">
                  {producto.genero}
                </span>
              )}
            </div>

            {/* Descripción mejorada */}
            <p className="text-lg text-slate-300 leading-relaxed">
              {producto.descripcion}
            </p>

            {/* Información Técnica (Ficha) */}
            {producto.desarrollador && (
              <div className="bg-slate-800/60 rounded-xl p-4 space-y-3 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">
                  Información Técnica
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  {producto.desarrollador && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-slate-500">Desarrollador:</span>
                      <span className="font-medium">{producto.desarrollador}</span>
                    </div>
                  )}
                  {producto.clasificacion && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-slate-500">Clasificación:</span>
                      <span className="font-medium">{producto.clasificacion}</span>
                    </div>
                  )}
                  {producto.genero && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-slate-500">Género:</span>
                      <span className="font-medium">{producto.genero}</span>
                    </div>
                  )}
                  {producto.espacioDisco && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-slate-500">Espacio en disco:</span>
                      <span className="font-medium">{producto.espacioDisco}</span>
                    </div>
                  )}
                  {producto.jugadores && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-slate-500">Jugadores:</span>
                      <span className="font-medium">{producto.jugadores}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Precio y Stock */}
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold text-cyan-500">
                ${productoMostrado.precio}
              </span>
              <span className="text-base text-slate-400">
                Stock disponible: {producto.stock}
              </span>
            </div>

            {/* Financiación y Garantía (solo consolas) */}
            {esConsola && (
              <FinanciacionGarantia
                financiacion={producto.financiacion}
                garantia={producto.garantia}
                precio={productoMostrado.precio}
              />
            )}

            {/* Venta Cruzada (solo consolas) */}
            {esConsola && producto.accesoriosRecomendados && (
              <VentaCruzada 
                accesoriosRecomendados={producto.accesoriosRecomendados}
                onAccesoriosChange={setAccesoriosSeleccionados}
              />
            )}

            {/* Conectividad (solo periféricos) */}
            {esPeriferico && producto.conectividad && (
              <Conectividad conectividad={producto.conectividad} />
            )}

            {/* Botones de acción */}
            <div className="flex gap-4">
              <div className="flex-grow">
                <ItemCount 
                  stock={producto.stock} 
                  onAdd={onAdd}
                  accesorios={accesoriosSeleccionados}
                />
              </div>
              <button
                onClick={toggleWishlist}
                className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  enWishlist
                    ? "bg-red-500/20 text-red-400 border-2 border-red-500/50"
                    : "bg-slate-800/60 text-slate-400 border-2 border-slate-700 hover:border-red-500/50 hover:text-red-400"
                }`}
                title={enWishlist ? "Eliminar de lista de deseos" : "Agregar a lista de deseos"}
              >
                <svg
                  className="w-6 h-6"
                  fill={enWishlist ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Secciones adicionales para consolas */}
        {esConsola && (
          <div className="mt-12 space-y-8">
            {/* ¿Qué hay en la caja? */}
            {producto.contenidoCaja && (
              <ContenidoCaja contenidoCaja={producto.contenidoCaja} />
            )}

            {/* Ficha Técnica */}
            {producto.especificacionesTecnicas && (
              <FichaTecnica especificaciones={producto.especificacionesTecnicas} />
            )}

            {/* Galería de Detalles */}
            {producto.galeriaDetalles && (
              <GaleriaDetalles galeriaDetalles={producto.galeriaDetalles} />
            )}

            {/* Dimensiones */}
            {producto.dimensiones && (
              <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <FaRuler className="text-2xl text-cyan-400" />
                  Dimensiones
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <div className="text-slate-500 text-xs mb-1">Alto</div>
                    <div className="text-slate-200 font-semibold">{producto.dimensiones.alto}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <div className="text-slate-500 text-xs mb-1">Ancho</div>
                    <div className="text-slate-200 font-semibold">{producto.dimensiones.ancho}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <div className="text-slate-500 text-xs mb-1">Profundidad</div>
                    <div className="text-slate-200 font-semibold">{producto.dimensiones.profundidad}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-lg">
                    <div className="text-slate-500 text-xs mb-1">Peso</div>
                    <div className="text-slate-200 font-semibold">{producto.dimensiones.peso}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Secciones adicionales para periféricos */}
        {esPeriferico && (
          <div className="mt-12 space-y-8">
            {/* Especificaciones Táctiles y de Rendimiento */}
            {producto.especificacionesTactiles && (
              <EspecificacionesTactiles
                especificaciones={producto.especificacionesTactiles}
              />
            )}

            {/* Iluminación RGB */}
            {producto.rgb && <IluminacionRGB rgb={producto.rgb} />}

            {/* Fotos de Uso Real */}
            {producto.fotosUsoReal && (
              <FotosUsoReal fotosUsoReal={producto.fotosUsoReal} />
            )}
          </div>
        )}
      </div>
      {/* Separador antes del footer */}
      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent to-slate-900" />
    </div>
  )
}

export default ItemDetail
