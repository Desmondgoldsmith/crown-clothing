import {createContext, useState} from 'react'

const addedProducts = (cartItems,productToAdd) =>{
  const alreadyInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id)

    if(alreadyInCart){
      return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
      ? {...cartItem,quantity: cartItem.quantity + 1}
      : cartItem
      )
    }


    return [...cartItems,{...productToAdd, quantity:1}]
}


export const CartContext = createContext({
 isOpen : false,
 isSetOpen : () => {},
 cartItems: [],
 addItemsToCart : () => {}
})

export const CartProvider = ({children}) => {
       const [isOpen,isSetOpen] = useState(false)
      const [cartItems,setCartItems] = useState([])
      
      const addItemsToCart = (productToAdd) => {
             setCartItems(addedProducts(cartItems,productToAdd))
       } 

     const value  = {isOpen,isSetOpen,addItemsToCart,cartItems}
return <CartContext.Provider value  = {value}>{children}</CartContext.Provider>
}