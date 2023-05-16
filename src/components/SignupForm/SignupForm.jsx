import { Fragment , useState } from "react"

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

    const formInputChange = (event) => {
        const {name,value} = event.target
        setFormInputs({...formInputs,[name]:value})
    }
    return(
        <Fragment>
          <form onSubmit={() => {}}>
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