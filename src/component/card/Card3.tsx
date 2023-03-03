import React, { FC } from 'react'
import Img from '../../assets/23.png'
import Button from '../button/Button'
import ProgressBar from '../progressbar/ProgressBar'
import { VscLinkExternal } from 'react-icons/vsc'
import { Card3prop } from './card.type'

const Card3: FC<Card3prop> = ({ compName, img, btn1, btn2, btn3, record, per, classname1 ,onClick1,onClick2,onClick }) => {
    return (
        <>

            <div className='p-2 max-w-[1240px] m-auto'>
                <div className="xl:h-46 rounded-lg overflow-hidden grid md:grid-cols-1 sm:px-0 bg-[#ffff] box">
                    <div className="p-1 xl:gap-1 flex flex-col sm:flex-row xl:flex-row md:flex-row sm:gap-20 m-2 " >
                        <div className='xl:flex xl:gap-4 w-full'>
                            <div className='flex items-center justify-center w-full lg:w-full xl:w-60 h-32 '>
                                <img src={img} alt="" className=' w-60 lg:w-60 xl:w-60 h-32' /> </div>
                            <div className=''>
                                <h1 className='text-[#075985] flex items-center justify-center text-4xl md:font-semibold lg:font-bold xl:font-bold '>{compName}</h1>
                                <div className='lg:flex md:flex text-center items-center justify-center gap-2 mt-2'>
                                    <input type="date" className='text-[#075985]' />
                                    <p className='text-[#075985]'>2 week Ago</p>
                                </div>
                                <div className='flex justify-center items-center flex-col md:flex-row gap-4 mt-2'>
                                    <Button type="submit" text={btn1} onClick={onClick1} className='rounded-md w-36 h-10 p-1 bg-[#F3F3F3] text-[#075985]' />
                                    <Button type="submit" text={btn2} onClick={onClick} className='rounded-md w-36 h-10 bg-[#84CC06] text-[#ffff] hover:bg-[#5c6945]' />

                                </div>
                            </div>
                            <div className='xl:m-18 md:m-5 lg:flex-col text-center'>
                                <Button type="submit" text={btn3} onClick={onClick2} className='rounded-md my-4 font-semibold text-xl w-40 lg:w-40 xl:w-64 h-16 bg-[#F3F3F3] text-[#075985]' />

                            </div>
                        </div>
                        <div className='xl:flex justify-around w-full'>
                            <div className='m-4 xl:m-0 flex justify-center items-center'>
                                <div className=''>
                                    <VscLinkExternal className='text-[#075985]' />
                                    <ProgressBar per={per} />
                                    <p className='text-[#075985] ml-9'>Score</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Button type="submit" text={record} className={classname1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card3