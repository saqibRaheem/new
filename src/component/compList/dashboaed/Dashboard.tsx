import React, { FC, useEffect, useState } from 'react'
import {
  FaAngleDown,
} from 'react-icons/fa'
import { MdOutlineSpaceDashboard, MdOutlineContentCopy } from 'react-icons/md'
import { TfiFiles, TfiCheckBox } from 'react-icons/tfi'
import { VscLinkExternal } from 'react-icons/vsc'
import { compListProps } from '../compList.type'
import { useLocation,Link, Router } from 'react-router-dom'

///// MAIN FUNCTION ////////
const Dashboard: FC<compListProps> = ({ name, icon, links, key }) => {
const location = useLocation()
const router = Router;
  const [open, SetOpen] = useState(false)

  const handleOpen = (name: any) => {
        SetOpen(!open)
  }
 
  const displayIcon = (icon: any) => {
    switch (icon) {
      case 'MdOutlineSpaceDashboard':
        return (
          <MdOutlineSpaceDashboard
            size={26}
            className={`${location.pathname == links ? 'text-[#ffff]  ' : 'text-[#11386b]'
              } `}
          />
        )
      case 'MdOutlineContentCopy':
        return (
          <MdOutlineContentCopy
            size={26}
            className={`${location.pathname == links ? 'text-[#ffff]' : 'text-[#11386b]'
              }`}
          />
        )
      case 'TfiFiles':
        return (
          <TfiFiles
            size={26}
            className={`${location.pathname == links ? 'text-[#ffff]' : 'text-[#11386b]'
              }`}
          />
        )
      case 'VscLinkExternal':
        return (
          <VscLinkExternal
            size={26}
            className={`${location.pathname.includes("/audits") ? 'text-[#ffff]' : 'text-[#11386b]'
              } `}
          />
        )
      case 'TfiCheckBox':
        return (
          <TfiCheckBox
            size={26}
            className={`${open ? 'text-[#ffff]' : 'text-[#11386b]'
              } `}
          />
        )

        break

      default:
        return ''
        break
    }
  }

  ///////  LIST DISPLAY FUNCTION //////
  // const displaylist = (list_1: any) => {
  //   console.log(list_1, "assssssss");
  //   if (!list_1) {
  //   } else {

  //     return list_1.map((data: any, id: number) => {

  //       const str = data.listName
  //       var matches: any = str.match(/\b(\w)/g) 
  //       var acronym = matches.join('') 

  //       return (
  //         <>
  //           <div className="flex justify-start gap-4 group">
  //             <div>
  //               <h1 className="pt-2 w-6 ">{acronym}</h1>
  //             </div>
  //             <div className=''>
  //               <li className="pt-2 cursor-pointer  " key={id}>
  //                 <Link to={data.link}>
  //                {data.listName}
  //                </Link>
  //               </li>
  //             </div>
  //           </div>
  //         </>
  //       )

  //     })
  //   }
  // }
  //// MAIN FUNCTION RETURN LIST /////
  const rout = links

  return (
    
    <>
      <div className={`${rout == location.pathname ? 'text-[#ffff] bg-[#11386b]' : 'text-[#11386b]'}`}>
        <div
          className="flex items-center justify-between gap-4 p-5 group cursor-pointer  "
          onClick={() => {
            handleOpen(name)
          }}
        >
          <div className="flex gap-3">
          {displayIcon(icon)}
            <h1  
              className={`${rout == location.pathname ? 'text-[#ffff] bg-[#11386b] ' : 'text-[#11386b]'
                } text-md font-semibold font-mono `}
            >
             {rout  ? <Link to={rout}>{name}</Link>: name} 
            </h1>
          </div>
          <div>
            {/* {!list_1 ?( 
             !handleOpen
            ) : (
              <FaAngleDown
                className={`${location.pathname == links ? 'text-[#ffff] bg-[#11386b] rotate-180 duration-300' : 'text-[#11386b] duration-300'
                  } flex mt-1 ml-8 items-end `}
              />
            )} */}
          </div>
        </div>
        <div className="duration-300 delay-300">

          {open ? (
            <ul className="ml-6 text-md font-serif text-[#9a9a9a] duration-300 delay-100">

              {/* {displaylist(list_1)} */}
            </ul>
          ) : (
            ''
            )}

        </div>
      </div>
    </>
  )
}

export default Dashboard
