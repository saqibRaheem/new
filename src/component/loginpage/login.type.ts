export interface loginProps{
    lable?:string
    errorMessage?:any
    type?:string
    name?:string
    value?:string
    placeholder?:string
    className?:string
    register?:any
    id?:string
    ref?:any
    onChange?: (e:unknown)=> void
}
// export interface login{
//     heading:string
// }
export interface buttonProps{
    className:string
    text:string
    type:any
    onClick?:()=>void
}




        