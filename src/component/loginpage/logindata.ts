export const loginData:{
    lable:string
    type:string
    name:string
    placeholder:string
    errorMessage?:any
    onChange?: (e:Event)=> void

}[]=[
    {
        lable:'Email address or user name',
        type:'Email',
        name:"Email_address",
        placeholder:'Enter email',
        errorMessage:'Email is required', 
        onChange:(e:Event)=>{}
       
    },{
        lable:'password',
        type:'password',
        name:"password",
        placeholder:'password',
        errorMessage:'Password is required',
        onChange:(e:Event)=>{}
    },

]

export const RegisterData:{
    lable:string
    type:string
    name:string
    errorMessage?:any
    placeholder:string
}[]=[
    {
        lable:'Your Email',
        type:'emal',
        name:'email',
        errorMessage:'Email is required',
        placeholder:'Enter Email'
    },{
        lable:'Your Password',
        type:'password',
        name:'password',
        errorMessage:'Password is required',
        placeholder:'password'
    },{
        lable:'Conform password',
        type:'password',
        name:'conformPassword',
        errorMessage:'passwords must match',
        placeholder:' Conform password'
    }
]