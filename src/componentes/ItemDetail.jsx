import ItemCount from "./ItemCount"

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "start",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      <div>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#e2e8f0",
            marginBottom: "16px",
          }}
        >
          {producto.nombre}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(6, 182, 212, 0.2)",
              color: "#06b6d4",
              padding: "4px 12px",
              borderRadius: "6px",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            {producto.categoria}
          </span>
          <span
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              color: "#3b82f6",
              padding: "4px 12px",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            {producto.subcategoria}
          </span>
        </div>
        <p
          style={{
            fontSize: "18px",
            color: "#94a3b8",
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          {producto.descripcion}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#06b6d4",
            }}
          >
            ${producto.precio}
          </span>
          <span
            style={{
              fontSize: "16px",
              color: "#64748b",
            }}
          >
            Stock disponible: {producto.stock}
          </span>
        </div>
        <ItemCount stock={producto.stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail


