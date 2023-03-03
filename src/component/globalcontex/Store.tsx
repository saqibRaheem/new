import { type } from 'os';
import React, { FC, useState } from 'react'


export interface storeProps {
  children: React.ReactNode

}

export type AuthUser = {
  _id: String,
  name: String,
  email: String,
  companyDetails: String,
  company: Object
};

export type Clauses = {
  clauses: Object,
  contactPerson: String,
  department: String
  email: String
}

type UserContextType = {
  user: AuthUser | null,
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>,
}
type ClauseContextType = {
  clauses: Clauses | null,
  setClauses: React.Dispatch<React.SetStateAction<Clauses | null>>,
}



export const UserContext = React.createContext<UserContextType | null>(null);
export const ClauseContext = React.createContext<ClauseContextType | null>(null);


const Store: FC<storeProps> = ({ children }) => {

  const [clauses, setClauses] = useState<Clauses | null>(null)

  //  const [list,setList] = useState([])

  const [user, setUser] = useState<AuthUser | null>(null)

  // console.log("update user data====>", user);
  // console.log("clauses user data====>", clauses);


  return (

    <UserContext.Provider value={{ user, setUser }}>
      <ClauseContext.Provider value={{ clauses, setClauses }}>
        {children}
      </ClauseContext.Provider>
    </UserContext.Provider>
  )
}

export default Store