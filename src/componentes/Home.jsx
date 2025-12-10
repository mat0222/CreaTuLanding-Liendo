import { useState, useEffect } from "react"
import HeroSection from "./HeroSection"
import Carousel from "./Carousel"
import BannerConsolas from "./BannerConsolas"
import Ofertas from "./Ofertas"
import Footer from "./Footer"
import { useProducts } from "../hooks/useProducts"

const Home = () => {
  const [productos, setProductos] = useState([])
  const { fetchProducts } = useProducts()

  useEffect(() => {
    let isMounted = true

    fetchProducts()
      .then((data) => {
        if (isMounted) {
          setProductos(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setProductos([])
        }
      })

    return () => {
      isMounted = false
    }
  }, [fetchProducts])

  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <Carousel productos={productos} />
      <BannerConsolas />
      <Ofertas productos={productos} />
      <Footer />
    </div>
  )
}

export default Home

