import React,{FC} from 'react'

import { card4Props } from './card.type'
import Card4Row from './Card4Row'
import { Card4Data } from './cardData'


const Card4=()=> {


  const DisplayList = () =>{
    return(
      
          Card4Data.map((data,key)=>{
              return(
                <>
                        <Card4Row key={key} category={data.category} list={data.list} icon={data.icon} />
                </>
              )
          })
      
    )
  }


   






    return (
        <>
            <div className='p-5'>
                <div className="max-w-[1240px] mx-auto xl:h-16 md:h-auto rounded-lg overflow-hidden bg-[#ffff] box ">
                    <div className="p-4 flex gap-5" >
                            <div className='text-[#8D8D8D] list-none'>Filter by :</div>
                                {DisplayList()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card4