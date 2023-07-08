import {createContext, useState, useEffect} from 'react'
import SHOP_DATA from '../shop-data'
import {AddItemsToDocument} from '../Utils/Firebase/firebase.utils.jsx'

export const ProductContext = createContext({
  products : []
})



export const ProductProvider = ({children}) => {
       const [products,setProducts] = useState([])
       const value = {products,setProducts}
       useEffect(()=>{
        AddItemsToDocument('categories', SHOP_DATA);
      },[]);
return <ProductContext.Provider value = {value}>{children}</ProductContext.Provider>
}