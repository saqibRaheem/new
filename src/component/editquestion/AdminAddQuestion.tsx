import React, { useState,useEffect } from 'react'
import Input from '../loginpage/Input'
import { AiFillDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { RxUpdate } from 'react-icons/rx'
import Button from '../button/Button'
import {toast} from 'react-toastify'
interface Question {
    questions: string;
    number: string;
    description: string;
    id: string;
}

function AdminAddQuestion() {

    const snotify = (data:any) => toast.success(data);
    const enotify = (err:any) =>toast.error(err);

    const token = localStorage.getItem("token")?.split('"')[1]
    const standard = localStorage.getItem("standard")
    console.log(standard);
    
    useEffect(() => {
        fetch("http://localhost:5000/clause/parent/ISO 9001:2015", {
            // method: "GET",
            // body: JSON.stringify({
            //   type:"_id",
            //   clause:"ISO 9001:2015",

            // }),
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token,
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

    const [data, setData] = useState([])
    const [question, setQuestion] = useState({ questions: '', id: '', number:"", description:'' })
    const [list, setList] = useState<Question[]>([])
    // const [update, setUpdate] = useState(true)
    const [updateId, setUpdateID] = useState(null)

    const changeHandler = (e: any) => {
        // const value = e.target.value
        const dataId = new Date().getTime().toString()
        // console.log(dataId)
        setQuestion({ ...question, [e.target.name]:e.target.value, id: dataId })
        console.log(e.target.value)

    }
    const Click = () => {
        
        setList((olditems) => {
            return [...olditems, question]    
        });
          const names = question.number + ' ' + question.questions
   console.log("name",names.split(" "));
         
   
//    fetch('http://localhost:5000/clause/add',{
//             method: 'POST',
//             body: JSON.stringify({
//                 id: question.number,
//                 name: names,
//                 number: question.number,
//                 ancestors:  [
//                     standard,
//                     "5"
//                 ],
//                 parent:'5',
//                 // children: req.body.children,
//                 hasQuestion:false,
//                 // question: req.body.question,
//                 // audit: req.body.audit,
//                 // userId: Math.random().toString(36).slice(2),
//             }),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8',
//               "Authorization": "Bearer " + token,
//             },
//         }).then((res)=>{
//             if(res.status === 200){
//             res.json().then((data)=>{
//               snotify(data.msg)
//               console.log(data);  
//             })
//             }else{
//               res.json().then((data)=>{ enotify(data.msg) })
                                          
//             }
//           })
//         .catch((err)=>{
//                console.log(err);
               
//         })

        setQuestion({ questions: '', id: '', number:'', description:'' })

    }

    const deletItems = (id: any) => {
        return setList((olditems) => {
            return olditems.filter((array, item) => array.id !== id);
        });
    };

    const editItems = (ques: any) => {
        setUpdateID(ques)
        // console.log(updateId)
    }
    const updateHandler = (e: any) => {
        //    console.log(e.target.value)
        const newList = list.map(li => (
            li.id === updateId ? { ...li, questions: e.target.value } : li
        ))
        setList(newList)

    }
    const clickToUpdate = () => {
        setUpdateID(null)
    }
    return (
        <div className='flex'>
            <div className="min-h-screen shadow-md bg-[#ffff] w-72 duration-300 overflow-auto">
                {data.map((item:any, index:number) => {
                    console.log(item);
                    
                    return (
                        <div key={index}  onClick={() => { changeHandler(item.name)}} className="flex items-center m-4 h-12">
                        <Button text={item.name} type='' className='ml-1 text-sm text-[#075985] font-bold cursor-pointer'/>
                        {/* className={`${open ? 'bg-[#075985] text-white text-sm font-bold cursor-pointer ml-1' : 'ml-1 text-sm text-[#075985] font-bold cursor-pointer'}`} */}
                    </div>
                    );
                })}
            </div>
            <div className='p-5 w-full'>
                <div className='flex justify-center p-8'>
                    <h1 className='text-[#075985] font-bold text-2xl'>ADD QUESTION</h1>
                </div>
                <div className='p-5 flex justify-center w-full'>
                    <Input className='rounded-2xl border border-[#F2F2F2] bg-[#F8F5F5] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-md block min-w-[1024px] p-2' onChange={(e) => { changeHandler(e); }} lable='' key='' placeholder='Clause Number' type='text' name='number' value={question.number} />
                </div>
                <div className='p-5 flex justify-center w-full'>
                    <Input className='rounded-2xl border border-[#F2F2F2] bg-[#F8F5F5] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-md block min-w-[1024px] p-2' onChange={(e) => { changeHandler(e); }} lable='' key='' placeholder='Clause' type='text' name='questions' value={question.questions} />
                </div>
                <div className='p-5 flex justify-center w-full'>
                    <textarea className='rounded-lg border border-[#F2F2F2] bg-[#F8F5F5] focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-md block min-w-[1024px] h-36 p-2' name='description' onChange={(e) => { changeHandler(e); }} placeholder='Description' value={question.description}></textarea>
                </div>
                <div className='p-5 flex justify-center'>
                    <div className='bg-[#F8F5F5] rounded-md min-w-[1024px] max-h-auto text-center'>
                        {list.map((item, index) => {
                            console.log("==> update Items",item)
                            return (<>
                                {updateId === item.id ?
                                    <div className='p-5 flex justify-between'>
                                        <Input className='rounded-2xl border border-[#d0d0d0] bg-[#F8F5F5] min-w-[900px] focus:outline-none text-gray-900 sm:text-md block p-2' onChange={(e) => { updateHandler(e); }} lable='' key='' placeholder='Clause' type='text' name='questions' value={item.questions} /> <RxUpdate className='mt-3 text-[#075985]' onClick={() => clickToUpdate()} size={30} />
                                    </div>
                                    : <div className='p-5 flex justify-between'>
                                        <p className='text-[#075985] text-2xl'>{item.number } { item.questions}</p>
                                        <div className='gap-5 flex'>
                                            <BsPencilSquare className='mt-1 text-[#075985]' onClick={() => editItems(item.id)} size={25} />
                                            <AiFillDelete className='mt-1 text-[#075985]' onClick={() => { deletItems(item.id) }} size={25} />
                                        </div>
                                    </div>}
                            </>
                            )
                        })}

                    </div>
                </div>
                <div className='flex justify-center'>
                    <Button type="" text='Save' className="shadow-sm text-[#fff] w-32 h-12 rounded-full bg-gradient-to-r from-[#1C8AC6] to-[#016499]" onClick={() => { Click(); }} />
                </div>
            </div>
        </div>
    )
}

export default AdminAddQuestion