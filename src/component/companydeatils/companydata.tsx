export const CompanyData:{
    lable:string
    type:string
    name:string
    id?:string
    errorMessage?:any
    Company_Name?:string
    placeholder:string
}[]=[
    {
        lable:'Company Name',
        type:'text',
        name:'Company_Name',
        id:'Company_Name',
        errorMessage:'Company-Name-required',
        placeholder:'Abc Company'
    },{
        lable:'Company Address',
        type:'text',
        name:'Company_Address',
        id:'Company_Address',
        errorMessage:'Company_Address is a required field',
        placeholder:'Abcd Area to Califoonia'
    },{
        lable:'Company Phone no.',
        type:'text',
        name:'Company_Phone',
        id:'Company_Phone',
        errorMessage:'Company_Phone is a required field',
        placeholder:'1 + 92 05460 6541'
    }
    ,{
        lable:'Company Email',
        type:'email',
        name:'Company_Email',
        id:'Company_Email',
        errorMessage:'Company_Email is a required field',
        placeholder:'Company Email'
    },

]
export const CompanyData1:{
    lable:string
    type:string
    name:string
    id?:string
    errorMessage?:any
    placeholder:string
}[]=[
    {
        lable:'state',
        type:'text',
        name:'state',
        id:'state',
        errorMessage:'state is a required field',
        placeholder:'Abcd'
    },{
        lable:'city',
        type:'text',
        name:'city',
        id:'city',
        errorMessage:'city is a required field',
        placeholder:'Abcd'
    },{
        lable:'Designation',
        type:'text',
        name:'Designation',
        id:'Designation',
        errorMessage:'Designation is a required field',
        placeholder:'Account Holder'
    }
    ,{
        lable:'contact person name',
        type:'email',
        name:'person_name',
        id:'person_name',
        errorMessage:'person_name is a required field',
        placeholder:'person_name'

    },
]
