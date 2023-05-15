import {Fragment} from 'react'
import Home from "./Routes/home/home.component"
import {createBrowserRouter,createRoutesFromElements,Outlet,RouterProvider, Route} from 'react-router-dom'


const Navbar = () => {
  return(
    <div>
      <div>
        <h1>Navbar</h1>
      </div>
      <Outlet/>
    </div>
  )
}


const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
    <Route path = "/" element = {<Navbar/>}>
       <Route index element = {<Home/>}/>
       <Route path = '/about' element = {<h1>About Us new!</h1>}/>
    </Route>

    {/* <Route path = "/about" element = {<Navbar/>}>
       <Route index element = {<h1>About Us</h1>}/>
    </Route> */}
    </Fragment>
  )
)
  return(<RouterProvider router = {router}/>)
}

export default App

