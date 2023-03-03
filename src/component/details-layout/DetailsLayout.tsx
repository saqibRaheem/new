import React,{FC} from 'react'
import {layoutprops} from '../layout/layout.type'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import Img from '../../assets/23.png'

const DetailsLayout:FC<layoutprops>=({children}) => {
  return (
    <div>
        <div className='w-full bg-[#ffff]'>
                    <div className='w-full flex flex-col justify-center items-center mt-16'>
                        <div className=''>
                            <img src={Img} width={207} alt="" />
                        </div>
                        <div className='absolute left-10 top-24 '>
                            <Link to="/"> <FaArrowLeft size={24} className='text-[#696969]' /></Link>
                        </div>
                        <div className='m-10 w-full'>
                            <hr className='border-[#d1cdcd]' />
                        </div>
                    </div>
                </div>
                {children}

    </div>
  )
}

export default DetailsLayout