import Item from "./Item"

const ItemList = ({ productos }) => {
  if (productos.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px 16px",
          color: "#94a3b8",
        }}
      >
        <p style={{ fontSize: "20px" }}>No se encontraron productos</p>
      </div>
    )
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
        padding: "40px 16px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemList


