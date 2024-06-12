import React from 'react';

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelector, selectCartItems } from '../../store/cart/cart.selector';



const CartDropdown = () => {

const cartItems = useSelector(selectCartItems)

const navigate = useNavigate();

const goToCheckoutHandler = () => {
  navigate('/checkout');
};

return(
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
        {cartItems?.map((item) => (
           <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
    </div>
    <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
  </div>)
}

export default CartDropdown;