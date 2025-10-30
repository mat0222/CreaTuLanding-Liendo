"use client"

import { FaTrophy, FaFire, FaStar } from "react-icons/fa"

const ItemListContainer = ({ greeting }) => {
  const stats = [
    { icon: FaTrophy, label: "+500 Juegos", color: "#06b6d4" },
    { icon: FaFire, label: "Ofertas Hot", color: "#f59e0b" },
    { icon: FaStar, label: "Top Rated", color: "#ec4899" },
  ]

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgba(6, 182, 212, 0.1), transparent)",
        padding: "80px 16px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "16px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {greeting}
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            marginBottom: "48px",
          }}
        >
          Explora nuestras ofertas en consolas, videojuegos y accesorios
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                  borderRadius: "12px",
                  padding: "24px",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.borderColor = stat.color
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.5)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <Icon size={32} color={stat.color} style={{ marginBottom: "12px" }} />
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#e2e8f0",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
