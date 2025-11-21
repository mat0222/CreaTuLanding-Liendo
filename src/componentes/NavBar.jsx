import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import CartWidget from "./CartWidget"

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = ["juegos", "consolas", "perifericos"]

  const styles = {
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(6, 182, 212, 0.2)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 16px",
    },
    flexBetween: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      cursor: "pointer",
    },
    logoImg: {
      height: "40px",
      width: "auto",
      filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))",
    },
    brandText: {
      fontSize: "24px",
      fontWeight: "bold",
      background: "linear-gradient(to right, #06b6d4, #3b82f6, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    desktopMenu: {
      display: "none",
      gap: "32px",
      alignItems: "center",
    },
    mobileButton: {
      display: "block",
      color: "#06b6d4",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
    },
  }

  
  if (window.innerWidth >= 768) {
    styles.desktopMenu.display = "flex"
    styles.mobileButton.display = "none"
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.flexBetween}>
          {/* Logo */}
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div style={styles.logo}>
              <img src="/logo.png" alt="GameTech" style={styles.logoImg} />
              <span style={styles.brandText}>GAMETECH</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div style={styles.desktopMenu}>
            {categories.map((categoria) => (
              <Link
                key={categoria}
                to={`/categoria/${categoria}`}
                style={{
                  textDecoration: "none",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#06b6d4"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#e2e8f0"
                }}
              >
                <span style={{ textTransform: "capitalize" }}>{categoria}</span>
              </Link>
            ))}
            <CartWidget />
          </div>

          {/* Mobile Menu Button */}
          <button style={styles.mobileButton} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: "16px 0",
              borderTop: "1px solid rgba(6, 182, 212, 0.2)",
            }}
          >
            {categories.map((categoria) => (
              <Link
                key={categoria}
                to={`/categoria/${categoria}`}
                style={{
                  textDecoration: "none",
                  color: "#e2e8f0",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "block",
                  padding: "12px 0",
                  transition: "color 0.3s",
                }}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#06b6d4"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#e2e8f0"
                }}
              >
                <span style={{ textTransform: "capitalize" }}>{categoria}</span>
              </Link>
            ))}
            <div style={{ marginTop: "16px" }}>
              <CartWidget />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
