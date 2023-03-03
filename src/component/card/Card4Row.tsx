import React, { FC, useState } from 'react'
import { FiArchive, FiCalendar, FiArrowDown } from 'react-icons/fi'
import { FaAngleDown } from 'react-icons/fa'
import { card4Props } from './card.type'


const Card4Row: FC<card4Props> = ({ category, list, icon }) => {
  const [open, SetOpen] = useState(false)
  const handleOpen = (category: any) => {
    if (category !== 'Project' && category !== "Dates" && category !== "2022-12-12") {
      SetOpen(!open)
    }

  }

  const displaylist = (list: any) => {

    return list.map((data: any, id: number) => {
      return (
        <>
          <div className="flex justify-start gap-4 group">
            <div className=''>
              <li className="pt-2 cursor-pointer  " key={id}>
                {data.listName}
              </li>
            </div>
          </div>
        </>
      )
    })

  }

  const displayIcon = (icon: any) => {
    switch (icon) {
      case 'FiArchive':
        return (
          <FiArchive
            size={20}
            className={'text-[#075985] pt-1'}
          />
        )
      case 'FiCalendar':
        return (
          <FiCalendar
            size={20}
            className={'text-[#075985] pt-1'}
          />
        )

        break

      default:
        return ''
        break
    }
  }

  return (
    <>
      <div className='flex-row hidden md:flex text-[#075985] gap-2 list-none cursor-pointer' onClick={() => {
        handleOpen(category)
      }}>{displayIcon(icon)} {category}
        <div>
          {!list ? (
            !handleOpen
          ) : (
            <FaAngleDown
              className={`${open ? 'text-[#ffff] bg-[#11386b] rotate-180 duration-300' : 'text-[#11386b] duration-300'
                } flex m-1  items-end `}
            />
          )}
        </div>
      <div className='absolute top-44 z-50'>
        <ul>
          {open ? (
            <div id="authentication-modal" aria-hidden="true" className=" w-32 p-4 ">
              <div className="relative w-32 h-32 max-w-md md:h-auto ">
                <div className="relative bg-white rounded-lg shadow border flex justify-center items-center ">
                  <ul className=" text-md font-serif text-[#11386b] duration-300 delay-100">
                    {displaylist(list)}
                  </ul>
                </div>
              </div>
            </div>

          ) : (
            ''
          )}
        </ul>
      </div>
      </div>

    </>
  )
}

export default Card4Row