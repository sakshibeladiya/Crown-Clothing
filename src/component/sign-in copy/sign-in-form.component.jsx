//  import { useState } from "react";
 
//  import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
// const defaultFormfield = {
// displayName : '',
// email : '',
// password: '',
// confirmpassword : '',
// }


// const Signup = () => {

//   const [formFields , setFormFields] = useState(defaultFormfield) ;
//   const { displayName, email, password, confirmPassword } = formFields;

//   console.log(formFields);

//   const handleSubmit = async (event) =>{
//        event.preventDefault();

//        if (password !== confirmPassword)
//         { alert ('password do not match');
//          return;
//         }

//        try{
//          const { user } =  await createAuthUserWithEmailAndPassword(email, password);
       
//          await createUserDocumentFromAuth (user,  { displayName });
       
//        }catch(error){
       // if (error.code == "auth/email-already-in-use") {
       //        alert("cannot create user, email already in use");
       //      } else {
//               console.log('user created an error ', error);
//        }
//      };
  

//   const handleChange = (event) => {
//     const {name , value} = event.target;
//     setFormFields({ ...formFields , [name]: value});
//   };
 

//     return(
//     <div>
//         <h1> Signup with your email and password</h1>
//         <form onSubmit={handleSubmit}>

//             <label>Display Name</label>
//             <input type="text" 
//                    required
//                    onChange={handleChange}
//                    name='displayName'
//                    value={displayName} />

//             <label>email</label>
//             <input type="email"
//                    required
//                    onChange={handleChange}
//                    name='email'
//                    value={email}/>

//             <label>paaword</label>
//             <input type="password" 
//                    required
//                    onChange={handleChange}
//                    name='password'
//                    value={password}/>

//             <label>confirm password</label>
//             <input type="password" 
//                    required
//                    onChange={handleChange}
//                    name='confirmPassword'
//                    value={confirmPassword}/>

//             <button type="submit">Signup</button>
//         </form>
//     </div>
// )}

// export default Signup;

import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "../sign-in-form/sign-in-form.styles.scss"
import Button from '../button/button.componens'



const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields=() =>{
    setFormFields(defaultFormFields);
  };


  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
 } 


  const handleSubmit = async (event) => {
    event.preventDefault();

   
    try { 
      const response = await signInAuthUserWithEmailAndPassword(
      email,
      password
    );
    console.log(response);
      resetFormFields();
    } 
    catch (error) {
      switch(error.code){
        case('auth/wrong-password') :
          alert('incorrect password for email.');
          break;
        case('auth/user-not-found') :
          alert('User not found');
          break;
        default :
          console.log(error)  
    }
  }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
          label ="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        
       <div className= 'buttons-container'>
        <Button type="submit" >Sign In</Button>
        <Button type="button" buttonType='google' onClick={signInWithGoogle} > Google SignIn</Button>
       </div>

      </form>
    </div>
  );
};
export default SignInForm;
