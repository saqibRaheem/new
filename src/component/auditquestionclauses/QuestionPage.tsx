import React, { FC, useState } from 'react'
import Button from "../button/Button";
import { FaExclamationCircle, FaAngleRight } from 'react-icons/fa'
import 'animate.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm,Controller } from 'react-hook-form';
import { selectAnswer } from '../../validation/Validation';
import { useGlobalContext } from '../../GlobalContex';

export interface questionprops {
  item: any
}
export interface Question{
  question:[]
}


const contentStyle = { background: 'transparent', border: 'none' };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const arrowStyle = { color: '#000' }

const QuestionPage = () => {
  const {clause , clauseData} = useGlobalContext()
   
  const get:any = localStorage.getItem("clauses");
  const set:any = clause

  const location = useLocation();
  const questions = location.state.question.question
  const heading:any = location.state.question
  // ******************* React Hook Form *******************

  const { handleSubmit, register, formState:{ errors } } = useForm({
    resolver: yupResolver(selectAnswer)
  })


  // ******************* React Hook Form *******************
   

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [answer, setAnswer] = useState({});
  const [match, setMatch] = useState<Question[]>([])

  const handleChange = (e:any) =>{
    // setAnswer(oldArray => [...oldArray,question:e.target.value])

    setAnswer({...answer, [e.target.name]: e.target.value})
  }
  var ansList = Object.values(answer)
   
  const Click = () =>{

    var selectClause:any; 
      set.map((data:any,i:any)=>{
      var data1:any = data;
      return(

        data1._id === heading.parent[0].split('.')[0] ? selectClause = data1:'not found'  
      )
      
    })    
        var child = selectClause.children.find((clause:any)=> clause._id === heading.parent[0]);
        var secondChild = child.children.find((clause:any)=> clause._id === heading.name);
        var questions = secondChild.question;
        
      
           for(var i = 0; i < questions.length; i++){
             if (ansList[i] === undefined) {
            } else {
                  questions[i].answer = ansList[i];
            }

          }
    navigate('/addquestionclauses')

}

  return (<>
    <Popup open={open}  {...{ contentStyle, overlayStyle, arrowStyle }} className=" bg-transparent" closeOnDocumentClick onClose={closeModal}>
      <div onClick={closeModal} className="animate__animated animate__backInDown mx-auto rounded-lg  shadow bg-white">
        <div className="modal">
          <h1 className='p-8 text-[#075985] '> The organization shall determine external and internal issues that are relevant to its purpose and its strategic direction and that affect its ability to achieve the intended result(s) of its quality management system. The organization shall monitor and review information about these external and internal issues. NOTE 1 Issues can include positive and negative factors or conditions for consideration. NOTE 2 Understanding the external context can be facilitated by considering issues arising from legal, technological, competitive, market, cultural, social and economic environments, whether international, national, regional or local. NOTE 3 Understanding the internal context can be facilitated by considering issues related to values, culture, knowledge and performance of the organization.</h1>
        </div>
      </div>
    </Popup>

    <div>
      <div className="w-full flex justify-around">
        <div className="p-5">
          <div className="flex justify-start items-center p-5 max-h-[39px] max-w-[507px] rounded-md bg-[#ffff] shadow-md">
            <h1 className="flex text-[#075985] font-bold">
              {heading.parent[0]} <FaAngleRight className='m-1' size={18} /> {heading.name}
            </h1>
          </div>
          {questions.map((quest: any, i: any) => {
          
            return (
              <div className="mt-10 ml-5">
                <h1 className="text-[#075985] w-[500px] font-bold tracking-widest">
                 {`Q${i + 1}`}  {quest.question}
                </h1>
                {quest.answer === "" ?  
                <div className="flex items-center m-2">
                  <textarea
                    id="answer"
                    value={quest.name}
                    name={i}
                    className="shadow-md border  focus:outline-none focus:bg-white delay-100 duration-500  text-gray-900 sm:text-md block  p-2 w-[600px] h-28 rounded-md"
                    onChange={handleChange}
                  />
                </div> :<h1 className="text-[#61737d] w-[500px] mt-5 font-bold tracking-widest">  {`Ans${i + 1}`}  { quest.answer}</h1>}
              </div>
            )
          })}
          <div className="flex justify-center items-center m-8">
            <Button
              type="submit"
              text="Save"
              className="shadow-sm text-[#fff] w-32 h-10 rounded-full bg-gradient-to-r from-[#1C8AC6] to-[#016499]"
              onClick={() => {
                //  navigate('/addquestionclauses')
                 Click()
                }}
            />
          </div>
        </div>
        {/* ********* SIDE BAR  ********** */}
        <div>
          <div className='p-5 flex justify-end '>
            <FaExclamationCircle size={22} onClick={() => setOpen(o => !o)} className="mt-1 text-[#84CC06]" />
          </div>
          <div className="m-5 min-h-[600px] shadow-lg bg-[#ffff] w-72 rounded-md">
            <div className="p-5 ">
              <div className="flex w-68 h-[104px] border border-[#B9E073] bg-[#B9E073] opacity-[60%]">
                <div className="w-2 h-[103px] bg-[#649411]" ></div>
                <div className="w-full m-auto ml-5">
                  <h1 className="flex text-[#649411] font-bold gap-1 "> <FaExclamationCircle className="mt-1" /> Importan</h1>
                  <h1 className="text-[#649411] text-xs">Please be as detailed as possible.
                    Evidence is acceptable in plain text</h1>
                </div>
              </div>
            </div>
            <div className="p-5 text-[#075985] text-xl">IS THERE ANY DOCUMENTED EVIDENCE OF NON-CONFORMITY ?</div>
            <div className="flex justify-center items-center gap-2 m-3">
              <Button
                type="submit"
                text="Yes"
                className="shadow-sm text-[#fff] w-24 h-8 rounded-full bg-gradient-to-r from-[#1C8AC6] to-[#016499]"
              />
              <Button
                type="submit"
                text="No"
                className="shadow-sm text-[#016499] w-24 h-8 rounded-full border border-[#016499]"
              />
            </div>
            <div className="p-5 text-[#075985] text-xl place-items-center">ARE YOU SURE ABOUT YOUR ANSWER ?</div>
            <div className="flex justify-center items-center gap-2 m-3">
              <Button
                type="submit"
                text="Yes"
                className="shadow-sm text-[#fff] w-24 h-8 rounded-full bg-gradient-to-r from-[#1C8AC6] to-[#016499]"
              />
              <Button
                type="submit"
                text="No"
                className="shadow-sm text-[#016499] w-24 h-8 rounded-full border border-[#016499]"
              />
            </div>
          </div>
        </div>
        {/* ********* SIDE BAR END ********** */}
      </div>
    </div>
  </>
  )
}

export default QuestionPage