import './cart.styles.scss'
import { ReactComponent as CartLogo } from 'react'

const Cart = () => {
    return(
        <div className = "">
           <CartLogo className = ""/>
           <span className = "">0</span>
        </div>
    )
}

export default Cart