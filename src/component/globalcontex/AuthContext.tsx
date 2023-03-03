import React,{createContext, useState,useContext} from 'react'

type AuthContextType = {
  claues:{
    clauses:string
    contactPerson:string
    department:string
    email:string
  } 
  changeClauses: (val:any,) => void
}
const authContextDefaultValue:AuthContextType = {
  claues:{
  clauses: "",
    contactPerson: "",
    department: "",
    email: "",
},
changeClauses: (val: any) => { },
}



 const authContext = createContext<AuthContextType>(authContextDefaultValue)

 export function useGlobalContext() {
  return useContext(authContext)
  
}


 type props ={
  children:React.ReactNode

 }
 export function ContexProvider({children}:props) {
  const [claues,setClaues] = useState(authContextDefaultValue.claues)
      // console.log("context clause==>", claues);
      
     const changeClauses = (
   list:any
      ) => {
        setClaues(list)

     }

     const value = {
      claues,
      changeClauses,
     }
    return(
      <authContext.Provider value={value}>{children}</authContext.Provider>
      
    )

 }

 


// export default AuthContext