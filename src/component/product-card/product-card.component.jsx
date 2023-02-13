import {ProductCardContainer} from './product-card.styles.js';
import Button from '../button/button.componens';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ProductCard = ({product}) => {
const{name , imageUrl , price} = product;

const dispatch =useDispatch();
const cartItems = useSelector(selectCartItems);
 
const addProductToCart = () => dispatch(addItemToCart(cartItems , product));

  return(
     <ProductCardContainer>
       <img src= {imageUrl} alt={`${name}`}/>
       <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
       </div>
       <Button  buttonType = 'inverted' onClick= {addProductToCart}>ADD TO CART</Button>
     </ProductCardContainer>

  );
};

export default ProductCard;