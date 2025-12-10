import { collection, addDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { productos } from "../data/mockData"

export const migrateProductsToFirestore = async () => {
  try {
    const existingProducts = await getDocs(collection(db, "productos"))
    
    if (!existingProducts.empty) {
      return {
        success: false,
        error: "Ya existen productos en Firestore. Limpia la colección primero si deseas migrar nuevamente.",
      }
    }

    const productosToMigrate = productos.map(({ id, ...rest }) => rest)

    const batchSize = 10
    let migrated = 0

    for (let i = 0; i < productosToMigrate.length; i += batchSize) {
      const batch = productosToMigrate.slice(i, i + batchSize)
      await Promise.all(
        batch.map((producto) => addDoc(collection(db, "productos"), producto))
      )
      migrated += batch.length
    }

    return { success: true, count: migrated }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

