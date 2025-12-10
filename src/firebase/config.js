// Configuración de Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDngJwfobBXbG0ZDf5ImyL1pHCp2m2wUL4",
  authDomain: "game-tech-d0af4.firebaseapp.com",
  projectId: "game-tech-d0af4",
  storageBucket: "game-tech-d0af4.firebasestorage.app",
  messagingSenderId: "397550065836",
  appId: "1:397550065836:web:619ec24165d3a1a4f7a709",
  measurementId: "G-HFSR2KP2NV"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firestore
export const db = getFirestore(app)

// Inicializar Analytics (solo en el navegador)
let analytics = null
if (typeof window !== "undefined") {
  analytics = getAnalytics(app)
}

export { analytics }
export default app

