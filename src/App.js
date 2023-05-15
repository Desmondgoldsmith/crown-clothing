import Home from "./Routes/home/home.component"
import {createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation.component'




const App = () => {
  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<Navigation/>}>
       <Route index element = {<Home/>}/>
       <Route path = '/shop' element = {<h1>Shop page!</h1>}/>
       <Route path = '/sign-in' element = {<h1>Sign in!</h1>}/>
    </Route>
    </>
  )
)
  return <RouterProvider router = {router}/>
}

export default App

