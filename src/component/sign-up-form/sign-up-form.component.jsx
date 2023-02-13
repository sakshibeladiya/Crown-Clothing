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
import './sign-up-form.styles.scss'
import Button from '../button/button.componens';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  

  const resetFormFields=() =>{
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );


      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        
  
       
        <FormInput
          label ="displayName"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="email"
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
        
        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType ='inverted' type="submit" >Sign Up</Button>
      </form>
    </div>
  );
};
export default Signup;
