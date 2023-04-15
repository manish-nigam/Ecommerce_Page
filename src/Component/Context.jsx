import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({children}){
  const [isloggedIn, setIsloggedIn] = useState(false);
  return(
    <AuthContext.Provider value={{isloggedIn,setIsloggedIn}}>
         {children}
    </AuthContext.Provider>
  )
}
export default CustomProvider;
