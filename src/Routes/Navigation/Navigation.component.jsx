import {Fragment} from 'react'
import {Outlet,Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../Asset/crown.svg'
import './Navigation.styles.scss'

const Navigation = () => {
    return(
        <Fragment>
        <div className = "navigation">
            <Link to = '/'>
            <div className = "logo-container"><CrownLogo/></div>
            </Link>
            <div className = "nav-links-container">
            <Link to = "/shop" className = "nav-link">SHOP</Link>
            <Link to = "/sign-in" className = "nav-link">SIGN IN</Link>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation