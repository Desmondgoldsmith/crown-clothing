import { Fragment } from "react"



const FormInput = ({label,...otherProps}) => {
    return(
        <Fragment>
         <label className = "">{label}</label>
         <input className = "" {...otherProps} />
        </Fragment>
    )
}


export default FormInput