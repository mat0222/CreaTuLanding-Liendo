import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore"
import { db } from "./config"

// Crear una orden en Firestore
export const createOrder = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      fecha: new Date().toISOString(),
    })
    return docRef.id
  } catch (error) {
    console.error("Error al crear la orden:", error)
    throw error
  }
}

// Obtener todas las órdenes
export const getOrders = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "orders"))
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error al obtener las órdenes:", error)
    throw error
  }
}

// Obtener una orden por ID
export const getOrderById = async (orderId) => {
  try {
    const docRef = doc(db, "orders", orderId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }
    } else {
      throw new Error("Orden no encontrada")
    }
  } catch (error) {
    console.error("Error al obtener la orden:", error)
    throw error
  }
}

// Obtener todos los productos desde Firestore
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"))
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error al obtener los productos:", error)
    throw error
  }
}

// Obtener un producto por ID desde Firestore
export const getProductById = async (productId) => {
  try {
    const docRef = doc(db, "productos", productId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      }
    } else {
      // No mostrar error en consola, simplemente lanzar el error para que se maneje arriba
      throw new Error("Producto no encontrado")
    }
  } catch (error) {
    // Solo mostrar error si no es "Producto no encontrado" (que es esperado)
    if (error.message !== "Producto no encontrado") {
      console.error("Error al obtener el producto:", error)
    }
    throw error
  }
}

// Obtener productos por categoría desde Firestore
export const getProductsByCategory = async (categoria) => {
  try {
    const q = query(
      collection(db, "productos"),
      where("categoria", "==", categoria)
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("Error al obtener los productos por categoría:", error)
    throw error
  }
}

// Obtener subcategorías por categoría desde Firestore
export const getSubcategoriesByCategory = async (categoria) => {
  try {
    const q = query(
      collection(db, "productos"),
      where("categoria", "==", categoria)
    )
    const querySnapshot = await getDocs(q)
    const subcategorias = [
      ...new Set(
        querySnapshot.docs.map((doc) => doc.data().subcategoria).filter(Boolean)
      ),
    ]
    return subcategorias
  } catch (error) {
    console.error("Error al obtener las subcategorías:", error)
    throw error
  }
}

// Guardar productos en Firestore (función de utilidad para migrar datos)
export const saveProductsToFirestore = async (productos) => {
  try {
    const batch = []
    productos.forEach((producto) => {
      const docRef = doc(collection(db, "productos"))
      batch.push({ ref: docRef, data: producto })
    })

    // Firestore tiene límite de 500 operaciones por batch
    // Dividir en lotes si es necesario
    for (let i = 0; i < batch.length; i += 500) {
      const batchChunk = batch.slice(i, i + 500)
      await Promise.all(
        batchChunk.map((item) => addDoc(collection(db, "productos"), item.data))
      )
    }

    console.log("Productos guardados en Firestore exitosamente")
  } catch (error) {
    console.error("Error al guardar productos:", error)
    throw error
  }
}

