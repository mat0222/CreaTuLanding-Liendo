import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"
import FilterButtons from "../FilterButtons"
import ItemListHeader from "./ItemListHeader"
import ItemListLoader from "./ItemListLoader"
import ItemListError from "./ItemListError"
import { useProducts } from "../../hooks/useProducts"

const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])
  const [subcategorias, setSubcategorias] = useState([])
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null)
  const { fetchProductsByCategory, fetchSubcategoriesByCategory } = useProducts()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!categoria) return

    let isMounted = true
    setLoading(true)
    setError(null)
    setSubcategoriaSeleccionada(null)

    Promise.all([
      fetchProductsByCategory(categoria),
      fetchSubcategoriesByCategory(categoria),
    ])
      .then(([productosData, subcatsData]) => {
        if (isMounted) {
          console.log(`Categoría: ${categoria}, Productos cargados:`, productosData?.length || 0)
          console.log(`Subcategorías cargadas:`, subcatsData?.length || 0)
          setProductos(productosData || [])
          setSubcategorias(subcatsData || [])
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err)
        if (isMounted) {
          setError(err.message || "Error al cargar los productos")
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [categoria, fetchProductsByCategory, fetchSubcategoriesByCategory])

  const productosFiltrados = useMemo(() => {
    if (subcategoriaSeleccionada === null) {
      return productos
    }
    return productos.filter(
      (producto) => producto.subcategoria === subcategoriaSeleccionada
    )
  }, [subcategoriaSeleccionada, productos])

  const handleFilterChange = (subcategoria) => {
    setSubcategoriaSeleccionada(subcategoria)
  }

  if (loading) {
    return <ItemListLoader />
  }

  if (error) {
    return <ItemListError message={error} />
  }

  if (!categoria) {
    return <ItemListError message="Categoría no especificada" />
  }

  return (
    <>
      <ItemListHeader categoria={categoria} greeting={greeting} />
      <FilterButtons
        categoria={categoria}
        subcategorias={subcategorias}
        subcategoriaSeleccionada={subcategoriaSeleccionada}
        onFilterChange={handleFilterChange}
      />
      <ItemList productos={productosFiltrados} />
    </>
  )
}

export default ItemListContainer

