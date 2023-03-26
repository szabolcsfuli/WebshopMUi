import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  totalItems: 0,
  totalCount: 0,
  addItem: (item) => {},
  removeItem: (item) => {}
})

export default CartContext
