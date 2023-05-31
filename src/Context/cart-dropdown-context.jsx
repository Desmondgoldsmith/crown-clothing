import {createContext, useState} from 'react'


const addCartItem = ({cartItems, productToAdd}) => {
    const existingItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
    
    if(existingItems){
       cartItems.map((cartItems) => cartItems.id === productToAdd.id 
       ? {...cartItems, quantity : cartItems.quantity + 1} 
       : cartItems 
       )
    } 
    return [...cartItems,{...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
 isOpen : false,
 isSetOpen : () => {},
 cartItems : [],
 addItemsToCart : () => {}
})

export const CartProvider = ({children}) => {
       const [isOpen,isSetOpen] = useState(false)
       const [cartItems,setCartItems] = useState([])

      const addItemsToCart = ({productToAdd}) => {
      return addCartItem(setCartItems(cartItems, productToAdd))
      }

     const value  = {isOpen,isSetOpen,addItemsToCart,cartItems}
return <CartContext.Provider value  = {value}>{children}</CartContext.Provider>
}