import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)

export const setIsCartOpen = (isOpen) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen)

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === productToAdd.id
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
      );
    }
  
    return [...cartItems, {...productToAdd, quantity: 1}];
  };

  const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
  

  export const addItemToCart = (cartItem, productToAdd) => {
    const updateCart = addCartItem(cartItem, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updateCart)
 };

 export const removeItemToCart = cartItemToRemove => {
    const removeCart =  removeCartItem(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeCart)
};

export const clearItemFromCart = cartItemToClear => {
    const updateCartItemsReducer = clearCartItem(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updateCartItemsReducer)
  };