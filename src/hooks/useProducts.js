import { useState, useCallback } from "react"
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  getSubcategoriesByCategory,
} from "../firebase/services"
import {
  getProductos,
  getProductoPorId,
  getProductosPorCategoria,
  getSubcategoriasPorCategoria,
} from "../data/mockData"

// Configuración: cambiar a true cuando Firebase esté configurado y los productos migrados
const USE_FIRESTORE = true

export const useProducts = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      if (USE_FIRESTORE) {
        try {
          const products = await getProducts()
          // Si Firestore devuelve un array vacío, usar mockData como fallback
          if (products.length === 0) {
            console.warn("Firestore vacío, usando mockData como fallback")
            return await getProductos()
          }
          return products
        } catch (firestoreError) {
          console.warn("Error al obtener de Firestore, usando mockData:", firestoreError)
          return await getProductos()
        }
      } else {
        return await getProductos()
      }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchProductById = useCallback(async (id) => {
    setLoading(true)
    setError(null)
    try {
      if (USE_FIRESTORE) {
        try {
          return await getProductById(id)
        } catch (firestoreError) {
          // Silenciosamente intentar con mockData si no se encuentra en Firestore
          // Esto es esperado cuando los IDs no coinciden
          try {
            return await getProductoPorId(id)
          } catch (mockDataError) {
            // Si tampoco se encuentra en mockData, lanzar el error
            throw mockDataError
          }
        }
      } else {
        return await getProductoPorId(id)
      }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchProductsByCategory = useCallback(async (categoria) => {
    setLoading(true)
    setError(null)
    try {
      if (USE_FIRESTORE) {
        try {
          const products = await getProductsByCategory(categoria)
          console.log(`Productos obtenidos de Firestore para "${categoria}":`, products.length)
          // Si Firestore devuelve un array vacío, usar mockData como fallback
          if (!products || products.length === 0) {
            console.warn(`Firestore vacío para la categoría "${categoria}", usando mockData como fallback`)
            const mockProducts = await getProductosPorCategoria(categoria)
            console.log(`Productos obtenidos de mockData para "${categoria}":`, mockProducts.length)
            return mockProducts
          }
          return products
        } catch (firestoreError) {
          console.warn("Error al obtener de Firestore, usando mockData:", firestoreError)
          const mockProducts = await getProductosPorCategoria(categoria)
          console.log(`Productos obtenidos de mockData (fallback) para "${categoria}":`, mockProducts.length)
          return mockProducts
        }
      } else {
        const mockProducts = await getProductosPorCategoria(categoria)
        console.log(`Productos obtenidos de mockData para "${categoria}":`, mockProducts.length)
        return mockProducts
      }
    } catch (err) {
      console.error("Error en fetchProductsByCategory:", err)
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchSubcategoriesByCategory = useCallback(async (categoria) => {
    setLoading(true)
    setError(null)
    try {
      if (USE_FIRESTORE) {
        try {
          const subcategories = await getSubcategoriesByCategory(categoria)
          // Si Firestore devuelve un array vacío, usar mockData como fallback
          if (subcategories.length === 0) {
            console.warn("Firestore vacío para subcategorías, usando mockData como fallback")
            return getSubcategoriasPorCategoria(categoria)
          }
          return subcategories
        } catch (firestoreError) {
          console.warn("Error al obtener de Firestore, usando mockData:", firestoreError)
          return getSubcategoriasPorCategoria(categoria)
        }
      } else {
        return getSubcategoriasPorCategoria(categoria)
      }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    fetchSubcategoriesByCategory,
  }
}

