/* eslint-disable eqeqeq */
import React, { useState, useRef, useEffect } from "react";
import Button from "../button/Button";
import Input from "../loginpage/Input";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "reactjs-popup/dist/index.css";
//  import { useGlobalContext } from "../globalcontex/AuthContext";
 import {toast} from 'react-toastify';
 import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {selectClsauses} from '../../validation/Validation'
import { useGlobalContext } from "../../GlobalContex";

function SelectClauses() {
   const { clause, clauseData } = useGlobalContext();

  const navigate = useNavigate();


  const [data, setData] = useState([]);
  const ref = useRef(null);

  const token = localStorage.getItem("token")?.split('"')[1]
 const standard = localStorage.getItem("standard")


  useEffect(() => {
    fetch("http://localhost:5000/clause/parent/"+standard, {
    // method: "GET",
    // body: JSON.stringify({
    //   type:"_id",
    //   clause:"ISO 9001:2015",
     
    // }),
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer "+ token,
      },
     
    })
      .then((response) => {
        response.json().then((data) => {
          var names = data.clauses
          setData(names);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

// ************* React Hook Form *************
// const { handleSubmit , register, reset, formState:{errors}} = useForm({
//   resolver: yupResolver(selectClsauses),   
//  });  
//  console.log(errors)
 
 // ************* React Hook Form *************


const [form, setForm] = useState({
  department: "",
  contactPerson: "",
  email: "",
  clauses:'',
  data:{}
});

  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);

  const chnageHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    data.map((data)=> { return data.name === form.clauses ? ( setForm((form) => Object.assign({}, form, { data:data }))) : "notMatch" })

  };
  
  //  const submitClause = (select,e) =>{
    //  console.log(select);
    //  setForm({...form,select})
    //  data.map((data)=> { return data.name === select.checkbox[0] ? (setForm((form) => Object.assign({...form},  { data:data },{email:select.email},{department:select.Department},{checkbox:select.checkbox[0]},{contactPerson:select.contactPerson}))) : "notMatch" })
    //  setList((olditems) => {
    //    return [...olditems, form];
    //  });
    //  reset('', {
    //    keepValues: false,
    //   })
    //   console.log(form);
      //  setForm({ department: "", contactPerson: "", email: "" ,clauses:{}});
    // }
    const Click = () => {
    setList((olditems) => {
      return [...olditems, form];
    });
    setList1((olditems) => {
      return [...olditems, form.data];
    });
    setForm({ department: "", contactPerson: "", email: "" ,clauses:{}});
  };
  const deletItems = (id) => {
    return setList((olditems) => {
      return olditems.filter((array, item) => item !== id);
    });
  };
  const startAudit = ()=>{
 
    clauseData(list1)
    localStorage.setItem("clauses",JSON.stringify(list))   
// window.location.href = '/addquestionclauses'
navigate('/addquestionclauses')

  }

  return (
     <div className="flex  bg-[#fafafa] min-h-screen">
      {/* ********************************** */}
      <div className="h-screen nav bg-[#ffff] w-72 duration-300 overflow-auto">
        {data.map((item, index) => {
          // console.log(item[index]);
          return (
            <div key={index} className="flex justify-between m-8 gap-4">
              <p className="mt-1 text-sm text-[#075985] font-bold cursor-pointer">
                {item.name}
              </p>
              <Input
                type="checkbox"
                name="clauses"
                id={item.name}
                value={item.name}
                placeholder=""
                onChange={(e) => {
                  chnageHandler(e);
                }}
                lable=""
                className="border opacity-50"
                // register={{...register('checkbox')}}
              />
            </div>
          );
        })}
      </div>
      {/* ********************************** */}
      {/* ********************************** */}
      <div className="md:flex justify-around w-full">
      <div className="p-6 mr-10 space-y-4 md:space-y-6 sm:p-8 w-[476px]">
        <h1 className="text-[#1B8AC5] font-poppin font-bold tracking-widest text-[28px]">
          SELECT CLAUSES
        </h1>
        <div className="w-full p-1 space-y-4 ">
          <Input
            className="rounded-lg border border-[#b5b3b3] focus:outline-none focus:bg-white delay-100 duration-500  w-full p-2"
            onChange={(e) => {
              chnageHandler(e);
            }}
            ref={ref}
            // value='department'
            value={form.department}
            lable=""
            placeholder="Department"
            name="department"
            type="text"
            // register={{...register('Department')}}


          />
          <Input
            className="rounded-lg border border-[#b5b3b3] focus:outline-none focus:bg-white delay-100 duration-500  w-full p-2"
            onChange={(e) => {
              chnageHandler(e);
            }}
            value={form.contactPerson}
            lable=""
            placeholder="Contact Person"
            name="contactPerson"
            type="text"
            // register={{...register('contactPerson')}}
          />
          <Input
            className="rounded-lg border border-[#b5b3b3] focus:outline-none focus:bg-white delay-100 duration-500  w-full p-2"
            onChange={(e) => {
              chnageHandler(e);
            }}
            value={form.email}
            lable=""
            placeholder="Email"
            name="email"
            type="email"
            // register={{...register('email')}}
          />
          <Button
            onClick={()=>{Click()}}
            className="w-full h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer nav"
            text="Add"
          />
        </div>
      </div>
      {/* *********************************************** */}
      {/* *********************************************** */}
      <div className="p-1 mr-20 space-y-4 md:space-y-6 sm:p-8 ">
        {list == "" ? (
          <h1 className="animate__animated animate__fadeInDown text-[#075985] text-3xl font-bold">
            FILL THIS FIELD
          </h1>
        ) : (
          <div className="w-[471px] max-h-[795px] min-h-[345px] border-2 border-[#B7B7B7] rounded-lg p-2 flex flex-col justify-between">
            <div className="overflow-auto">
              <ul className="divide-y divide-solid ">
                {list.map((listValue, index) => {
                  return (
                    <div
                      id={index}
                      key={index}
                      className="w-[448px] h-[158px] bg-[#fff] p-2 rounded-md "
                    >
                      <li className="flex justify-between m-3 text-[#075985] text-lg font-poppin font-extrabold">
                       {listValue.clauses}
                        <FiX
                          onClick={() => {
                            deletItems(index);
                          }}
                          className="text-[#075985] hover:text-[#95c9e4]"
                          size={22}
                        />
                      </li>
                      <li className="ml-7 text-[#075985] font-poppin">
                        {listValue.department}
                      </li>
                      <li className="ml-7  text-[#075985] font-poppin">
                        {listValue.contactPerson}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="m-3">
              <Button
                onClick={() => {startAudit()}}
                className="w-full h-12 rounded-full bg-[#075985] hover:bg-[#113b52] text-[#f2f3ee] font-semibold cursor-pointer nav"
                text="Start Audit"
              />
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default SelectClauses;
