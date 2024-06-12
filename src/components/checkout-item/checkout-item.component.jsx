import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch()

  const selectItem = useSelector(selectCartItems)

  // const { clearItemFromCart, addItemToCart, removeItemToCart } =
  //   useContext(CartContext);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(selectItem,cartItem));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
