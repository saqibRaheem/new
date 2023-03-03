import React from 'react'
import {FaInfoCircle} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import 'animate.css';
import Button from '../button/Button';
// animate__animated animate__backInDown
function Popup() {
    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className="animate__animated animate__backInDown w-1/3 mx-auto rounded-lg shadow bg-white">
                <div className='flex justify-end p-5'><FiX size={19} /></div>
                <div className="p-9 flex flex-col ">
                    <div className='p-2 flex gap-4'>
                        <FaInfoCircle size={20} className='text-[#4B4B4B] mt-2' />
                        <h1 className='text-[#4B4B4B] text-2xl font-semibold'>Disclaimer</h1>
                    </div>
                    <div>
                        <h1 className='text-[#5C5C5C]'>The Information provided in this form, will be used to cover sections 1 through 3 in the Audit. Please fill out the form     carefully as it might affect your audit score.
                     The data collected will not be shared with any third party. For more information please read our privacy policy.</h1>
                    </div>
                    <div className='flex gap-2 mt-7'>
                        <Button type='submit' className='nav text-[#fff] w-24 h-10 rounded-full bg-[#4B4B4B]' text='OK'  />
                        <Button type='submit' className='text-[#4B4B4B] w-24 h-10 rounded-full border-2 border-[#4B4B4B] bg-[#fff]' text='NO'  />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Popup