import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          color: "#06b6d4",
          marginBottom: "16px",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "600",
          color: "#e2e8f0",
          marginBottom: "16px",
        }}
      >
        Página no encontrada
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "#94a3b8",
          marginBottom: "32px",
          maxWidth: "500px",
        }}
      >
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#06b6d4",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "600",
          transition: "all 0.2s",
          display: "inline-block",
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
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound


