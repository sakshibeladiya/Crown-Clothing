import './cart-dropdown.styles.jsx';
import Button from'../button/button.componens';
import CartItems from '../cart-item/cart-items.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdowncontainer , CartItem , EmptyMassage } from './cart-dropdown.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
      navigate('/checkout');
    }


   return (
        <CartDropdowncontainer>
            <CartItem>
              {
              cartItems.length ? 
              (cartItems.map(item => <CartItems key={item.id} cartItem={item}/>)) : 
              <EmptyMassage> YOUR CART IS EMPTY</EmptyMassage>
              }
            </CartItem>
            <Button onClick= {goToCheckOutHandler} > GO TO CHECKOUT </Button>
        </CartDropdowncontainer>
   );
};

export default CartDropdown;

