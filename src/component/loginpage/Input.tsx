import React, { FC } from 'react'
import { loginProps } from './login.type'

const Input: FC<loginProps> = ({ lable, id, placeholder, type, onChange, className, name, register, value, errorMessage ,ref}) => {


  return (
    <div>
      <div className='flex flex-col items-start'>
        <label id={id} className=" mb-2 text-sm font-medium font-poppin text-[#666666] dark:text-white">{lable}</label>
        <input id={id} type={type} name={name} value={value} onChange={onChange}
          className={className} ref={ref}
          placeholder={placeholder} {...register} />
        <div className='text-sm ml-2 text-red-700'>{errorMessage}</div>
      </div>
    </div>
  )
}

export default Input