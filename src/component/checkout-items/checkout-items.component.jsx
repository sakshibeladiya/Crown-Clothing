import '../checkout-items/checkout-items.styles.scss';


import { removeItemToCart ,addItemToCart , remove } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useDispatch , useSelector } from 'react-redux';


const CheckoutItem = ({cartItem}) => {
  const {name , price, imageUrl, quantity  } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  // const remove = useSelector(remove);
  // const removeItemToCart = useSelector(removeItemToCart);
  //  const { remove , removeItemToCart , addItemToCart } = useContext(CartContext);
   const removeItemHendler = () => dispatch(remove(cartItems , cartItem));
   const removeCartItemHendler = () => dispatch(removeItemToCart(cartItems , cartItem));
   const addCartItemHendler = () => dispatch(addItemToCart(cartItems , cartItem));

    return (
        <div className='checkout-item-container'>
          <div className='image-container'>
            <img src={imageUrl} alt ={`${name}`}/>
          </div>
          <span className='name'> {name} </span>
          <span className='quantity'>
              <div className='arrow' onClick = {removeCartItemHendler}>  &#10094; </div>
                  <span className='value'>  {quantity} </span>
              <div className='arrow' onClick = {addCartItemHendler}> &#10095;</div>
          </span>
          
          <span className='price'> {price} </span>
          <div className='remove-button' onClick= {removeItemHendler}> &#10005; </div>
          </div>
    )

};

export default CheckoutItem;