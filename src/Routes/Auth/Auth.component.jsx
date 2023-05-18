import SigninForm from '../../components/Sign-In-Form/Sign-in-Form.component.jsx';
import SignupForm from '../../components/SignupForm/SignupForm.jsx';
import './auth.styles.scss'
  
  const Auth = () => {
    return (
      <div className = "authentication-container">
        <SigninForm/>
        <SignupForm />
      </div>
    );
  };
  
  export default Auth;