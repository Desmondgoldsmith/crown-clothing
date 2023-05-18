import {createContext,useState} from 'react'

export const userContext = createContext({

})

export const userProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}
    return 
}