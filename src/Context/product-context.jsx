import {createContext, useState, useEffect} from 'react'
// import SHOP_DATA from '../shop-data'
import {getCollectionsAndDocuments} from '../Utils/Firebase/firebase.utils'

export const ProductContext = createContext({
  products : []
})



export const ProductProvider = ({children}) => {
       const [products,setProducts] = useState([])
       const value = {products,setProducts}
      //  useEffect(()=>{
      //   AddItemsToDocument('categories', SHOP_DATA);
      // },[]);
      useEffect(()=>{
        const getCategoryMap = async() => {
          const categoryMap = await getCollectionsAndDocuments();
          console.log(categoryMap);
        }
      },[])
return <ProductContext.Provider value = {value}>{children}</ProductContext.Provider>
}