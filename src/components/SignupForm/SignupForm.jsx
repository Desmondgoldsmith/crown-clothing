import { Fragment } from "react"


const SignupForm = () => {
    return(
        <Fragment>
          <form>
           <label>Display Name</label>
           <input 
           type = "text" 
           className="" 
           onChange={} 
           value={} 
           required
           />
           
           <label>Email</label>
           <input 
           type = "email" 
           className="" 
           onChange={} 
           value={} 
           required
           />
           
           <label>Password</label>
           <input 
           type = "password" 
           className="" 
           onChange={} 
           value={} 
           required
           />
           
           <label>Confirm Password</label>
           <input 
           type = "password" 
           className="" 
           onChange={} 
           value={} 
           required
           />


          </form>
        </Fragment>
    )
}

export default SignupForm