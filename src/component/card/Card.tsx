import React,{FC} from 'react'
import img from '../../assets/error.png'
import { cardProps } from './card.type'
const  Card:FC<cardProps>=({name,name2,percent,icon})=> {
  return (
    <>
      <div className="p-5">
        <div className="box max-w-gl rounded-lg overflow-hidden bg-[#ffff] border-1">
          <div className="p-6 flex justify-between items-center">
            <div className="">
              <div className='flex justify-center items-center'>
              <img
                src={icon}
                width={110}
                // height={83}
                className="drop-shadow-2xl"
              />
              </div>
            </div>
            <div className="">
              <h1 className="text-5xl font-bold text-[#11386b] flex items-end">
                {percent}%
                {
                  // name === "Capacity" ? price + "GB" : name === "Revanue" ? "$" + price.toLocaleString() : name === "Error" ? price : name === "Followers" ? "+" + price : ""
                }
              </h1>
              <p className="flex items-end text-[#11386b] font-semibold text-xl font-sans">
               
                {name}
              </p>
              <p className="flex items-end text-[#11386b] text-xs font-sans">
            
               {name2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
