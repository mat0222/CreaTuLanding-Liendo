import { useState } from "react"

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial)

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
      onAdd(cantidad)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginTop: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <button
          onClick={decrementar}
          disabled={cantidad <= 1}
          style={{
            backgroundColor: cantidad <= 1 ? "rgba(100, 116, 139, 0.3)" : "#06b6d4",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: cantidad <= 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (cantidad > 1) {
              e.currentTarget.style.backgroundColor = "#0891b2"
            }
          }}
          onMouseLeave={(e) => {
            if (cantidad > 1) {
              e.currentTarget.style.backgroundColor = "#06b6d4"
            }
          }}
        >
          -
        </button>
        <span
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#e2e8f0",
            minWidth: "60px",
            textAlign: "center",
          }}
        >
          {cantidad}
        </span>
        <button
          onClick={incrementar}
          disabled={cantidad >= stock}
          style={{
            backgroundColor: cantidad >= stock ? "rgba(100, 116, 139, 0.3)" : "#06b6d4",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            width: "40px",
            height: "40px",
            fontSize: "20px",
            cursor: cantidad >= stock ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            if (cantidad < stock) {
              e.currentTarget.style.backgroundColor = "#0891b2"
            }
          }}
          onMouseLeave={(e) => {
            if (cantidad < stock) {
              e.currentTarget.style.backgroundColor = "#06b6d4"
            }
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#06b6d4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#0891b2"
          e.currentTarget.style.transform = "translateY(-2px)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#06b6d4"
          e.currentTarget.style.transform = "translateY(0)"
        }}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount


