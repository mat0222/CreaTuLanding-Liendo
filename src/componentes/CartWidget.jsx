import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const CartWidget = () => {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <Link
      to="/cart"
      className="relative flex items-center gap-2 cursor-pointer"
    >
      <FaShoppingCart
        size={24}
        className="text-cyan-500 transition-transform duration-300 hover:scale-110"
      />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-cyan-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold animate-pulse min-w-[20px] text-center">
          {totalItems}
        </span>
      )}
    </Link>
  )
}

export default CartWidget
