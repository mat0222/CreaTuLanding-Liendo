import NavBar from "./componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer"

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a" }}>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a GameTech - Tu tienda gamer de confianza" />
    </div>
  )
}

export default App
