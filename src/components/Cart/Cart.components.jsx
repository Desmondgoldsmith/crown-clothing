import './cart.styles.scss'
import { ReactComponent as CartLogo } from '../../Asset/shopping-bag.svg'

const Cart = () => {
    return(
        <div className = "cart-icon-container">
           <CartLogo className = "shopping-icon"/>
           <span className = "item-count">0</span>
        </div>
    )
}

export default Cart