import './card.styles.scss'
import Button from '../Button/Button.component'
import {useContext} from 'react'
import {CartContext} from '../../Context/cart-dropdown-context'

const Card = ({product}) => {
    const {name,imageUrl,price} = product
    const {addItemsToCart} = useContext(CartContext)

    const handelAddItemsToCart = () => addItemsToCart(product) 
  return(
    <div className = "product-card-container">
        <img src = {imageUrl} alt = {name}/>
         <div className = "footer">
           <span className = "name">{name}</span>
           <span className = "price">{price}</span>
        </div>
    <Button buttonType = "inverted" onClick = {handelAddItemsToCart}>add to cart</Button>
    </div>
  )
}

export default Card