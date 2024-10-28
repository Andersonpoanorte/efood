import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ECardapio } from '../../models/cardapio'

type CartState = {
  items: ECardapio[]
  isOpen: boolean
  total: number
  isCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0,
  isCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ECardapio>) => {
      const food = state.items.find((item) => item.id === action.payload.id)
      if (!food) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    toggleCheckout: (state) => {
      state.isCheckout = !state.isCheckout
    },
    resetCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { add, open, close, remove, toggleCheckout, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
