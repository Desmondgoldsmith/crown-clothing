import './checkout.styles.scss'
import {useContext} from 'react' 
import { CartContext } from '../../Context/cart-dropdown-context'

const Checkout = () => {
    const {cartItems,addItemsToCart,removeItemsFromCart} = useContext(CartContext)
    return(
        <div>
            <h1>I am the checkout page!</h1>

          {cartItems.map((cartItem) => {
            const {id, name,price,imageUrl,quantity} = cartItem

            const handelIncreament = () => {
                addItemsToCart(cartItem)
            }
            
            const handelDecreament = () => {
                removeItemsFromCart(cartItem)
            }

            return(
                <div key = {id}>
                <h3>{name}</h3>
                <span>{quantity}</span>
                <br/>
                <span onClick = {handelIncreament}>increment</span>
                <br/>
                <span onClick = {()=>removeItemsFromCart(cartItem)}>decreament</span>
                </div>
            )
          })}
        </div>
    )
}
export default Checkout
