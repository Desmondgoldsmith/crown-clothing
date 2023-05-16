import { Fragment , useState } from "react"
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
  } from '../../Utils/Firebase/firebase.utils.jsx';

const defaultFormFeilds = {
  displayName : "",
  email       : "",
  password    : "",
  confirmPassword : "",
}

const SignupForm = () => {
    const [formInputs,setFormInputs] = useState(defaultFormFeilds)
    const {displayName,email,password,confirmPassword} = formInputs
   
    console.log(formInputs)

    const resetFormFields = () => {
        setFormInputs(defaultFormFeilds)
    }

    const handelSubmit = async (event) => {
    event.preventDefault()

     if(password !== confirmPassword){
        alert('Passwords does not match !')
        return;
     }

     try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        // resetFormFields();
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Cannot create user, email already in use');
        } else {
          console.log('user creation encountered an error', error);
        }
      }
    };



    const formInputChange = (event) => {
        const {name,value} = event.target
        setFormInputs({...formInputs,[name]:value})
    }

    return(
        <Fragment>
          <form onSubmit={handelSubmit}>
            <label>Display Name</label>
            <input 
            type = "text" 
            onChange={formInputChange} 
            value={displayName}
             name="displayName" 
             required/>
            
            <label>Email</label>
            <input 
            type = "email" 
            onChange={formInputChange} 
            value={email}
             name="email" 
             required/>
            
            <label>Password</label>
            <input 
            type = "password" 
            onChange={formInputChange} 
            value={password}
             name="password" 
             required/>
            
            <label>Confirm Password</label>
            <input 
            type = "password" 
            onChange={formInputChange} 
            value={confirmPassword}
             name="confirmPassword" 
             required/>

            <button type = "submit">Submit</button>
          </form>
        </Fragment>
    )
}

export default SignupForm