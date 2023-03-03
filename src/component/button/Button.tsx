import React,{FC} from 'react'
import { buttonProps } from './button.type'
const Button:FC<buttonProps>=({className,text,type,onClick})=> {
  return (
    <div>
        <button type={type} onClick={onClick} className={className}>{text}</button>
    </div>
  )
}

export default Button