import './cart.styles.scss'
import { ReactComponent as CartLogo } from '../../Asset/shopping-bag.svg'
import {useContext} from 'react'
import {CartContext} from '../../Context/cart-dropdown-context'

const Cart = () => {
    const {isOpen,isSetOpen} = useContext(CartContext)
    const handelToggleCart = () => isSetOpen(!isOpen)
    return(
        <div className = "cart-icon-container" onClick = {handelToggleCart}>
           <CartLogo className = "shopping-icon"/>
           <span className = "item-count">0</span>
        </div>
    )
}

export default Cart