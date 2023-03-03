import React,{useState,ReactNode,createContext,useContext} from 'react';

type globalContextType = {
 user:{
    id:string
    name:string
    email:string
    hasCompany : boolean
    admin:boolean
    audits:unknown[]
    companyDetails: []
},
 clause:{
  data:object
},
userId:string
auditId:string
 changeUser:(val: any) =>void
 changeUserId:(val:string)=>void
 clauseData:(val:string)=>void
 userAuditId:(val:string)=>void
}

const defaultValues: globalContextType = {
    user:{
        id:'',
        name:'John',
        email:'john@example.com',
        hasCompany:false,
        admin:false,
        audits:[],
        companyDetails:[]
    },
    clause:{
       data:{}
    },
  userId:'',
  auditId:'',
    changeUser:(val)=>{},
    changeUserId:(val)=>{},
    clauseData:(val)=>{},
    userAuditId:(val)=>{}
}

type Props = {children: ReactNode}

const globalContex = createContext<globalContextType>(defaultValues)

export function  useGlobalContext(){
    return useContext(globalContex)
}

export function ContextProvider({children}: Props){
    const [user, setUser] = useState(defaultValues.user)
    const [userId, setUserId] = useState(defaultValues.userId)
    const [clause, setClause] = useState(defaultValues.clause)
    const [auditId, setAuditId] = useState(defaultValues.auditId)

   const changeUser = (user:any) =>{
   setUser(user)
   }

  const changeUserId = (userId:string) =>{
    setUserId(userId)
  }

  const clauseData = (clause:any) =>{
    setClause(clause)
  }

  const userAuditId = (auditId:string) =>{
    setAuditId(auditId)

  }


const values = {
    user,
    changeUser,
    userId,
    changeUserId,
    clause,
    clauseData,
    auditId,
    userAuditId
}

   return(
    <globalContex.Provider value={values}>{children}</globalContex.Provider>
   )

}