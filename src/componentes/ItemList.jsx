import Item from "./Item"

const ItemList = ({ productos }) => {
  if (!productos || productos.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-2xl font-semibold text-slate-300 mb-2">
            No se encontraron productos
          </p>
          <p className="text-slate-400">
            Intenta con otra categoría o verifica la conexión
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList
