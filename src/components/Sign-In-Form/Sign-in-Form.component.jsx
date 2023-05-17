import {useState } from "react"
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
  } from '../../Utils/Firebase/firebase.utils.jsx';
import FormInput from "../Form-input/Form-input.component.jsx";
import Button from "../Button/Button.component";

const defaultFormFeilds = {
  email       : "",
  password    : "",
}

const SigninForm = () => {
    const [formInputs,setFormInputs] = useState(defaultFormFeilds)
    const {email,password} = formInputs
   
    console.log(formInputs)

    const handelSubmit = async (event) => {
    event.preventDefault()


     try {
        
      } catch (error) {
        
      }
    };



    const formInputChange = (event) => {
        const {name,value} = event.target
        setFormInputs({...formInputs,[name]:value})
    }

    return(
        <div className='sign-up-container'>
        <h2>Already Have An Account?</h2>
        <span>Sign in with your email and password</span>

          <form onSubmit={handelSubmit}>
          
            <FormInput
            label = "Email"
            type = "email" 
            onChange={formInputChange} 
            value={email}
             name="email" 
             required/>
            
            <FormInput
            label = "Password"
            type = "password" 
            onChange={formInputChange} 
            value={password}
             name="password" 
             required/>
            
          <div className = "button-container">
            <Button type = "submit">Submit</Button>
            <Button buttonType="google" onClick = {() => {}}>sign in with Google</Button>
          </div>
          </form>
        </div>
    )
}

export default SigninForm