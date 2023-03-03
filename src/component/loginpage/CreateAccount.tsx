import React, { useState } from 'react'
import Img from '../../assets/23.png'
import Button from '../button/Button'
import { RegisterData } from '../loginpage/logindata'
import Input from './Input'
import { FaApple, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'animate.css'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerValidation} from '../../validation/Validation';
import { RegisterApi } from '../../api/Api'


function CreateAccount() {
  // const snotify = (data:any) => toast.success(data);
  // const enotify = (err:any) =>toast.error(err);

  // ********************* React hook form validation *********************
  const { handleSubmit , register, formState:{errors}} = useForm({
    resolver: yupResolver(registerValidation),   
   });
   console.log(errors);
   
   const displayError = (err:any)=>{
  switch(err){
    case errors.email?.message:
    return(
      errors.email?.message
    )
    case errors.password?.message:
    return(
      errors.password?.message
    )
    case errors.conformPassword?.message:
    return(
      errors.conformPassword?.message
    )
  }
   }
  
  // ********************* React hook form validation *********************
// ****************** USE STATE ******************

// const [form, setForm] = useState({
  //   email: '',
  //   password: '',
  //   conformpassword: ''
  // })
  
  // const chnageHandler = (e: any) => {
    //   setForm({ ...form, [e.target.name]: e.target.value })
    
    // }
    
// ****************** USE STATE ******************

   
  const submitForm = (form:any) => {

    RegisterApi(form.email, form.password, form.conformPassword)

    // fetch('http://localhost:5000/user/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: form.email,
    //     password: form.password,
    //     conformpassword: form.conformpassword
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // }).then((res)=>{
    //   if(res.status === 200){
    //   res.json().then((data)=>{
    //     snotify(data.msg)
    //     window.location.href="/login"
    //     console.log(data);  
    //   })
    //   }else{
    //     res.json().then((data)=>{ enotify(data.msg) })
                                    
    //   }
    // })
  }

  return (

    <div className='w-full h-screen bg-[#ffff]'>
      <div className='max-w-screen-xl mx-auto flex flex-col justify-center mt-12'>
        <div className='flex'>
          <img src={Img} width={190} alt="" />
        </div>
        <div className=''>
          <div className="flex flex-col items-center justify-center p-8 mx-auto  md:h-full lg:py-0">
            <div className='flex-col mb-14'>
              <h1 className="text-xl font-semibold md:text-4xl text-[#075985]">
                Create an Account
              </h1>
              <div className="flex justify-center items-center">
                <p className='text-[#111] text-sm'> Already have an ccount? <Link to='/login' className='text-[#075985] text-sm underline font-semibold cursor-pointer'> Log in </Link> </p>
              </div>
            </div>
            <div className="w-full  bg-white md:mt-0 sm:max-w-lg  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="space-y-4 md:space-y-6">
                {
                  RegisterData.map((data, key) => {
                    const err = data.errorMessage
                    console.log(err);
                    
                    return (
                      <Input className=' rounded-lg border border-[#F2F2F2] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-sm block w-full p-2'  lable={data.lable} key={key} name={data.name} placeholder={data.placeholder} type={data.type} 
                      register={{...register(data.name!)}}
                         errorMessage={displayError(err)}
                      />
                    )
                  })
                }
                <p className='text-[#333333] text-sm'> <input type="checkbox" name="check" id="" className='m-2' /> Remember me  </p>
                <div className=''>
                  <p className='text-sm p-2 '>By continuing, you agree to the Terms of use and Privacy Policy.</p>
                  <Button type="submit" onClick={handleSubmit(submitForm) } className='w-full h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer' text='Create an account' />
                </div>
                <div className=" flex justify-center pt-7 items-center gap-7">
                  <a href="#" className='w-32 rounded-3xl border border-black h-10 flex  gap-2 text-sm items-center justify-center'><FaFacebookF className='text-[#097BEB]' />FaceBook</a>
                  <a href="#" className='w-32 rounded-3xl border border-black h-10 flex  gap-2 text-sm items-center justify-center'><FcGoogle /> Google</a>
                  <a href="#" className='w-32 rounded-3xl border border-black h-10 flex  gap-2 text-sm items-center justify-center'><FaApple className='text-[#000]' /> Apple </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    // </div>
  )
}

export default CreateAccount