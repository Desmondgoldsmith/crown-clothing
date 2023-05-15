import {Fragment} from 'react'
import {Outlet,Link} from 'react-router-dom'

const Navigation = () => {
    return(
        <Fragment>
        <div>
            <h1>Navbar</h1>
            <div>
            <Link to = '/about'>
            <button>About page</button>
            </Link>
            </div>
        </div>
        <Outlet/>
        </Fragment>
    )
}

export default Navigation