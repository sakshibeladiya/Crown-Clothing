
import { Fragment , useContext } from "react";
import { Outlet } from "react-router-dom"
import { ReactComponent as Crownlogo} from '../../assests/crown.svg' ;
import {useSelector} from 'react-redux'; 

// import { CartContext } from "../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js"

import { NavigationContainer , LogoContainer  ,NavLinkss, NavLinks } from '../navigation/navigation.styles'
import {signOutUser} from '../../utils/firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import '../navigation/navigation.styles';


const Navigation = () =>{
  const currentUser = useSelector(selectCurrentUser);
  console.log("navigation.j=======" , currentUser);

  // const { currentUser ,setCurrentUser } = useContext (UserContext);
  // const { isCartOpen } = useContext (CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  // const signOutUserHandler = async() => { 
  //  await signOutUser();
  //   setCurrentUser(null);
  // } 

  return (
      <Fragment>
         <NavigationContainer>
            <LogoContainer to='/home'>
            <Crownlogo className="crown-logo"/>
            </LogoContainer>
          
          <NavLinks>
                <NavLinkss to ='/shop'>
                    SHOP
                </NavLinkss>

                {currentUser ? (
                    <NavLinkss as='span' onClick = {signOutUser}> SIGN OUT</NavLinkss>
                ) : (
                    <NavLinkss to= '/auth'> 
                    SIGNIN 
                    </NavLinkss>
                )}
                <CartIcon/>
          </NavLinks>


          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
         
         <Outlet/>
      </Fragment>
    )
  } 
  export default Navigation;