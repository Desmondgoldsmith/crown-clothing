import './shop.styles.scss'
import {useContext} from 'react'
import {ProductContext} from '../../Context/product-context'

const Shop = () => {
  const {products} = useContext(ProductContext)
  return(
        <div>
            {products.map(({name,id}) => {
                return(
                    <div key = {id}>
                        <h1>{name}</h1>
                    </div>
                )
            })}
        </div>
  )
}

export default Shop