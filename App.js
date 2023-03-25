import React from 'react'
import CartProvider from './store/CartProvider'
import Navigation from './components/Navigation'

export default function App () {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  )
}
