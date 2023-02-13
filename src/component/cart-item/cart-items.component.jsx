import {CartItemContainer , CartItemsDetails , Name} from './cart-item.styles.jsx';

const CartItems = ({cartItem}) => {
   const {name, quantity , imageUrl , price} = cartItem;

   return (
    <CartItemContainer>
      <img src={imageUrl} alt = {`${name}`}/>
      <CartItemsDetails>
        <Name> {name} </Name>
        <span className='price'> {quantity} x ${price} </span>
      </CartItemsDetails>
    </CartItemContainer>
    );
};

export default CartItems;