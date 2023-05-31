import {createContext, useState} from 'react'


export const CartContext = createContext({
 isOpen : false,
 isSetOpen : () => {}
})

export const CartProvider = ({children}) => {
       const [isOpen,isSetOpen] = useState(false)
       const value  = {isOpen,isSetOpen}
return <CartContext.Provider value  = {value}>{children}</CartContext.Provider>
}