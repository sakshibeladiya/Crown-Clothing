// import { getRedirectResult } from "firebase/auth";
// import {useEffect} from 'react';
// import { signInWithGooglePopup, 
//     createUserDocumentFromAuth, 
//     signInWithGoogleRedirect,
//      auth
//  } from "../../../utils/firebase/firebase.utils";

 import Signup from "../../sign-up-form/sign-up-form.component.jsx";
 import SignInForm from "../../sign-in-form/sign-in-form.component.jsx";
 import '../authenntication/authentication.styles.scss'

const Authentication =()  => {
    // useEffect( () => (
    //   async() => {
    //    const response = await getRedirectResult(auth);
    //    if(response){
    //  const userDocRef= await createUserDocumentFromAuth(response.user);}
    // }
    // ),[]);

//    const logGoogleRedirct = async() =>{
//     const {user} = await signInWithGoogleRedirect();
//    console.log(user);
//  } 
    return (
        <div className="authentication-container">
            {/* <button onClick= {logGoogleUser}>
                sign in with googlepopup
            </button> */}
            {/* <button onClick= {signInWithGoogleRedirect}>
                sign in with google redirect
            </button> */}
            <SignInForm/>
            <Signup/>
        </div>
    )
}

export default Authentication;