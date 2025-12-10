import { Link } from "react-router-dom"
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa"
import { useCart } from "../../context/CartContext"

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 flex flex-col sm:flex-row gap-6">
      {/* Imagen */}
      <Link
        to={`/item/${item.id}`}
        className="flex-shrink-0 w-full sm:w-32 h-32 bg-slate-700/50 rounded-lg overflow-hidden"
      >
        <img
          src={item.imagen}
          alt={item.nombre}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Información */}
      <div className="flex-grow flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-grow">
          <Link
            to={`/item/${item.id}`}
            className="text-xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors mb-2 block"
          >
            {item.nombre}
          </Link>
          <p className="text-slate-400 text-sm mb-2">
            Stock disponible: {item.stock}
          </p>
          <p className="text-2xl font-bold text-cyan-500">
            ${item.precio}
          </p>
        </div>

        {/* Controles de cantidad */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(item.id, item.cantidad - 1)}
              disabled={item.cantidad <= 1}
              className="w-10 h-10 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <FaMinus />
            </button>
            <span className="text-xl font-semibold text-slate-200 min-w-[40px] text-center">
              {item.cantidad}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.cantidad + 1)}
              disabled={item.cantidad >= item.stock}
              className="w-10 h-10 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <FaPlus />
            </button>
          </div>

          <div className="text-right">
            <p className="text-lg font-semibold text-slate-200">
              Subtotal: ${(item.precio * item.cantidad).toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
            title="Eliminar del carrito"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem

