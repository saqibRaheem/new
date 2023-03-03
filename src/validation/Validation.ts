import * as yup from 'yup';

export const loginValidation = yup.object({
    Email_address: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required'),
    
}) 

export const registerValidation = yup.object({
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required'),
    conformPassword: yup.string().oneOf([yup.ref('password')],'passwords must match')

})


export const schema = yup.object({
    Company_Name: yup.string().required("Company-Name-required"),
    Company_Address: yup.string().required(),
    Company_Phone: yup.string().required(),
    Company_Email: yup.string().required(),
    state:yup.string().required(),
    city: yup.string().required(),
    Designation: yup.string().required(),
    person_name: yup.string().required()
 })

 export const audotorDetailValidation = yup.object({
    Auditor: yup.string().required(),
    Competencies : yup.string().required(),
    siteName: yup.string().required(),
    startDate :yup.string().required(),
    clauses:yup.string().required('select one')
 })

 export const selectClsauses = yup.object({
    // clauses1: yup.string().required(),
    // checkbox: yup.string().required(),
    Department : yup.string().required(),
    contactPerson : yup.string().required(),
    email : yup.string().required(),
 })

 export const selectAnswer = yup.object({
    answer : yup.string().required(),
 })