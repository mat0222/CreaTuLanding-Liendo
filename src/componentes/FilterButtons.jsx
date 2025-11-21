const FilterButtons = ({ categoria, subcategorias, subcategoriaSeleccionada, onFilterChange }) => {
  if (!categoria || !subcategorias || subcategorias.length === 0) {
    return null
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center",
        padding: "20px 16px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={() => onFilterChange(null)}
        style={{
          backgroundColor: subcategoriaSeleccionada === null ? "#06b6d4" : "rgba(30, 41, 59, 0.5)",
          color: subcategoriaSeleccionada === null ? "#fff" : "#e2e8f0",
          border: "1px solid rgba(6, 182, 212, 0.3)",
          borderRadius: "8px",
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          if (subcategoriaSeleccionada !== null) {
            e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.2)"
            e.currentTarget.style.borderColor = "#06b6d4"
          }
        }}
        onMouseLeave={(e) => {
          if (subcategoriaSeleccionada !== null) {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.5)"
            e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)"
          }
        }}
      >
        Todos
      </button>
      {subcategorias.map((subcategoria) => (
        <button
          key={subcategoria}
          onClick={() => onFilterChange(subcategoria)}
          style={{
            backgroundColor:
              subcategoriaSeleccionada === subcategoria ? "#06b6d4" : "rgba(30, 41, 59, 0.5)",
            color: subcategoriaSeleccionada === subcategoria ? "#fff" : "#e2e8f0",
            border: "1px solid rgba(6, 182, 212, 0.3)",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (subcategoriaSeleccionada !== subcategoria) {
              e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.2)"
              e.currentTarget.style.borderColor = "#06b6d4"
            }
          }}
          onMouseLeave={(e) => {
            if (subcategoriaSeleccionada !== subcategoria) {
              e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.5)"
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)"
            }
          }}
        >
          {subcategoria}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons


