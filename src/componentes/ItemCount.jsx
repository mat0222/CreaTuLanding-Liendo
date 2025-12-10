import { useState } from "react"

const ItemCount = ({ stock, initial = 1, onAdd, accesorios = [] }) => {
  const [cantidad, setCantidad] = useState(initial)
  const [added, setAdded] = useState(false)

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const handleAddToCart = () => {
    if (onAdd) {
      onAdd(cantidad, accesorios)
      setAdded(true)
    }
  }

  if (added) {
    return (
      <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
        <p className="text-green-400 font-semibold">
          ✓ Producto agregado al carrito
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 mt-6">
      <div className="flex items-center gap-4">
        <button
          onClick={decrementar}
          disabled={cantidad <= 1}
          className={`w-10 h-10 rounded-lg text-xl font-semibold transition-all duration-200 ${
            cantidad <= 1
              ? "bg-slate-700/30 text-slate-500 cursor-not-allowed"
              : "bg-cyan-500 text-white hover:bg-cyan-600"
          }`}
        >
          -
        </button>
        <span className="text-2xl font-semibold text-slate-200 min-w-[60px] text-center">
          {cantidad}
        </span>
        <button
          onClick={incrementar}
          disabled={cantidad >= stock}
          className={`w-10 h-10 rounded-lg text-xl font-semibold transition-all duration-200 ${
            cantidad >= stock
              ? "bg-slate-700/30 text-slate-500 cursor-not-allowed"
              : "bg-cyan-500 text-white hover:bg-cyan-600"
          }`}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-cyan-500 text-white rounded-lg px-6 py-3 text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-cyan-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/50"
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
