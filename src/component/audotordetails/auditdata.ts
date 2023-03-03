export const AudotorData:{
    lable:string
    type:string
    name:string
    errorMessage?:any
    placeholder:string
}[]=[
    {
        lable:'Auditor',
        type:'text',
        name:'Auditor',
        errorMessage:'Auditor is a required field',
        placeholder:''
    },{
        lable:'Competencies (prior experience, training, other credentials)',
        type:'text',
        name:'Competencies',
        errorMessage:'Competencies is a required field',
        placeholder:''
    }
]
export const AudotorData1:{
    lable:string
    type:string
    name:string
    errorMessage?:any
    placeholder:string
}[]=[
    {
        lable:'Company/site Name',
        type:'text',
        name:'siteName',
        errorMessage:'siteName is a required field',
        placeholder:''
    },{
        lable:'Audit start date',
        type:'text',
        name:'startDate',
        errorMessage:'startDate is a required field',
        placeholder:''
    }
      
]

export const ClausesData:{
    type:string
    value:string
   
}[]=[
    {
        type:'radio',
        value:'4. Context of the organization',
      
    },
    {
        type:'radio',
        value:'5. Leadership',
     
    },
    {
        type:'radio',
        value:'6. Planning',
        
    },
    {
        type:'radio',
        value:'7. Support',
      
    },
    {
        type:'radio',
        value:'8. Operation',
        
    },
    {
        type:'radio',
        value:'9. Awareness',
       
    },
]