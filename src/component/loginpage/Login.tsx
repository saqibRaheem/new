import React, { useState,useContext } from 'react'
import Img from '../../assets/23.png'
import Button from '../button/Button'
import { loginData } from '../loginpage/logindata'
import Input from './Input'
import { FaApple, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import '../layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import 'animate.css'
import {UserContext} from '../globalcontex/Store'
import {toast} from 'react-toastify'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginValidation} from '../../validation/Validation'
import { LoginApi } from '../../api/Api'




function Login() {

  // const snotify = (data:any) => toast.success(data);
  // const enotify = (err:any) =>toast.error(err);
  // const userContext = useContext(UserContext)

  // ****************** React Hook Form ******************
  const { handleSubmit , register, formState:{errors}} = useForm({
    resolver: yupResolver(loginValidation),   
   });  
   console.log(errors.check1)

   const displayError = (err:any)=>{
     switch(err){
      case errors.Email_address?.message:
      return(
        errors.Email_address?.message
      )
      case errors.password?.message:
      return(
        errors.password?.message
      )
     }
   }
  // ****************** React Hook Form ******************

// console.log('login stateFunction', userContex.setState({name:'dassault'}))


const navigate = useNavigate()
// ************** useState Working **************

// const [form, setForm] = useState({
  //   Email_address: '',
  //   password: ''
  // })
  
  // const chnageHandler = (e: any) => {
    //   setForm({ ...form, [e.target.name]: e.target.value })
    // }
    
  // ************** useState Working **************
 
  const submitForm = (form:any) => {
    // let data = {form.}
    console.log(form);
    LoginApi(form.Email_address, form.password)



    // fetch('http://localhost:5000/user/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: form.Email_address,
    //     password: form.password,
    //     // userId: Math.random().toString(36).slice(2),
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    // .then((res)=>{
    //   if(res.status == 200){
    //     res.json().then((data)=>{  snotify(data.msg);
    //       fetch('http://localhost:5000/user/'+data.id,
    //       {
    //         headers: {
    //           "Content-type": "application/json",
    //           "Authorization": "Bearer "+ data.token,
    //       }
    //       }
    //       )
         
    //       .then((res)=>{
    //        res.json().then((data)=>{ 
           

    //         userContext?.setUser(data.studentData);

    //         console.log(data.studentData)
    //       });
             
    //       })
    //       localStorage.setItem('token', JSON.stringify(data.token))
    //       localStorage.setItem('id', JSON.stringify(data.id))
    //       console.log('---Save Id--->'+ data.id);
          
    //       console.log( "user  name", data);

          
    //       if(data.company){
    //         localStorage.setItem('name', JSON.stringify(data.name))
    //         navigate("/userdashboard")

    //       }else{
    //           console.log("login data",data);
    //       navigate('/companydetails')
    //       }
    //      })
    //   }else{
    //     res.json().then((data)=>{ enotify(data.msg)

    //     console.log(data.error);
        
    //     });
        
    //   }

      
    // })

  }

  return (
    <div className='w-full h-screen bg-[#ffff]'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center mt-20'>
        <div className=''>
          <img src={Img} width={207} alt="" />
        </div>

        <div className=''>
          <div className="flex flex-col items-center justify-center p-8 mx-auto md:h-full lg:py-0">
            <div className="w-full  bg-white md:mt-0 sm:max-w-lg  xl:p-0 dark:bg-gray-800 dark:border-gray-700">

              <div className="p-1 space-y-4 md:space-y-6 sm:p-8">
                <div className='flex'>
                  <h1 className="text-xl font-semibold md:text-3xl text-[#075985]">
                    Log in
                  </h1>
                </div>
             

                {
                  loginData.map((data, key) => {
                    
                    const err = data.errorMessage
                    return (
                  
                        <Input className=' rounded-lg border border-[#F2F2F2] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-sm block w-full p-2'lable={data.lable} key={key} placeholder={data.placeholder} name={data.name} type={data.type} 
                        register={{...register(data.name!)}}
                         errorMessage={displayError(err)}
                        />
                     
                    )
                  })
                }
            
                <p className='text-[#333333] text-sm'> <input type="checkbox" name="check" id="" className='m-2' placeholder='' /> Remember me  </p>
                <div className=''>
                  <p className='text-sm p-2 '>By continuing, you agree to the Terms of use and Privacy Policy.</p>
                  <Button type="submit" onClick={handleSubmit(submitForm)} className='w-full h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer' text='Log in' />
                </div>

                <div className="flex justify-center items-center">
                  <a href="#" className='text-[#111111] text-sm underline font-semibold cursor-pointer'>Forget your password</a>
                </div>
                <div className="flex justify-center items-center">
                  <p className='text-[#666666] text-sm'> Don’t have an acount?<Link to='/createaccount' className='text-[#075985] text-sm underline font-semibold cursor-pointer'>Sign up</Link> </p>
                </div>
                <div className="flex justify-center items-center pt-4 gap-3">
                  <hr className='border-[#d1cdcd] w-32' />
                  <p className='text-black text-sm'>Or continue with </p>
                  <hr className=' border-[#d1cdcd] w-32' />
                </div>
                <div className=" flex justify-center items-center gap-7">
                  <a href="#"><FaFacebookF className='text-[#097BEB]' /></a><a href="#"><FaApple className='text-[#000]' /></a><a href="#"><FcGoogle /></a><a href="#"><FaTwitter className='text-[#47ACDF]' /></a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login