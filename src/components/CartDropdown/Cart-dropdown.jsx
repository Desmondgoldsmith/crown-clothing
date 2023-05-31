import './cart-dropdown.styles.scss'
import Button from '../../Button/Button.component'
import { useContext } from 'react'
import {CartContext} from '../../Context/cart-dropdown-context'
import CartItem from '../CartItem/Cart-item.components'

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    return(
        <div className = "cart-dropdown-container">
          <div className = "cart-items">
          {cartItems.map((item) => {
            <CartItem key={item.id} CartItem = {item}/>
          })}
          </div>
           <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown