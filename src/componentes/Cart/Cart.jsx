import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useCart } from "../../context/CartContext"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"

const Cart = () => {
  const { cart, getTotalPrice, isCartEmpty } = useCart()
  const navigate = useNavigate()
  const [orderId, setOrderId] = useState(null)

  const handleOrderCreated = (id) => {
    setOrderId(id)
  }

  if (orderId) {
    return (
      <div className="min-h-screen bg-slate-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-green-400 mb-2">
                ¡Compra realizada con éxito!
              </h2>
              <p className="text-slate-400 mb-6">
                Tu orden ha sido procesada correctamente
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6 mb-6">
              <p className="text-slate-300 mb-2">ID de tu orden:</p>
              <p className="text-2xl font-bold text-cyan-500 font-mono">
                {orderId}
              </p>
              <p className="text-sm text-slate-500 mt-4">
                Guarda este ID para hacer seguimiento de tu pedido
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setOrderId(null)
                  navigate("/")
                }}
                className="bg-cyan-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-cyan-600 transition-colors"
              >
                Volver al inicio
              </button>
              <Link
                to="/categoria/consolas"
                className="bg-slate-700 text-white rounded-lg px-6 py-3 font-semibold hover:bg-slate-600 transition-colors"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isCartEmpty()) {
    return (
      <div className="min-h-screen bg-slate-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-12 text-center">
            <FaShoppingCart className="text-6xl text-slate-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-300 mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-slate-400 mb-8">
              Agrega productos al carrito para comenzar a comprar
            </p>
            <Link
              to="/"
              className="inline-block bg-cyan-500 text-white rounded-lg px-8 py-3 font-semibold hover:bg-cyan-600 transition-colors"
            >
              Explorar productos
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-200 mb-8 flex items-center gap-3">
          <FaShoppingCart className="text-cyan-500" />
          Carrito de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Resumen y Checkout */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-slate-200 mb-6">
                Resumen de compra
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span>
                    Subtotal ({cart.length}{" "}
                    {cart.length === 1 ? "producto" : "productos"}):
                  </span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Envío:</span>
                  <span className="text-green-400">Gratis</span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-slate-200">
                    <span>Total:</span>
                    <span className="text-cyan-500">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <CheckoutForm onOrderCreated={handleOrderCreated} />

              <Link
                to="/"
                className="block text-center text-slate-400 hover:text-cyan-400 transition-colors mt-4"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

