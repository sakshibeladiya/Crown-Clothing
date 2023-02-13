import { CART_ACTION_TYPE } from "./cart.types";

// export const CART_INITIAL_STATE  = {
//     cartItems : [], 
//     isCartOpen : true,
//   }
  
  
  export const cartReducer = (state ={
    cartItems: [],
    isCartOpen: true,
        } , action ={}) => {
    const {type , payload} = action;
  
    switch (type){
      case CART_ACTION_TYPE.SET_CART_ITEMS :
        console.log("-------->>> state.cartItems",state.cartItems)
         return {
          ...state,
          cartItems : payload,
         };
         case CART_ACTION_TYPE.SET_IS_CART_OPEN:
          return{
            ...state , 
            isCartOpen: payload,
          }
        default:
          return state;
    }
  };
  