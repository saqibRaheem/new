/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import sidebarData from "./compList/complistData";
import { MdOutlineSpaceDashboard, MdOutlineContentCopy } from 'react-icons/md'
import { TfiFiles, TfiCheckBox } from 'react-icons/tfi'
import { VscLinkExternal } from 'react-icons/vsc'
import {FaAlignRight} from 'react-icons/fa'
import img from '../assets/logo.png'
import { Link } from "react-router-dom";

const Bar = () => {
  const [open, setOpen] = useState(false);
  const displayIcon = (icon: any) => {
    switch (icon) {
      case 'MdOutlineSpaceDashboard':
        return (
          <MdOutlineSpaceDashboard
            size={26}
            className={`${ 'text-[#11386b]'
              } `}
          />
        )
      case 'MdOutlineContentCopy':
        return (
          <MdOutlineContentCopy
            size={26}
            className={`${'text-[#11386b]'
              }`}
          />
        )
      case 'TfiFiles':
        return (
          <TfiFiles
            size={26}
            className={`${ 'text-[#11386b]'
              }`}
          />
        )
      case 'VscLinkExternal':
        return (
          <VscLinkExternal
            size={26}
            className={`${ 'text-[#11386b]'
              } `}
          />
        )
      case 'TfiCheckBox':
        return (
          <TfiCheckBox
            size={26}
            className={`${ 'text-[#11386b]'
              } `}
          />
        )

        break

      default:
        return ''
        break
    }
  }

  return (
    <div className="flex sticky top-0 drop-shadow-xl bg-[#fff] h-full">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-full p-5  pt-8 relative duration-300 box`}
      >
        <FaAlignRight size={28} className={` text-[#01527D] absolute cursor-pointer right-1 top-9 `}
          onClick={() => setOpen(!open)} />
      
        <div className="flex justify-center items-center">
          <img
            src={img}
            className={`cursor-pointer duration-500  ${
              !open && "hidden"
            }`}
          />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1> */}
        </div>
        <ul className="pt-6">
          {sidebarData.map((item, index) => {
         return(  
             <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-[#11386b] text-sm items-center gap-x-4 
              ${item.category ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link to={item.links!}> {displayIcon(item.icon)}</Link>

              {/* <img src={`./src/assets/${item.icon}.png`} alt='some images'/> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
              <Link to={item.links!}>{item.category}</Link>
                 
              </span>
            </li>)
})}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Bar;