import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { createOrder } from "../../firebase/services"

const CheckoutForm = ({ onOrderCreated }) => {
  const {
    cart,
    getTotalPrice,
    isCartEmpty,
    clearCart,
    setLoading,
  } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido"
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido"
    }
    if (!formData.direccion.trim()) {
      newErrors.direccion = "La dirección es requerida"
    }
    if (!formData.ciudad.trim()) {
      newErrors.ciudad = "La ciudad es requerida"
    }
    if (!formData.codigoPostal.trim()) {
      newErrors.codigoPostal = "El código postal es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    if (isCartEmpty()) {
      alert("El carrito está vacío")
      return
    }

    setIsProcessing(true)
    setLoading(true)

    try {
      // Crear la orden con datos del formulario
      const order = {
        items: cart.map((item) => ({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          cantidad: item.cantidad,
        })),
        total: getTotalPrice(),
        fecha: new Date().toISOString(),
        estado: "pendiente",
        cliente: {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          direccion: {
            calle: formData.direccion,
            ciudad: formData.ciudad,
            codigoPostal: formData.codigoPostal,
          },
        },
      }

      // Guardar en Firestore
      const id = await createOrder(order)
      clearCart()
      onOrderCreated(id)
    } catch {
      alert("Error al procesar la compra. Por favor, intenta nuevamente.")
    } finally {
      setIsProcessing(false)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-slate-300 mb-2">
            Nombre completo *
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            autoComplete="name"
            className={`w-full px-4 py-2 bg-slate-700/50 border rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              errors.nombre ? "border-red-500" : "border-slate-600"
            }`}
            placeholder="Juan Pérez"
          />
          {errors.nombre && (
            <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={`w-full px-4 py-2 bg-slate-700/50 border rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              errors.email ? "border-red-500" : "border-slate-600"
            }`}
            placeholder="juan@example.com"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-slate-300 mb-2">
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            autoComplete="tel"
            className={`w-full px-4 py-2 bg-slate-700/50 border rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              errors.telefono ? "border-red-500" : "border-slate-600"
            }`}
            placeholder="+54 11 1234-5678"
          />
          {errors.telefono && (
            <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>
          )}
        </div>

        <div>
          <label htmlFor="ciudad" className="block text-sm font-medium text-slate-300 mb-2">
            Ciudad *
          </label>
          <input
            id="ciudad"
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            autoComplete="address-level2"
            className={`w-full px-4 py-2 bg-slate-700/50 border rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              errors.ciudad ? "border-red-500" : "border-slate-600"
            }`}
            placeholder="Buenos Aires"
          />
          {errors.ciudad && (
            <p className="text-red-400 text-xs mt-1">{errors.ciudad}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="direccion" className="block text-sm font-medium text-slate-300 mb-2">
            Dirección *
          </label>
          <input
            id="direccion"
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            autoComplete="street-address"
            className={`w-full px-4 py-2 bg-slate-700/50 border rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              errors.direccion ? "border-red-500" : "border-slate-600"
            }`}
            placeholder="Av. Corrientes 1234"
          />
          {errors.direccion && (
            <p className="text-red-400 text-xs mt-1">{errors.direccion}</p>
          )}
        </div>

        <div>
          <label htmlFor="codigoPostal" className="block text-sm font-medium text-slate-300 mb-2">
            Código Postal *
          </label>
          <input
            id="codigoPostal"
            type="text"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            autoComplete="postal-code"
            className={`w-full px-4 py-2 bg-slate-700/50 border rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
              errors.codigoPostal ? "border-red-500" : "border-slate-600"
            }`}
            placeholder="C1234ABC"
          />
          {errors.codigoPostal && (
            <p className="text-red-400 text-xs mt-1">{errors.codigoPostal}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing || isCartEmpty()}
        className="w-full bg-cyan-500 text-white rounded-lg px-6 py-4 text-lg font-semibold hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Procesando...
          </>
        ) : (
          "Finalizar compra"
        )}
      </button>
    </form>
  )
}

export default CheckoutForm

