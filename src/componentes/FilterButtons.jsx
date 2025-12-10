const FilterButtons = ({ categoria, subcategorias, subcategoriaSeleccionada, onFilterChange }) => {
  if (!categoria || !subcategorias || subcategorias.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center py-5 px-4 max-w-7xl mx-auto">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          subcategoriaSeleccionada === null
            ? "bg-cyan-500 text-white"
            : "bg-slate-800/50 text-slate-200 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500"
        }`}
      >
        Todos
      </button>
      {subcategorias.map((subcategoria) => (
        <button
          key={subcategoria}
          onClick={() => onFilterChange(subcategoria)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            subcategoriaSeleccionada === subcategoria
              ? "bg-cyan-500 text-white"
              : "bg-slate-800/50 text-slate-200 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500"
          }`}
        >
          {subcategoria}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
