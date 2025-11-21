import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <Link
      to={`/item/${producto.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          border: "1px solid rgba(6, 182, 212, 0.2)",
          borderRadius: "12px",
          padding: "16px",
          transition: "all 0.3s",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)"
          e.currentTarget.style.borderColor = "#06b6d4"
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(6, 182, 212, 0.3)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"
          e.currentTarget.style.boxShadow = "none"
        }}
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        />
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#e2e8f0",
            marginBottom: "8px",
          }}
        >
          {producto.nombre}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#94a3b8",
            marginBottom: "12px",
            flexGrow: 1,
          }}
        >
          {producto.descripcion.substring(0, 80)}...
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#06b6d4",
            }}
          >
            ${producto.precio}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#64748b",
            }}
          >
            Stock: {producto.stock}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Item


