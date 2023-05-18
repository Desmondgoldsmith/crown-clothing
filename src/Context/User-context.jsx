import {createContext,useState} from 'react'

export const userContext = createContext({
 currentUser : null,
 setCurrentUser: () => null
})

export const userProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}
    return <userProvider.Provier value = {value}>{childern}</userProvider.Provier>
}