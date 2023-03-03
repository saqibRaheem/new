import React from 'react'
import GraphCards from './GraphCharts'
import GraphData from './GraphData'




const displayCards =()=>{
  return(
  GraphData.map((data,key)=>{
    return(
        <GraphCards key={key} category={data.category} data={data.data} target={data.target} />
      )
    })
    
  )
}



function Stats() {
  return (<>
<div className="grid md:grid-cols-2 lg:grid-cols-">
          {displayCards()}     
</div>
   </>
  )
}

export default Stats