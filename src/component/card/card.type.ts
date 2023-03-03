import { ReactNode } from 'react'

export interface cardProps {
  icon: string
  name: string
  name2: string
  percent: number
}

export interface Card3prop {
  compName?:string
    img?:string
    btn1?:any
    btn2?:any
    btn3?:any
    per?:number
    record?:any
    classname1?:any
    onClick?:()=>void
    onClick1?:()=>void
    onClick2?:()=>void

}

export interface card4Props {
  category:string
    icon?:React.ReactNode
    list?:{
        listName?:string
    }[]
}