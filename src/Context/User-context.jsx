import {createContext,useState,useEffect} from 'react'
import {onAuthStateChangeListner, createUserDocumentFromAuth} from '../Utils/Firebase/firebase.utils'

export const UserContext = createContext({
 currentUser : null,
 setCurrentUser: () => null
})


export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}
    
    
    useEffect(() => {
       const unsubscribe =  onAuthStateChangeListner((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        setCurrentUser(user)
        console.log(user)
       })
       return unsubscribe
    },[])

    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
}