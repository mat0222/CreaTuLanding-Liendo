import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import NotFound from "./componentes/NotFound"

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", backgroundColor: "#0f172a" }}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a GameTech - Tu tienda gamer de confianza" />
            }
          />
          <Route
            path="/categoria/:categoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
