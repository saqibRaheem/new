import React, { useState } from 'react'
import Img from '../../assets/23.png'
import Button from '../button/Button'
import Input from '../loginpage/Input'
import { FaCloudUploadAlt, FaArrowLeft, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AudotorData, AudotorData1, ClausesData } from './auditdata'
import 'animate.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { audotorDetailValidation } from '../../validation/Validation'
import { log } from 'console'
import { AuditorDetailsApi } from '../../api/Api'
import { useGlobalContext } from '../../GlobalContex'


function AudotorDetails() {
      const {userId} = useGlobalContext()   
       console.log("userid",userId);
       
    const snotify = (data: any) => toast.success(data);      
    const enotify = (err: any) => toast.error(err);

    const [open, setOpen] = useState(false);
    // const [clause, setClause] = useState();
    // const closeModal = () => setOpen(false);
    const token = localStorage.getItem("token")?.split('"')[1]

    // ************** REACT HOOK FORM VALIDATION ***************
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(audotorDetailValidation),
    });
    console.log(errors);
    const dispalyError = (err: any) => {
        switch (err) {
            case errors.Auditor?.message:
                return (
                    errors.Auditor?.message
                )
            case errors.Competencies?.message:
                return (
                    errors.Competencies?.message
                )
            case errors.siteName?.message:
                return (
                    errors.siteName?.message
                )
            case errors.startDate?.message:
                return (
                    errors.startDate?.message
                )
        }
    }
    // ************** REACT HOOK FORM VALIDATION ***************
// ******** use State ***************

// const [form, setForm] = useState('')

// const chnageHandler = (e: any) => {
    //     const checked = e.target.checked;

    //     // to get the checked value
    //     const checkedValue = e.target.value;

    //     // to get the checked name
    //     const checkedName = e.target.name;
    //     setForm(e.target.checked)
    //     // setForm({ ...form, [e.target.name]: e.target.value })
    //               console.log('calk')
    //               console.log(e.currentTarget.value)
    //               console.log(e.target.checked) 
    
    // ******** use State ***************
    //
 

    const submitForm = (form:any) => {
        console.log("click");
        console.log(form);

        AuditorDetailsApi(
        form.Auditor,
        form.siteName,
        form.Competencies,
        form.clauses,
        )

        // fetch('http://localhost:5000/auditor/auditorDetails', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name: form.Auditor,
        //         site: form.siteName,
        //         competencies: form.Competencies,
        //         auditStandards: form.clauses,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //         "Authorization": "Bearer " + token
        //     },
        // })
        //     .then((res) => {

        //         if (res.status == 200) {
        //             console.log(form.clauses);
                    
        //             localStorage.setItem('standard', form.clauses )
        //             res.json().then((data) => { snotify(data.msg) })
        //             window.location.href = "/questionclauses"

        //         }else{
        //             res.json().then((data)=>{ enotify(data.error)
        //          if(data.error){
        //              localStorage.removeItem("token")
        //          } 
        //          });

        //           } 
        //     }).catch((err) => {
        //         console.log(err);

        //     })


        // window.location.href='/questionclauses'

    }
    return (
        <>

            <div>
                <div className='w-full bg-[#ffff]'>
                    <div className='w-full flex flex-col justify-center items-center mt-16'>
                        <div className=''>
                            <img src={Img} width={207} alt="" />
                        </div>
                        <div className='absolute left-10 top-24 '>
                            <Link to="/userdashboard"> <FaArrowLeft size={24} className='text-[#696969]' /></Link>
                        </div>
                        <div className='m-10 w-full'>
                            <hr className='border-[#d1cdcd]' />
                        </div>
                    </div>
                </div>
                <div className='p-5 w-full flex flex-col'>
                    <div className="w-full bg-white md:mt-0 xl:p-0">
                        <div className="flex justify-center items-center gap-20">
                            <div className="w-2/3 p-1 space-y-4 md:space-y-6 sm:p-8">
                                <div className='flex'>
                                    <h1 className="text-xl font-semibold font-poppin md:text-3xl text-[#333]">
                                        Auditor Details
                                    </h1>
                                </div>
                                <div className='flex gap-10'>
                                    <div className='space-y-4 md:space-y-6 w-1/2'>
                                        {
                                            AudotorData.map((data, key) => {
                                                const err = data.errorMessage
                                                return (
                                                    <Input className=' rounded-lg border border-[#dddada] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-lg block w-full h-11 p-2 ' lable={data.lable} key={key} placeholder={data.placeholder} name={data.name} type={data.type}
                                                        register={{ ...register(data.name) }}
                                                        errorMessage={dispalyError(err)}
                                                    />
                                                )  
                                            })
                                        }
                                    </div>
                                    <div className='space-y-4 md:space-y-6 w-1/2'>
                                        {
                                            AudotorData1.map((data, key) => {
                                                const err = data.errorMessage
                                                return (
                                                    <Input className=' rounded-lg border border-[#dddada] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-lg block w-full h-11 p-2' lable={data.lable} key={key} placeholder={data.placeholder} name={data.name} type={data.type}
                                                        register={{ ...register(data.name) }}
                                                        errorMessage={dispalyError(err)}

                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='md:space-y-4 w-full'>
                                    <p className='mt-1 text-sm text-[#666666] font-poppin'> Scope of the audit</p>
                                    <div className='flex gap-4'>
                                        <Input type='radio' name="clause" value='ISO 9001:2015' placeholder='' register={{ ...register('clauses') }} lable='' className='border  opacity-60' />
                                        <p className='mt-1 text-sm text-[#666666] font-poppin cursor-pointer'  >ISO 9001:2015</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <Input type='radio' name="clause" value='ISO 14001:2015' placeholder='' register={{ ...register('clauses') }} lable='' className='border opacity-60' />
                                        <p className='mt-1 text-sm text-[#666666] font-poppin cursor-pointer'  > ISO 14001:2015</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <Input type='radio' name="clause" value='ISO 45001:2018' placeholder=''  register={{ ...register('clauses') }} lable='' className='opacity-60 border border-[#E9E9F2]' />
                                        <p className='mt-1 text-sm text-[#666666] font-poppin cursor-pointer'  > ISO 45001:2018 </p> <span className='mt-1 text-xs text-[#666666] font-poppin'> * These feature is under development, scheduled for release june 01 23 </span>
                                    </div>
                                    {errors.clauses1 && <h1 className='text-sm ml-2 text-red-700'>Select one</h1>}
                                </div>
                                <div className='flex justify-center '>
                                    <Button type="submit" onClick={handleSubmit(submitForm)} className='shadow-2xl w-96 h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer' text='Save Details' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AudotorDetails