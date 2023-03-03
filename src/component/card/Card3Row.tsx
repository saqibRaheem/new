import React from 'react'
import Card3 from './Card3'
import { Card3Data } from './cardData'
// import { cardRowProps } from './card.type'


const displayRow = () =>{
  return(
    
      Card3Data.map((data,id)=>{
  
        return(
              <>
              <Card3 compName={data.compName} per={data.per} btn1={data.btn1} btn2={data.btn2} btn3={data.btn3} classname1={data.className1} img={data.img} record={data.record} />
              </>
        )
    })
    )
}


const Card3Row = () =>{
  return(
  <>
  <div className=''>
    {displayRow()}
  </div>
    </>
  )
}

export default Card3Row