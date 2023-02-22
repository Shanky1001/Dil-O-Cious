import { createSlice } from '@reduxjs/toolkit'
import sweet from '../../Assests/data/Dessert.json'

const initialState = {
    products: sweet, cart: []
}

export const CartSlice = createSlice({
    name: "cart slice", initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, { ...action.payload, qty: 1 }]
        },
        removeFromCart: (state, action) => {
            state.cart = [...state.cart.filter((c) => c.idMeal !== action.payload.idMeal)]
        },
        increaseQTY: (state, action) => {
            state.cart = [...state.cart.filter((c) => (c.idMeal === action.payload.idMeal) ? c.qty = (action.payload.qty) : c.qty)]
        },
        decreaseQTY: (state, action) => {
            state.cart = [...state.cart.filter((c) => (c.idMeal === action.payload.idMeal) ? (c.qty === 1 ? c.qty = 1 : c.qty = action.payload.qty) : c.qty)]
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, removeFromCart, increaseQTY, decreaseQTY, clearCart } = CartSlice.actions
export default CartSlice.reducer