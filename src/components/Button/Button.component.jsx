const Button_Type_Classes = {
    google: 'google_sign_in',
    inverted: 'inverted'
}

const Button = ({children, buttonType,  ...otherProps}) => {
    return(
            <button
             className = {`button-container ${Button_Type_Classes[buttonType]}`} {...otherProps}>{children}
             </button>
    )
}

export default Button