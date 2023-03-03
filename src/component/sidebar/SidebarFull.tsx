import React,{useState} from 'react'
import Img from '../../assets/logo.png'
import DashboardLoop from '../compList/dashboaed/DashboardLoop'
import {FaAlignRight} from 'react-icons/fa'

function SidebarFull() {
  const [opens, setOpens] = useState(true);
  return (
    <>
     {/* <div className="flex">
    <div
      className={` ${
        opens ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!opens && "rotate-180"}`}
        onClick={() => setOpens(!opens)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${
            opens && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !opens
             && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <div className={` ${
        opens ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>

       <DashboardLoop />
      </div> */}
      {/* <ul className="pt-6"> */}
        {/* {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`./src/assets/${Menu.src}.png`} alt='some images'/>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))} */}
      {/* </ul> */}
    {/* </div>
  </div> */}



{/* ************************************************** */}


      <div className="hidden md:flex sticky top-0 drop-shadow-xl">
       <div className={`h-screen p-3 pt-5 bg-[#ffff] w-72 duration-300 overflow-auto`}>
         <div className="flex p-1  justify-between">
           <div className=''>
           <img src={Img} alt="" width={95} height={51} className='mb-4 ml-3' />
           </div>
           <div className=''>
            <FaAlignRight size={25} className=" text-[#01527D]" /> 
           </div>
        </div>
    
          <DashboardLoop />
      
      </div>
   
     </div>
    </>
  )
}

export default SidebarFull