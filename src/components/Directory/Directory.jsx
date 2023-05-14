import CategoryItem from '../category-item/Category-item'
import './directory.styles.scss'


const Directory = ({categories}) => {
    return(
        <div className="categories-container">
        {categories.map((categories) => {
        return(
           <CategoryItem key = {categories.id}  categories = {categories}/>
        )})}
        </div>
    
    )
}

export default Directory