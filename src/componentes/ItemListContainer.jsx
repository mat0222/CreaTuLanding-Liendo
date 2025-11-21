import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import FilterButtons from "./FilterButtons"
import { getProductosPorCategoria, getSubcategoriasPorCategoria } from "../data/mockData"

const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [subcategorias, setSubcategorias] = useState([])
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setSubcategoriaSeleccionada(null)
    getProductosPorCategoria(categoria)
      .then((data) => {
        setProductos(data)
        setProductosFiltrados(data)
        if (categoria) {
          const subcats = getSubcategoriasPorCategoria(categoria)
          setSubcategorias(subcats)
        } else {
          setSubcategorias([])
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error)
        setLoading(false)
      })
  }, [categoria])

  useEffect(() => {
    if (subcategoriaSeleccionada === null) {
      setProductosFiltrados(productos)
    } else {
      const filtrados = productos.filter(
        (producto) => producto.subcategoria === subcategoriaSeleccionada
      )
      setProductosFiltrados(filtrados)
    }
  }, [subcategoriaSeleccionada, productos])

  const handleFilterChange = (subcategoria) => {
    setSubcategoriaSeleccionada(subcategoria)
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
        <p style={{ fontSize: "20px" }}>Cargando productos...</p>
      </div>
    )
  }

  const titulo = categoria
    ? `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`
    : "Todos los productos"

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, rgba(6, 182, 212, 0.1), transparent)",
      }}
    >
      <div
        style={{
          padding: "40px 16px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "16px",
            background: "linear-gradient(to right, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {titulo}
        </h1>
        {greeting && (
          <p
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              marginBottom: "24px",
            }}
          >
            {greeting}
          </p>
        )}
      </div>
      <FilterButtons
        categoria={categoria}
        subcategorias={subcategorias}
        subcategoriaSeleccionada={subcategoriaSeleccionada}
        onFilterChange={handleFilterChange}
      />
      <ItemList productos={productosFiltrados} />
    </div>
  )
}

export default ItemListContainer
