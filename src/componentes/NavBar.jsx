"use client"

import { useState } from "react"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import CartWidget from "./CartWidget"

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const categories = {
    juegos: ["PlayStation", "Xbox", "Nintendo"],
    consolas: ["PlayStation", "Xbox", "Nintendo"],
    perifericos: ["Mandos", "Accesorios", "Teclados", "Mouse", "Auriculares"],
  }

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
    menuItem: {
      position: "relative",
      color: "#e2e8f0",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "color 0.3s",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: 0,
      marginTop: "8px",
      backgroundColor: "rgba(30, 41, 59, 0.98)",
      border: "1px solid rgba(6, 182, 212, 0.3)",
      borderRadius: "8px",
      padding: "8px",
      minWidth: "160px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    },
    dropdownItem: {
      padding: "8px 12px",
      color: "#cbd5e1",
      fontSize: "14px",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "all 0.2s",
    },
    mobileButton: {
      display: "block",
      color: "#06b6d4",
      cursor: "pointer",
    },
  }

  // Media query for desktop
  if (window.innerWidth >= 768) {
    styles.desktopMenu.display = "flex"
    styles.mobileButton.display = "none"
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.flexBetween}>
          {/* Logo */}
          <div style={styles.logo}>
            <img src="/logo.png" alt="GameTech" style={styles.logoImg} />
            <span style={styles.brandText}>GAMETECH</span>
          </div>

          {/* Desktop Menu */}
          <div style={styles.desktopMenu}>
            {Object.entries(categories).map(([key, items]) => (
              <div
                key={key}
                style={styles.menuItem}
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span style={{ textTransform: "capitalize" }}>{key}</span>
                <FaChevronDown size={12} />

                {activeDropdown === key && (
                  <div style={styles.dropdown}>
                    {items.map((item) => (
                      <div
                        key={item}
                        style={styles.dropdownItem}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(6, 182, 212, 0.1)"
                          e.currentTarget.style.color = "#06b6d4"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent"
                          e.currentTarget.style.color = "#cbd5e1"
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
            {Object.entries(categories).map(([key, items]) => (
              <div key={key} style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    ...styles.menuItem,
                    justifyContent: "space-between",
                    padding: "8px 0",
                  }}
                  onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                >
                  <span style={{ textTransform: "capitalize" }}>{key}</span>
                  <FaChevronDown
                    size={12}
                    style={{
                      transform: activeDropdown === key ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s",
                    }}
                  />
                </div>
                {activeDropdown === key && (
                  <div style={{ paddingLeft: "16px", marginTop: "8px" }}>
                    {items.map((item) => (
                      <div
                        key={item}
                        style={{
                          padding: "8px 0",
                          color: "#94a3b8",
                          fontSize: "14px",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
