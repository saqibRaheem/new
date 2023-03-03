import {ResponsiveContainer ,LineChart,Line,XAxis,YAxis,Tooltip } from 'recharts'
import {FiArrowUp} from 'react-icons/fi'
import React,{FC} from 'react'

import { ChartDataProps } from './chart.type'




const GraphCharts:FC<ChartDataProps>=({category,data,target})=> {

  return (
    <>
    <div className='p-5'>
      <div className=" bg-white box rounded-lg ">
        <div className='m-5 flex justify-between'>
          <div className='border-2 bg-[#E2EECD] border-[#84CC06] rounded-3xl w-20 h-10 flex justify-evenly items-center'>
          <FiArrowUp size={18} className='text-[#84CC06]'/>
            <h1 className='text-[#84CC06]'>1.4%</h1>
          </div>
          <div className='flex-col justify-end'>
       <h1 className='p-3 font-bold text-xl text-[#064A6E]'>{category}</h1>
         <p className='font-bold text-2xl mr-4 flex justify-end text-[#064A6E]'>{target}</p>
          </div>
        </div>
       
      <div className="h-20">

      <ResponsiveContainer width='90%' >
        <LineChart data={data}>
          {/* <XAxis dataKey="month" interval={"preserveStartEnd"} padding={{ right: 50 }}/> */}
          {/* <YAxis /> */}
        {/* <Tooltip /> */}
         <Line type='monotone' strokeWidth={3} stroke="#84CC06"  dataKey="year" activeDot={{r:8}}/>
        </LineChart>

      </ResponsiveContainer>
      </div>
      <div className='p-4'>

        <hr className='border-[#DDDDDD]'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default GraphCharts