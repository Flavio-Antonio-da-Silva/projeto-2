// src/context/CartContext.jsx
import { createContext, useState } from 'react'

// Cria o contexto
export const CartContext = createContext()

// Cria o provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item])
  }

  function removeFromCart(index) {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
