import { createSelector } from "reselect"

export const cartSelector = (state) => state.cart

export const selectCartItems = createSelector([cartSelector], (cart) => cart.cartItems)


export const selectIsCartOpen = createSelector([cartSelector], (cart) => cart.isCartOpen)

export const selectCount = createSelector([cartSelector], (cart) => cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
))

export const selectTotal = createSelector([cartSelector], (cart) => cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
))