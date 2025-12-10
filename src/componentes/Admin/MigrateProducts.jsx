import { useState } from "react"
import { migrateProductsToFirestore } from "../../utils/migrateToFirestore"

const MigrateProducts = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleMigrate = async () => {
    setLoading(true)
    setResult(null)

    try {
      const response = await migrateProductsToFirestore()
      setResult(response)
    } catch (error) {
      setResult({ success: false, error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-200 mb-4">
            Migrar Productos a Firestore
          </h2>
          <p className="text-slate-400 mb-6">
            Esta herramienta migrará todos los productos de mockData.js a la
            colección "productos" en Firestore.
          </p>

          <button
            onClick={handleMigrate}
            disabled={loading}
            className="bg-cyan-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-4"
          >
            {loading ? "Migrando..." : "Migrar Productos"}
          </button>

          {result && (
            <div
              className={`p-4 rounded-lg ${
                result.success
                  ? "bg-green-500/10 border border-green-500/50"
                  : "bg-red-500/10 border border-red-500/50"
              }`}
            >
              {result.success ? (
                <p className="text-green-400">
                  ✅ {result.count} productos migrados exitosamente
                </p>
              ) : (
                <p className="text-red-400">
                  ❌ Error: {result.error || "Error desconocido"}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MigrateProducts

