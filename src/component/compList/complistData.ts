import React from "react"

const sidebarData :{
    category:string
    icon?:React.ReactNode
    links?:string
  
}[] = [
    {
        category:'Dashboard',
        icon:"MdOutlineSpaceDashboard",
        links:'dashboard'
    }
    ,{
        category:"All Audit",
        icon:"MdOutlineContentCopy",
        links:'all-audit'
    },
    {
        category:'Edit Question',
        icon:"TfiCheckBox",
        links:'addaudit'
    }
    
]
export default sidebarData