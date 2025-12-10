const ItemDetailError = ({ error, producto }) => {
  if (producto && producto.stock === 0) {
    return (
      <div className="text-center py-20 px-4">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-md mx-auto">
          <p className="text-xl text-slate-300 mb-2">Producto sin stock</p>
          <p className="text-slate-400">
            Este producto no está disponible en este momento
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center py-20 px-4">
      <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-8 max-w-md mx-auto">
        <p className="text-xl text-red-400 mb-4">
          {error || "Producto no encontrado"}
        </p>
        {producto && producto.stock === 0 && (
          <p className="text-slate-400">
            Este producto no tiene stock disponible
          </p>
        )}
      </div>
    </div>
  )
}

export default ItemDetailError

