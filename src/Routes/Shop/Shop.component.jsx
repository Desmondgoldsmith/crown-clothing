import './shop.styles.scss'

import shopData from '../../shop-data.json'

const Shop = () => {
  return(
        <div>
            {shopData.map(({name,id}) => {
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