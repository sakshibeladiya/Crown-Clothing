import { CART_ACTION_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


const addCartItem =(cartItems , productToAdd ) => {
    const existingCartItem = cartItems.find(
     (cartItem) => cartItem.id == productToAdd.id
    );
 
    if (existingCartItem) {
       return cartItems.map((cartItem) =>
         cartItem.id ==productToAdd.id ? {...cartItem , quantity : cartItem.quantity+1}
         :cartItem
       )
    }
 
    return [...cartItems , {...productToAdd , quantity:1}];
    
  };
  
  const removeCartItem =(cartItems , cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id == cartItemToRemove.id
      );
      
      if(existingCartItem.quantity == 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
      }
      
      return cartItems.map((cartItem) =>
      cartItem.id == cartItemToRemove.id ? {...cartItem , quantity : cartItem.quantity-1}
      :cartItem
      )
    };
    
    const removeCart = (cartItems , removeItem) => {
          return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
      };

      
 
export const setIsCartOpen = (boolean) => 
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN , boolean);

 export const addItemToCart = (cartItems , productToAdd) => {
    const newCartItems = addCartItem(cartItems , productToAdd );
   return createAction(CART_ACTION_TYPE.SET_CART_ITEMS , newCartItems);
   };

  export const removeItemToCart = (cartItems , cartItemToRemove) => {
     const newCartItems =  removeCartItem(cartItems , cartItemToRemove );
     return createAction(CART_ACTION_TYPE.SET_CART_ITEMS , newCartItems);
   };

  export const remove = (cartItems , removeItem) => {
     const newCartItems =  removeCart (cartItems , removeItem);
     return createAction(CART_ACTION_TYPE.SET_CART_ITEMS , newCartItems);
   };