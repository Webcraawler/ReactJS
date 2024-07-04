import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

function UserContextProvider({children})
{
    const [user,setUser] = useState(null)
    
    return(
        //value is the value to which the accessed is provided
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider