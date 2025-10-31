import { FaGamepad } from "react-icons/fa"

const CartWidget = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <FaGamepad
        size={24}
        color="#06b6d4"
        style={{ transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          backgroundColor: "#06b6d4",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "12px",
          fontWeight: "bold",
          animation: "pulse 2s infinite",
        }}
      >
        3
      </span>
    </div>
  )
}

export default CartWidget
