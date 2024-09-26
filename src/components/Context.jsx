import React, { createContext, useState } from 'react';

   // Create a Context
    export const MyContext = createContext();

function Context({children}) {
    const [user,setUser]=useState("")
    const [aman,setAman]=useState("")

  return (
   <MyContext.Provider value={{user,setUser,aman,setAman}} >
        {children}
   </MyContext.Provider>
  )
}

export default Context