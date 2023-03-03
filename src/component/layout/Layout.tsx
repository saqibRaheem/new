import React, { FC, useState } from 'react'
import { FiBell,  FiSearch, FiArchive, FiEdit } from 'react-icons/fi'
import {FaAngleDown} from 'react-icons/fa'
import img from '../../assets/face-2.jpg'
import { layoutprops } from './layout.type'
import { useLocation } from 'react-router-dom'
import Bar from '../Bar'


const Layout: FC<layoutprops> = ({ children }) => {
  const name = localStorage.getItem("name")?.split('"')[1]

  const [open , setOpen ] = useState(false)


  const Click = () =>{
    console.log('click');
   setOpen(!open)    
  }
const logOut = () =>{
    localStorage.clear()
    window.location.href='/login'
    
}



  return (
    <div className=''>
      <div className="flex">
        <div className=''>
          <Bar />
          {/* {location.pathname == '/questionclauses'
          ? <SidebarHaf />
          : <SidebarFull />} */}
        </div>
        {/* <div className='bg-[#66615b]'>
          {open ? <SideBarFull /> : <SideBarHaf />}
        </div> */}
        <div className="w-full bg-[#ffff] flex-col justify-between  ">
          <div className="w-full flex-col grid grid-flow-row auto-rows-max min-h-screen">
            <div className="shadow-md flex justify-between items-center  h-20 px-5 bg-[#ffff] " >
              <div className="flex  ml-10 gap-3">
                <ul className='flex gap-10'>
                  <li className="flex gap-2 text-[#11386b] font-normal hover:text-[#68b3c8] cursor-pointer" > <FiArchive className='' size={24} /> Upcoming Audit</li>
                  <li className="flex gap-2 text-[#11386b] font-normal hover:text-[#68b3c8] cursor-pointer"> <FiEdit size={24} /> New Review</li>
                </ul>
              </div>
              <ul className="hidden md:flex gap-10 m-10">
                <li className="flex gap-1 justify-center items-center text-[#11386b] font-normal hover:text-[#68b3c8] cursor-pointer">
                  <FiSearch
                    className="mt-1 hover:scale-125 duration-100 "
                    size={24}
                  />
                </li>
                <li className="flex  gap-1 justify-center items-center text-[#11386b]  hover:text-[#68b3c8] cursor-pointer">
                  <FiBell className="mt-1 hover:rotate-45 duration-100 " size={24} />
                </li>
                <li>
                  <div className=' flex gap-2'>
                    <div className="flex items-center justify-center w-14 ">
                      <div className='border-[#11386b] border-2 rounded-full'>
                        <img src={img} className='rounded-full' alt="" />
                      </div>
                    </div>
                    <div className=''>
                      <h2 className='text-lg text-[#11386b] font-semibold'>{name ? name : "Users"}</h2>
                      <p className='text-md text-[#11386b]'>Developer</p>
                    </div>
                    <div>

                    <FaAngleDown onClick={()=>{Click()}} className={`${open ? 'text-[#11386b] rotate-180 duration-300' : 'text-[#11386b] duration-300'
                             } flex m-1  items-end `} size={20} />
                    { open ? 
                    <div className='w-24 h-12 bg-[#fff] border shadow-md rounded-md flex items-center justify-center border-[#ecebeb] absolute top-10 right-6'>
                        <h1 onClick={()=>{logOut()}} className='text-[#11386b] text-md font-poppin font-bold cursor-pointer'>LogOut</h1>
                    </div> 
                    : '' }
                   </div>
                  </div>
                </li>
              </ul>
            </div>
            {children}
          </div>
          <div className="p-5 footer bg-[#ffff] border-2 flex justify-center">
            <h2 className="flex gap-1 text-[#11386b] text-xl font-bold">
              @ 2023, Audit Master
            </h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Layout