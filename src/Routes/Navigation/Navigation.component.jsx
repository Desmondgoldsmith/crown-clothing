import {Fragment,useContext} from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../Asset/crown.svg'
import './Navigation.styles.scss'
import {UserContext} from '../../Context/User-context'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    console.log(currentUser)
    return(
        <Fragment>
        <div className = "navigation">
            <Link to = '/'>
            <div className = "logo-container"><CrownLogo/></div>
            </Link>
            <div className = "nav-links-container">
            <Link to = "/shop" className = "nav-link">SHOP</Link>
            <Link to = "/auth" className = "nav-link">SIGN IN</Link>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation