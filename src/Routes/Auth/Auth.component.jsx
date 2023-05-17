import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../Utils/Firebase/firebase.utils.jsx';
import SigninForm from '../../components/Sign-In-Form/Sign-in-Form.component.jsx';
import SignupForm from '../../components/SignupForm/SignupForm.jsx';
  
  const Auth = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <SigninForm/>
        <SignupForm />
      </div>
    );
  };
  
  export default Auth;