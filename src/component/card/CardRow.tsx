import React from 'react'
import Card from './Card'
import {cardData} from './cardData'

const displayRow = () =>{
  return(
      cardData.map((data,id)=>{
        return(
              <>
          <Card key={id} name={data.name} name2={data.name2} percent={data.percent} icon={data.icon}  />
              </>
        )
    })
    )
}

const CardRow = () =>{
  return(
  <>
  <div className='m-11'>
            <h1 className='text-5xl font-semibold text-[#11386b]' >Welcome To Your Admin Dashboard</h1>
        </div>
  <div className='grid md:grid-cols-2 lg:grid-cols-3 text-center sm:px-0'>
    {displayRow()}
  </div>
    </>
  )
}

export default CardRow