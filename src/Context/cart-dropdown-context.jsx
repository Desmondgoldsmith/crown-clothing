import {createContext, useState} from 'react'


const addCartItem = (cartItems, productToAdd) => {
       const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);
          
            if (existingCartItem) {
              return cartItems.map((cartItem) =>
                cartItem.id === productToAdd.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              );
            }
          
       return [...cartItems, { ...productToAdd, quantity: 1 }];
          
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

      const addItemsToCart = (productToAdd) => {
       setCartItems(addCartItem(cartItems, productToAdd))
      }

     const value  = {isOpen,isSetOpen,addItemsToCart,cartItems}
return <CartContext.Provider value  = {value}>{children}</CartContext.Provider>
}