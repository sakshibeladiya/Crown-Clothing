// import { createContext , useReducer } from "react";
// import { createAction } from "../../utils/reducer/reducer.utils";

// const addCartItem =(cartItems , productToAdd ) => {
//    const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id == productToAdd.id
//    );

//    if (existingCartItem) {
//       return cartItems.map((cartItem) =>
//         cartItem.id ==productToAdd.id ? {...cartItem , quantity : cartItem.quantity+1}
//         :cartItem
//       )
//    }

//    return [...cartItems , {...productToAdd , quantity:1}];
   
//   };
  
//   const removeCartItem =(cartItems , cartItemToRemove) => {
//     const existingCartItem = cartItems.find(
//       (cartItem) => cartItem.id == cartItemToRemove.id
//      );
  
//      if(existingCartItem.quantity == 1){
//       return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
//      }
  
//      return cartItems.map((cartItem) =>
//           cartItem.id == cartItemToRemove.id ? {...cartItem , quantity : cartItem.quantity-1}
//           :cartItem
//         )
//      };

//      const removeCart = (cartItems , removeItem) => {
//        return cartItems.filter((cartItem) => cartItem.id !== removeItem.id)
//      }



// export const CartContext = createContext({
//     isCartOpen : false,
//     setCartOpen : () => {},
//     cartItems : [],
//     addItemToCart : () => {},
//     removeItemToCart : () => {},
//     remove : () => {},
//     cartCount : 0,
//     cartTotal : 0,
//   });


// const INITIAL_STATE  = {
//   isCartOpen : false,
//   cartCount : 0,
//   cartTotal : 0,
//   cartItems :[],
// }


// const CART_ACTION_TYPE = {
//   SET_CART_ITEMS : 'SET_CART_ITEMS',
//   SET_IS_CART_OPEN : 'SET_IS_CART_OPEN',
   
// }
// export const cartReducer = (state , action) => {
//   const {type , payload} = action;

//   switch (type){
//     case CART_ACTION_TYPE.SET_CART_ITEMS :
//        return {
//         ...state,
//         ...payload,
//        };
//        case CART_ACTION_TYPE.SET_IS_CART_OPEN:
//         return{
//           ...state , 
//           isCartOpen: payload,
//         }
//       default:
//         throw new Error('unhandled type of ${type} in cartreducer'); 
//   }
// };

// export const CartProvider = ({children}) => {
//     const [{cartItems , isCartOpen, cartCount , cartTotal} , dispatch] =
//       useReducer(cartReducer , INITIAL_STATE);
      

//     const updateCartItemsReducer = (newCartItems) => {
//       const newCartCount = newCartItems.reduce((total , cartItem) =>
//           total + cartItem.quantity , 0);

//       const newCartTotal = newCartItems.reduce((total , cartItem) => 
//           total + cartItem.quantity * cartItem.price , 0);
    

  
//     dispatch(
//       createAction(CART_ACTION_TYPE.SET_CART_ITEMS , {
//         cartItems: newCartItems,
//          cartCount: newCartCount,
//          cartTotal: newCartTotal, 
//     })
//     )
//   };
    

//     const addItemToCart =(productToAdd) => {
//      const newCartItems = addCartItem(cartItems , productToAdd );
//      updateCartItemsReducer(newCartItems);
//     };

//     const removeItemToCart =(cartItemToRemove) => {
//       const newCartItems =  removeCartItem(cartItems , cartItemToRemove );
//      updateCartItemsReducer(newCartItems);
//     };

//     const removeItemToCart =(cartItemToRemove) => {
//       const newCartItems =  removeCartItem(cartItems , cartItemToRemove );
//      updateCartItemsReducer(newCartItems);
//     };
    
//     const setCartOpen = (bool) => {
//       dispatch( createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
//     };

//     const value = {isCartOpen , setCartOpen , addItemToCart , cartItems , cartCount ,cartTotal ,  removeItemToCart , remove};

//     return (
//       <CartContext.Provider value= {value}> {children} </CartContext.Provider>
//     );
// };
