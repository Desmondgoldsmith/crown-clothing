

const CartItem = ({CartItems}) => {
    const {name,quantity} = CartItems
  return(
    <div>
        <h1>{name}</h1>
        <span>{quantity}</span>
    </div>
  )
}

export default CartItem