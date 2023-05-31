import {Fragment,useContext} from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../Asset/crown.svg'
import './Navigation.styles.scss'
import {UserContext} from '../../Context/User-context'
import {signOutUser} from '../../Utils/Firebase/firebase.utils'
import Cart from '../../components/Cart/Cart.components'
import CartDropdown from '../../components/Cart/CartDropdown/Cart-dropdown'
import {CartContext} from '../../Context/cart-dropdown-context'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isOpen} = useContext(CartContext)

    return(
        <Fragment>
        <div className = "navigation">
            <Link to = '/'>
            <div className = "logo-container"><CrownLogo/></div>
            </Link>
            <div className = "nav-links-container">
            <Link to = "/shop" className = "nav-link">SHOP</Link>
            {currentUser ? (
            <span onClick = {signOutUser} className = "nav-link">SIGN OUT</span>
            )
            :
            (<Link to = "/auth" className = "nav-link">SIGN IN</Link>)
            }
            <Cart/>
            </div>
            {isOpen && <CartDropdown/>}
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation