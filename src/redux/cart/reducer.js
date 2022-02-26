import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: [],
    },

    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter((item) => {
                return item.id !== action.payload
            })
        }
    }
})

export default cartSlice.reducer
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
