import Home from "./Routes/home/home.component"
import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation.component'




const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Navigation/>}>
       <Route index element = {<Home/>}/>
       <Route path = '/about' element = {<h1>About Us new!</h1>}/>
    </Route>
  )
)
  return(<RouterProvider router = {router}/>)
}

export default App

