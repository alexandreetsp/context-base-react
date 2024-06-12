import './product-card.styles.scss';

import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.actions';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, quantity } = product;

  const dispatch = useDispatch()

  const selectCart = useSelector(selectCartItems)

  const addProductToCart = () =>  dispatch(addItemToCart(selectCart, product));
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard;