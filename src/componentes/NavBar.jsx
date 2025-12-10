import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import CartWidget from "./CartWidget"

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = ["juegos", "consolas", "perifericos"]

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 no-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="GameTech"
              className="h-10 w-auto drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              GAMETECH
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {categories.map((categoria) => (
              <NavLink
                key={categoria}
                to={`/categoria/${categoria}`}
                className={({ isActive }) =>
                  `text-sm font-medium capitalize transition-colors duration-300 no-underline ${
                    isActive
                      ? "text-cyan-500 border-b-2 border-cyan-500 pb-1"
                      : "text-slate-200 hover:text-cyan-500"
                  }`
                }
              >
                {categoria}
              </NavLink>
            ))}
            <CartWidget />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-500 bg-transparent border-none cursor-pointer p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="py-4 border-t border-cyan-500/20 md:hidden">
            {categories.map((categoria) => (
              <NavLink
                key={categoria}
                to={`/categoria/${categoria}`}
                className={({ isActive }) =>
                  `block text-sm font-medium capitalize transition-colors duration-300 py-3 no-underline ${
                    isActive
                      ? "text-cyan-500 border-l-4 border-cyan-500 pl-4"
                      : "text-slate-200 hover:text-cyan-500"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {categoria}
              </NavLink>
            ))}
            <div className="mt-4">
              <CartWidget />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
