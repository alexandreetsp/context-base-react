import { useContext, useEffect } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context';

import './cart-icon.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.actions';
import { cartSelector, selectCount } from '../../store/cart/cart.selector';

const CartIcon = () => {
 

  const dispatch = useDispatch()

  const state = useSelector(cartSelector)
  const cartCount = useSelector(selectCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!state.isCartOpen));

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;