import './cart-dropdown.styles.scss'
import Button from '../Button/Button.component'
import CartItem from '../CartItem/Cart-item.components'
import {useContext} from 'react'
import { CartContext } from '../../Context/cart-dropdown-context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const handelNavigate = () => {
        navigate('/checkout')
    }
    
    return(
        <div className = "cart-dropdown-container">
          <div className = "cart-items">
           {cartItems.map((cartItem => <CartItem key = {cartItem.id} cartItems={cartItem} />))}
          </div>
           <Button onClick = {handelNavigate}>checkout</Button>
        </div>
    )
}

export default CartDropdown