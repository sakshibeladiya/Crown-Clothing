import { ReactComponent as Shoppingsvg } from '../../assests/shopping-bag.svg';
import {ShoppingIcon , CartIconContainer , ItemCount} from '../cart-icon/cart-icon.styles.jsx'
import { useDispatch , useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action.js'

import { 
   selectCartCount , 
   selectIsCartOpen
  } from '../../store/cart/cart.selector.js';

// import { useContext } from 'react';
// import { CartContext } from '../context/cart.context';

export const CartIcon = () => {

   const dispatch = useDispatch();
   
   const cartCount = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);
   

   const ToggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
   
    return(
       <CartIconContainer onClick={ToggleIsCartOpen}>
         <ShoppingIcon className= 'shopping-icon' />
         <ItemCount> {cartCount} </ItemCount>
       </CartIconContainer>
      
    );
};

export default CartIcon;