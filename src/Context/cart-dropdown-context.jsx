import {createContext, useState, useEffect} from 'react'

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

const RemovedProducts = (cartItems,productToRemove) => {
  const alreadyInCart = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id)

  if(alreadyInCart.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }

  return cartItems.map((cartItem) => cartItem.id === productToRemove.id
  ? {...cartItem, quantity: cartItem.quantity - 1}
  : cartItem
  )
}

const clearCartItem = (cartItems,cartItemsToClear ) =>{
  return cartItems.filter(cartItem => cartItem.id !== cartItemsToClear.id)
}


export const CartContext = createContext({
 isOpen : false,
 isSetOpen : () => {},
 cartItems: [],
 addItemsToCart : () => {},
 countCartItem : 0,
 removeItemsFromCart : () => {},
 clearItemsFromCart : () => {}
})

export const CartProvider = ({children}) => {
       const [isOpen,isSetOpen] = useState(false)
      const [cartItems,setCartItems] = useState([])
      const [countCartItem,setcountCartItem] = useState(0)

      useEffect(()=>{
          const newCartCount = cartItems.reduce((total,cartItem)=> total + cartItem.quantity , 0)
          setcountCartItem(newCartCount)
      },[cartItems])
      
      const addItemsToCart = (productToAdd) => {
             setCartItems(addedProducts(cartItems,productToAdd))
       } 

      const removeItemsFromCart = (productToRemove) => {
        setCartItems(RemovedProducts(cartItems,productToRemove))
       } 
      
       const clearItemsFromCart = (cartItemsToClear) => {
        setCartItems(clearCartItem(cartItems,cartItemsToClear))
       } 

     const value  = {isOpen,isSetOpen,addItemsToCart,cartItems,countCartItem,removeItemsFromCart,clearItemsFromCart}
return <CartContext.Provider value  = {value}>{children}</CartContext.Provider>
}