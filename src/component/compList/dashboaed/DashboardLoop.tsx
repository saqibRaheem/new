import React from 'react'
import sidebarData from '../complistData'
import Dashboard from './Dashboard'

 
const displayData = () =>{
    return(
        sidebarData.map((data,key)=>{
          return(
            
          <>
          <Dashboard key={key} name={data.category} links={data.links}  icon={data.icon} />
          </>)
        })
    )
}



function DashboardLoop() {  
  return (
    <>
   { displayData()}
    </>

  )
}

export default DashboardLoop