import React,{FC} from 'react'
import img from '../../assets/face-2.jpg'
import { MdOutlineSpaceDashboard, MdOutlineContentCopy } from 'react-icons/md'
import { TfiFiles, TfiCheckBox } from 'react-icons/tfi'
import { VscLinkExternal } from 'react-icons/vsc'
import {FaAlignRight} from 'react-icons/fa'
import { compListProps } from '../compList/compList.type'
import sidebarData from '../compList/complistData'

const SidebarHaf:FC<compListProps>=({icon})=> {


  const displayIcon = (icon: any) => {
    switch (icon) {
        case 'MdOutlineSpaceDashboard':
          return (
            <MdOutlineSpaceDashboard
              size={26}
              className={ 'text-[#11386b]'}
            />
          )
        case 'MdOutlineContentCopy':
          return (
            <MdOutlineContentCopy
              size={26}
              className={ 'text-[#11386b]'}
            />
          )
        case 'TfiFiles':
          return (
            <TfiFiles
              size={26}
              className={ 'text-[#11386b]'}
            />
          )
        case 'VscLinkExternal':
          return (
            <VscLinkExternal
              size={26}
              className={ 'text-[#11386b]'}
            />
          )
        case 'TfiCheckBox':
          return (
            <TfiCheckBox
              size={26}
              className={ 'text-[#11386b]'}
            />
          )
  
          break
  
        default:
          return ''
          break
      }
  }



  return (
    
        
    <div className="hidden md:flex sticky top-0 drop-shadow-xl">
    <div className={`h-screen p-3 pt-5 bg-[#ffff] w-14 duration-300 overflow-auto`}>
      <div className="flex p-1  justify-between">
      <div className=''>
            <FaAlignRight size={25} className=" text-[#01527D]" /> 
           </div>
        </div>

          {
            sidebarData.map((data,key)=>{
              return(
                <div key={key} className="flex items-center justify-center mt-7">
                {displayIcon(data.icon)}
                  </div>
              )
            })
          }
        </div>
   

    </div>
  )
}

export default SidebarHaf