import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-cyan-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-slate-200 mb-4">
        Página no encontrada
      </h2>
      <p className="text-lg text-slate-400 mb-8 max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="bg-cyan-500 text-white px-6 py-3 rounded-lg text-base font-semibold no-underline transition-all duration-200 inline-block hover:bg-cyan-600 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
