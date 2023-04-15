import   { useContext } from 'react'
import { AuthContext } from '../Component/Context'
import {Navigate} from "react-router-dom"
const Protect = ({children}) => {
    const {isloggedIn} = useContext(AuthContext);
    if(isloggedIn){
        return children;
    }else {
        return <Navigate  to = "/" />
    }
   
}

export default Protect
