import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../Utils/Firebase/firebase.utils.jsx';
  
  import SignupForm from '../../components/SignupForm/SignupForm.jsx';
  
  const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignupForm />
      </div>
    );
  };
  
  export default SignIn;