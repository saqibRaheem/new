import React, { useState } from 'react'
import Img from '../../assets/23.png'
import img from '../../assets/accept.png'
import Button from '../button/Button'
import Input from '../loginpage/Input'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'animate.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'


function UserFeedback() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const [form, setForm] = useState({

    })
    const chnageHandler = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        // console.log(form);

    }
    const submitForm = () => {
        console.log("click");

    }
    const contentStyle = { background: 'transparent', border: 'none' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#000' }
    return (
        <>
            <Popup open={open}  {...{ contentStyle, overlayStyle, arrowStyle }} className=" animate__animated animate__fadeInDownBig bg-transparent" closeOnDocumentClick onClose={closeModal}>
                <div className='flex justify-center items-center'>

                    <div className="animate__animated animate__fadeInDownBig rounded-lg  shadow bg-white">
                        <div className="modal">
                            <div className='flex items-center justify-center'>
                                <img src={img} className="close mr-7" alt="" />
                            </div>
                            <div className='flex justify-end p-10' onClick={closeModal} > </div>
                            <div className="p-9 flex flex-col ">
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-[#075985] text-3xl font-poppin font-bold'>Thank You For Your Feedback</h1>
                                </div>
                                <div className='flex justify-center gap-2 mt-7'>
                                    <Button type='submit' className='nav text-[#fff] w-32 h-10 rounded-full bg-gradient-to-r from-[#1C8AC6] to-[#016499]' text='OK' />
                                    {/* <Button type='submit' className='text-[#4B4B4B] w-24 h-10 rounded-full border-2 border-[#4B4B4B] bg-[#fff]' text='NO' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
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
                <div className='p-5 w-full flex flex-col'>
                    <div className="w-full bg-white md:mt-0 xl:p-0">
                        <div className="flex justify-center items-center gap-20">
                            <div className="w-auto p-1 space-y-4 md:space-y-6 sm:p-8">
                                <div className='flex justify-center items-center'>
                                    <h1 className="text-xl font-semibold font-poppin md:text-3xl text-[#075985]">
                                        User Feedback
                                    </h1>
                                </div>
                                <div className='flex items-center justify-center pt-12'>
                                    <h1 className='text-black font-poppin font-semibold'>1. Would you recommend the app to your colleagues ?</h1>
                                </div>
                                <div className='flex gap-4'>
                                    <Input type='radio' name='' placeholder='' lable='' className='' />
                                    <p className='mt-1 text-sm text-[#666666] font-poppin'> yes </p>
                                    <Input type='radio' name='' placeholder='' lable='' className='' />
                                    <p className='mt-1 text-sm text-[#666666] font-poppin'> No </p>
                                </div>
                                <div className='flex items-start  '>
                                    <h1 className='text-black font-poppin font-semibold'>2. We'd love to get your feedback </h1>
                                </div>
                                <div className='flex items-center'>
                                    <textarea id="w3review" name="w3review" className='nav w-full h-28 rounded-md'></textarea>
                                </div>
                                <div className='flex justify-center items-center pt-12'>
                                    <Button type="submit" onClick={() => setOpen(o => !o)} className='shadow-2xl w-96 h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer' text='Submit' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserFeedback