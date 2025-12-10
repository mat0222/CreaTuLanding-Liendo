import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from "./componentes/NavBar"
import Home from "./componentes/Home"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import Cart from "./componentes/Cart/Cart"
import MigrateProducts from "./componentes/Admin/MigrateProducts"
import NotFound from "./componentes/NotFound"
import Footer from "./componentes/Footer"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-900 flex flex-col">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/categoria/:categoria"
                element={<ItemListContainer />}
              />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin/migrate" element={<MigrateProducts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Routes>
            <Route path="/" element={null} />
            <Route path="*" element={<Footer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
