import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider")
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch {
        setCart([])
      }
    }
  }, [])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Agregar producto al carrito
  const addToCart = (producto, cantidad = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === producto.id)

      if (existingItem) {
        // Si el producto ya existe, actualizar la cantidad
        const newQuantity = existingItem.cantidad + cantidad
        if (newQuantity > producto.stock) {
          alert(`No hay suficiente stock. Stock disponible: ${producto.stock}`)
          return prevCart
        }
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: newQuantity }
            : item
        )
      } else {
        // Si es un producto nuevo, agregarlo
        if (cantidad > producto.stock) {
          alert(`No hay suficiente stock. Stock disponible: ${producto.stock}`)
          return prevCart
        }
        return [...prevCart, { ...producto, cantidad }]
      }
    })
  }

  // Remover producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === productId)
      if (!item) return prevCart

      if (newQuantity > item.stock) {
        alert(`No hay suficiente stock. Stock disponible: ${item.stock}`)
        return prevCart
      }

      return prevCart.map((item) =>
        item.id === productId ? { ...item, cantidad: newQuantity } : item
      )
    })
  }

  // Limpiar carrito
  const clearCart = () => {
    setCart([])
  }

  // Calcular total de unidades
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.cantidad, 0)
  }

  // Calcular total del precio
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0)
  }

  // Verificar si el carrito está vacío
  const isCartEmpty = () => {
    return cart.length === 0
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartEmpty,
    loading,
    setLoading,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

