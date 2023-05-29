import './shop.styles.scss'
import {useContext} from 'react'
import {ProductContext} from '../../Context/product-context'
import Card from '../../components/Card/card.component'

const Shop = () => {
  const {products} = useContext(ProductContext)
  return(
        <div className = "product-card">
            {products.map((product) => {
                return(
                    <Card key = {product.id} product = {product} />
                )
            })}
        </div>
  )
}

export default Shop