import React, { FC, useState } from 'react'
import Img from '../../assets/23.png'
import Button from '../button/Button'
import Input from '../loginpage/Input'
import { FaCloudUploadAlt, FaArrowLeft, FaInfoCircle } from 'react-icons/fa'
import { CompanyData, CompanyData1 } from './companydata'
import img from '../../assets/face-2.jpg'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import 'animate.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import {toast} from 'react-toastify';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { schema } from '../../validation/Validation'
import { CompanyDetailsApi } from '../../api/Api'


const CompanyDetails = () => {
   
    const snotify = (data:any) => toast.success(data);
    const enotify = (err:any) =>toast.error(err);
     
    const token = localStorage.getItem("token")?.split('"')[1]
    // console.log(token);

    const id = localStorage.getItem('id')?.split('"')[1]

    // *********************************   Form Validation   ***************************
    const { handleSubmit , register, formState:{errors}} = useForm({
        resolver: yupResolver(schema),   
    });
    const displayError = (err:any) =>{
        switch(err){
            case errors.Company_Name?.message:
                return(
                    "Company Name is required"
                )
            case errors.Company_Address?.message:
                return(
                    "Company Address is required"
                )
            case errors.Company_Phone?.message:
                return(
                    "Company phone no is required"
                )
            case errors.Company_Email?.message:
                return(
                    "Company Email is required"
                )
            case errors.state?.message:
                return(
                    " state is required"
                )
            case errors.city?.message:
                return(
                    "city is required"
                )
            case errors.Designation?.message:
                return(
                    "Designation is required"
                )
            case errors.person_name?.message:
                return(
                    "Name is required"
                )
            
        }

    }
  
    //********************************** */ Form Validation End   *******************
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
//  ********************** USESTATE ***************************

// const [form, setForm] = useState({
    //     user_id: "",
    //     Company_Name: '',
    //     Company_Address: '',
    //     Company_Phone: '',
    //     Company_Email: '',
    //     state: '',
    //     city: '',
    //     Designation: '',
    //     person_name: ''
    // })
    
    // const chnageHandler = (e: any) => { 
        //     setForm({ ...form, [e.target.name]: e.target.value })   
    // }
        
    //  ********************** USESTATE ***************************
    const formSubmit =() =>{
        setOpen(o => !o)
    }
    
  
    const submitCompanyDetails = (form:any) => {
        // console.log('===>',form);
        closeModal()
        CompanyDetailsApi(
            form.Company_Name,
            form.Company_Address,
            form.Company_Phone,  
            form.Company_Email,
            form.state,
            form.city,
            form.Designation,
            form.person_name
        )
        
        // console.log("user id", id);

        // fetch('http://localhost:5000/company/companydetails', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         user_id:id,
        //         company_name: form.Company_Name,
        //         company_address: form.Company_Address,
        //         company_phone: form.Company_Phone,
        //         company_email: form.Company_Email,
        //         state: form.state,
        //         city: form.city,
        //         designation: form.Designation,
        //         person_name: form.person_name
        //     }),
        //     headers: {
        //         "Content-type": "application/json",
        //         "Authorization": "Bearer " + token
        //     }
        // })
        // .then((res)=>{
        //     if(res.status == 200){
        //         res.json().then((data)=>{
        //           console.log("company data",data);
        //           localStorage.setItem('name', JSON.stringify(data.newCompany.person_name))
        //           console.log("company person name",JSON.stringify(data.newCompany.person_name) );          
        //           snotify(data.msg)
        //             window.location.href='/userdashboard'
        //         })
        //     }else{
        //            res.json().then((data)=>{ enotify(data.error)
        //         if(data.error){
        //             localStorage.removeItem("token")
        //         } 
        //         });

        //          } 
        // }).catch((err) => {
        //       console.log("====>  error", err);
        //        })
    }
    const contentStyle = { background: 'transparent', border: 'none' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#000' }
    return (<>
        <Popup open={open}  {...{ contentStyle, overlayStyle, arrowStyle }} className="animate__animated animate__backInDown bg-transparent" closeOnDocumentClick onClose={closeModal}>
            <div className="animate__animated animate__backInDown mx-auto rounded-lg  shadow bg-white">
                <div className="modal">
                    <div className='flex justify-end p-5' onClick={closeModal} > <FiX size={19} /> </div>
                    <div className="p-9 flex flex-col ">
                        <div className='p-2 flex gap-4'>
                            <FaInfoCircle size={20} className='text-[#4B4B4B] mt-2' />
                            <h1 className='text-[#4B4B4B] text-2xl font-semibold'>Disclaimer</h1>
                        </div>
                        <div>
                            <h1 className='text-[#5C5C5C]'>The Information provided in this form, will be used to cover sections 1 through 3 in the Audit. Please fill out the form     carefully as it might affect your audit score.
                                The data collected will not be shared with any third party. For more information please read our privacy policy.</h1>
                        </div>
                        <div className='flex gap-2 p-2'>
                            <Input type='checkbox' name='' placeholder='' lable='' className='' />
                            <p className='mt-1 text-sm'> I agree check box</p>

                        </div>
                        <div className='flex gap-2 mt-7'>
                            <Button type='submit' onClick={handleSubmit(submitCompanyDetails)} className='nav text-[#fff] w-24 h-10 rounded-full bg-[#4B4B4B]' text='OK' />
                            <Button type='submit' onClick={closeModal} className='text-[#4B4B4B] w-24 h-10 rounded-full border-2 border-[#4B4B4B] bg-[#fff]' text='NO' />
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
        <div>
            <div className='w-full bg-[#ffff]'>
                <div className='w-full flex flex-col justify-center items-center mt-16'>
                    <div className=''>
                        <img src={Img} width={207} alt="" />
                    </div>
                    <div className='absolute left-10 top-28 '>
                        <Link to="/createaccount"> <FaArrowLeft size={24} className='text-[#696969]' /></Link>
                    </div>
                    <div className='m-10 w-full'>
                        <hr className='border-[#d1cdcd]' />
                    </div>
                </div>
            </div>
            <div className='p-5 w-full flex'>
                <div className="w-full bg-white md:mt-0 xl:p-0">
                    <div className=" flex justify-around">
                        <div className="w-2/3 p-1 space-y-4 md:space-y-6 sm:p-8">
                            <div className='flex'>
                                <h1 className="text-xl font-semibold md:text-3xl text-[#333]">
                                    Company Details
                                </h1>
                            </div>
                            <div className='flex gap-10'>
                                <div className='space-y-4 md:space-y-6 w-full'>
                                    {
                                        CompanyData.map((data, key) => {
                                            const err = data.errorMessage
                                            return (
                                                <>
                                                    <Input className=' rounded-lg border border-[#dddada] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-sm block w-full h-11 p-2' id={data.id} lable={data.lable} key={key} placeholder={data.placeholder} name={data.name} type={data.type}
                                                    register={{...register(data.id!)}}
                                                    errorMessage={displayError(err)} 
                                                    />
                                                  
                                                </>
                                            )
                                        })
                                        
                                    } 
                                </div>
                                <div className='space-y-4 md:space-y-6 w-full'>
                                    {
                                        CompanyData1.map((data, key) => {
                                            const err = data.errorMessage
                                            return (
                                                <Input className=' rounded-lg border border-[#dddada] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-sm block w-full h-11 p-2'  id={data.id} lable={data.lable} key={key} placeholder={data.placeholder} name={data.name} type={data.type} 
                                                register={{...register(data.id!)}}
                                                errorMessage={displayError(err)} 
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className='flex justify-center p-10'>
                                {/* onClick={() => setOpen(o => !o)} */}
                                <Button type="submit" onClick={handleSubmit(formSubmit)} className='shadow-2xl w-96 h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer' text='Save Details' />
                            </div>
                        </div>
                        <div className='p-1 space-y-4 md:space-y-6 sm:p-8'>
                            <div className='flex justify-center  w-64 h-64 border-dashed border-2 rounded-3xl border-[#075985]'>
                                <div className=''>
                                    <div className='animate__animated animate__backInRight flex justify-center items-center'>
                                        <FaCloudUploadAlt size={63} className="m-4 text-[#075985]" />
                                    </div>
                                    <div className='m-4'>
                                        <h1 className='font-semibold'>Please Upload image</h1>
                                    </div>
                                    <div className='m-4 flex justify-center'>
                                        {/* <Input type='file' className='nav w-24 h-12 rounded-3xl bg-[#075985] text-[#f2f3ee]  cursor-pointer file:border-none file:bg-[#075985] '/> */}
                                        <Button type="file" className='nav w-24 h-12 rounded-3xl bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer' text='Browser' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className=' flex gap-2'>
                                    <div className="flex items-center justify-center w-9 ">
                                        <div className='border-[#075985] border-2 rounded-full'>

                                            <img src={img} className='rounded-full' alt="" />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h2 className='text-md text-[#075985] font-semibold'>Upload images</h2>
                                        <p className='text-sm text-[#075985]'>Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between my-2">
                                    <p className="text-gray-300 text-sm">
                                        Image Uploading....
                                    </p>
                                </div>
                                <div className="w-full h-1 bg-blue-200 rounded-full">
                                    <div className="w-2/3 h-1  bg-[#1897DC] rounded-full">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default CompanyDetails