import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <Link
      to={`/item/${producto.id}`}
      className="block no-underline text-inherit"
    >
      <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-4 transition-all duration-300 cursor-pointer h-full flex flex-col hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)]">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
        <h3 className="text-lg font-semibold text-slate-200 mb-2 line-clamp-2">
          {producto.nombre}
        </h3>
        <p className="text-sm text-slate-400 mb-3 flex-grow line-clamp-2">
          {producto.descripcion.substring(0, 80)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-cyan-500">
            ${producto.precio}
          </span>
          <span className="text-xs text-slate-500">
            Stock: {producto.stock}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Item
