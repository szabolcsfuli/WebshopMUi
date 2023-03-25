import { useReducer } from 'react'
import CartContext from './CartContext'
import React from 'react'

const cartReducer = (state: any, action: any) => {
  let index = state.items.findIndex((item: any) => {
    return item.id === action.item.id
  })
  let item = index > -1 ? state.items[index] : null

  action.item.price *= 1
  action.item.count *= 1

  switch (action.type) {
    case 'ADD':
      if (item) {
        item.count += action.item.count
      } else {
        state.items.push(action.item)
      }
      break
    case 'REMOVE':
      if (item) {
        item.count -= action.item.count
        if (item.count <= 0) {
          state.items.splice(index, 1)
        }
      }
      break
  }
  state.totalCount = 0
  state.totalItems = 0
  state.totalAmount = 0

  state.items.map((item: any) => {
    state.totalCount += item.count
    state.totalItems += 1
    state.totalAmount += item.price * item.count
  })

  return { ...state }
}

const CartProvider = (props: any) => {
  const defaultReducerState = {
    items: [],
    totalCount: 0,
    totalAmount: 0,
    totalItems: 0
  }
  const [reducer, dispatch] = useReducer(cartReducer, defaultReducerState)

  const ctx = {
    items: reducer.items,
    totalAmount: reducer.totalAmount,
    totalItems: reducer.totalItems,
    totalCount: reducer.totalCount,
    addItem: (item: object) => {
      dispatch({
        type: 'ADD',
        item: item
      })
    },
    removeItem: (item: object) => {
      dispatch({
        type: 'REMOVE',
        item: item
      })
    }
  }

  return (
    <CartContext.Provider value={ctx}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider
