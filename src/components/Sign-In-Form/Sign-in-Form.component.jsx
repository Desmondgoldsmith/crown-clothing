import {useState} from "react"
import {signInAuthUserWithEmailAndPassword} from '../../Utils/Firebase/firebase.utils.jsx';
  import {signInWithGooglePopup } from '../../Utils/Firebase/firebase.utils.jsx';
import FormInput from "../Form-input/Form-input.component.jsx";
import Button from "../Button/Button.component";
import './sign-in-form.styles.scss'

const defaultFormFeilds = {
  email       : "",
  password    : "",
}

const SigninForm = () => {
    const [formInputs,setFormInputs] = useState(defaultFormFeilds)
    const {email,password} = formInputs

    // console.log(formInputs)

    // const resetFormFields = () => {
    //   setFormInputs(defaultFormFeilds);
    // };

    const handelSubmit = async (event) => {
      event.preventDefault();
  
      try {
         await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };

    const logGoogleUser = async () => {
      await signInWithGooglePopup();
      // const userDocRef = await createUserDocumentFromAuth(user);
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
            
          <div className = "buttons-container">
            <Button type = "submit">Submit</Button>
            <Button type = "button" buttonType="google" onClick = {logGoogleUser}>Google SignIn</Button>
          </div>
          </form>
        </div>
    )
}

export default SigninForm