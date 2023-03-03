import React,{FC} from 'react'
import { dataListProps } from '../compList.type'

const DashboardListData:FC<dataListProps>=({list})=> {
    
    const str = list
        var matches: any = str.match(/\b(\w)/g) // ['J','S','O','N']
        var acronym = matches.join('') // JSON

  return (
    <>
    <div className="duration-300 delay-300">
        <ul className='ml-6 text-md font-serif text-[#9a9a9a] duration-300 delay-100'>
           <div className="flex justify-start gap-4 group">
            <div>
                <h1 className='p-2 w-6'>{acronym}</h1>
            </div>
             <div className="">
                <li className='pt-2 cursor-pointer'>{list}</li>
             </div>
           </div>
        </ul>
    </div>
    </>
  )
}

export default DashboardListData