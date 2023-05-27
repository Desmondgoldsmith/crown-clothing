import './card.styles.scss'
import Button from '../Button/Button.component'

const Card = () => {
  return(
    <div className = "product-card-container">
        <img/>
        <div className = "footer">
           <span className = "name"></span>
           <span className = "price"></span>
        </div>
    <Button buttonType = "inverted">add to cart</Button>
    </div>
  )
}

export default Card