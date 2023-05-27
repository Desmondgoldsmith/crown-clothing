import Home from "./Routes/home/home.component"
import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation.component'
import Auth from "./Routes/Auth/Auth.component"
import Shop from "./Routes/Shop/Shop.component"




const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<Navigation/>}>
       <Route index element = {<Home/>}/>
       <Route path = '/shop' element = {<Shop/>}/>
       <Route path = '/auth' element = {<Auth/>}/>
    </Route>
    </>
  )
)
  return <RouterProvider router = {router}/>
}

export default App

