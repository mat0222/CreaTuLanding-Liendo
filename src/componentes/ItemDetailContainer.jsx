import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductoPorId } from "../data/mockData"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getProductoPorId(id)
      .then((data) => {
        setProducto(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  const handleAddToCart = (cantidad) => {
    console.log(`Agregando ${cantidad} unidades de ${producto.nombre} al carrito`)
    
  }

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px 16px",
          color: "#94a3b8",
        }}
      >
        <p style={{ fontSize: "20px" }}>Cargando producto...</p>
      </div>
    )
  }

  if (error || !producto) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px 16px",
          color: "#ef4444",
        }}
      >
        <p style={{ fontSize: "20px" }}>{error || "Producto no encontrado"}</p>
      </div>
    )
  }

  return <ItemDetail producto={producto} onAdd={handleAddToCart} />
}

export default ItemDetailContainer


