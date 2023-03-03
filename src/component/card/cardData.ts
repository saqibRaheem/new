import Img1 from '../../assets/check-mark 1.png'
import Img2 from '../../assets/warning 1.png'
import Img3 from '../../assets/x-button 1.png'

import one from '../../assets/first.png'
import two from '../../assets/second.png'
import three from '../../assets/thr.png'
export const cardData : {
    icon:string
    name:string
    name2:string
    percent:number

}[] = [
    {
        icon:Img1,
        name:"Audited",
        name2:"Review From",
        percent:75,
    },
    {
        icon:Img2,
        name:"Pending",
        name2:"Review From",
        percent:20,
       
    },
    {
        icon:Img3,
        name:"Rejected",
        name2:"Review From",
        percent:5,
    },
]

export const Card3Data :{
    compName:string
    img:string
    btn1:string
    btn2:string
    btn3:string
    per:number
    record:string
    className1?:string

}[]=[
    {
        compName:'Company 01',
        img:one,
        btn1:'Show Report',
        btn2:'Contact Company',
        btn3:'4 non conformities',
        per:85,
        record:'completed',
        className1:"rounded-md w-24 h-10 bg-[#CFFF7B] text-[#638D19]"
    },
    {
        compName:'Company 02',
        img:two,
        btn1:'Show Report',
        btn2:'Contact Company',
        btn3:'4 non conformities',
        per:75,
        record:'pending',
        className1:"rounded-md w-24 h-10 bg-[#FEFBB4] text-[#BDA31A]"
    },
    {
        compName:'Company 03',
        img:three,
        btn1:'Show Report',
        btn2:'Contact Company',
        btn3:'4 non conformities',
        per:65,
        record:'Falled',
        className1:"rounded-md w-24 h-10 bg-[#FFD2D2] text-[#FF806F]"
    },

]

export const Card4Data:{
    category:string
    icon?:React.ReactNode
    list?:{
        listName?:string
    }[]
}[]=[
    {
    category:"Project",
    icon:"FiArchive",
},
    {
    category:"Dates",
    icon:"FiCalendar",
},
{
    category:"2022-12-12"
},
    {
    category:"Day by",
    list:[{
        listName:'By Day',
    },{
        listName:'By Week',
    },{
        listName:'By Month',
    },{
        listName:'Wizard',
    }  
    ]
},
    {
    category:"Score",
    list:[{
        listName:'0% -> 50%',
    },{
        listName:'50% -> 70%',
    },{
        listName:'70% -> 100%',
    }  
    ]
},
    {
    category:"Status",
    list:[{
        listName:'Completed',
    },{
        listName:'Pending',
    },{
        listName:'Falled',
    }  
    ]
},
]

export const UpcomingCardData:{
    compName:string
    img:string
    record:string
}[]=[{
    compName:"",
    img:"",
    record:''
}]