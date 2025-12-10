import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail"
import ItemDetailLoader from "./ItemDetailLoader"
import ItemDetailError from "./ItemDetailError"
import { useProducts } from "../../hooks/useProducts"
import { useCart } from "../../context/CartContext"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { fetchProductById } = useProducts()
  const { addToCart } = useCart()

  useEffect(() => {
    if (!id) return

    let isMounted = true
    setLoading(true)
    setError(null)

    fetchProductById(id)
      .then((data) => {
        if (isMounted) {
          setProducto(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Error al cargar el producto")
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [id, fetchProductById])

  const handleAddToCart = async (cantidad, accesorios = []) => {
    if (producto) {
      console.log("Agregando al carrito:", { producto: producto.nombre, cantidad, accesorios })
      
      // Agregar el producto principal
      addToCart(producto, cantidad)
      
      // Agregar los accesorios seleccionados
      if (accesorios && accesorios.length > 0) {
        console.log(`Agregando ${accesorios.length} accesorio(s) al carrito`)
        for (const accesorio of accesorios) {
          console.log("Procesando accesorio:", accesorio)
          
          // Intentar obtener el producto completo del accesorio por ID
          let productoAccesorio = null
          let productoEncontrado = false
          
          try {
            productoAccesorio = await fetchProductById(accesorio.id.toString())
            
            // Verificar que el producto encontrado coincida con el nombre del accesorio
            // (para evitar que se agregue un producto incorrecto)
            if (productoAccesorio) {
              // Verificar coincidencia: el nombre debe ser igual o contener palabras clave del accesorio
              const nombreAccesorioLower = accesorio.nombre.toLowerCase()
              const nombreProductoLower = productoAccesorio.nombre.toLowerCase()
              
              // Extraer palabras clave del nombre del accesorio (ej: "Mando DualSense adicional" -> ["Mando", "DualSense"])
              const palabrasClave = nombreAccesorioLower
                .replace(/\s+(adicional|extra|gaming|memory|card)/gi, '')
                .split(/\s+/)
                .filter(p => p.length > 2)
              
              const coincide = nombreProductoLower === nombreAccesorioLower ||
                palabrasClave.some(palabra => nombreProductoLower.includes(palabra))
              
              if (coincide) {
                console.log("✓ Accesorio encontrado en BD:", productoAccesorio.nombre)
                addToCart(productoAccesorio, 1)
                productoEncontrado = true
              }
            }
          } catch (error) {
            // Error esperado si no se encuentra el producto
            // No mostrar error en consola, simplemente crear el producto desde la información básica
          }
          
          // Si no se encontró o no coincide, crear un producto desde la información del accesorio
          if (!productoEncontrado) {
            addToCart({
              id: `accesorio-${accesorio.id}-${Date.now()}`, // ID único para evitar conflictos
              nombre: accesorio.nombre,
              precio: accesorio.precio,
              categoria: "perifericos",
              stock: 999,
              imagen: "/productos/dualsense.jpg",
              descripcion: accesorio.nombre,
            }, 1)
          }
        }
      } else {
        console.log("No hay accesorios seleccionados")
      }
    }
  }

  if (loading) {
    return <ItemDetailLoader />
  }

  if (error || !producto) {
    return <ItemDetailError error={error} producto={producto} />
  }

  if (producto.stock === 0) {
    return <ItemDetailError error="Producto sin stock" producto={producto} />
  }

  return <ItemDetail producto={producto} onAdd={handleAddToCart} />
}

export default ItemDetailContainer

