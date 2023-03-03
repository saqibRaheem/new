import React, { useState, useContext, useEffect } from "react";
import Input from "../loginpage/Input";
import { useNavigate } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import Button from "../button/Button";
import img from '../../assets/on.png'
import img1 from '../../assets/off.png'
import { useGlobalContext } from "../../GlobalContex";
import { UpdateClausesAnswer } from "../../api/Api";
import Layout from "../layout/Layout";

export interface Data {
  question: []
}

function UpdateQuestionClauses() {

  const { clause } = useGlobalContext();
  const navigate = useNavigate();

  const get: any = localStorage.getItem("clauses");
  const set: any = clause
  const [on, setOn] = useState(false);


  const [question, setQuestion] = useState<Data[]>([]);


  const updateAnswer = () => {

    UpdateClausesAnswer(clause)
    console.log(clause);
    navigate('/userdashboard')

  }

  const [form, setForm] = useState({});
  const [clause1, setClause1] = useState({});
  const [children, setChildren] = useState([]);
  var child: any = children;

  const chnageHandler = (e: any) => {
    const chacked = e.target.checked;
    setForm({ ...form, [e.target.name]: e.target.value });
    set.map((item: any) => {
      return item.name === e.target.value
        ? setChildren(item)
        : "Not Match";
    });
  };

  const chnageChildren = (e: any) => {
    setClause1({ ...clause1, clauses: e });


    child.children.map((item: any) => {
      return item.name === e ? setChildren(item) : "Not Match";
    });
    setClause1(false);
  };


  return (
    <Layout>

      <div className="flex">
        {/* ********************************* */}
        <div className="min-h-screen shadow-md bg-[#ffff] w-72 duration-300 overflow-auto">
          {set.map((item: any, index: number) => {
            return (
              <div key={index} className="flex justify-between m-8 gap-4">
                <p className="mt-1 text-sm text-[#075985] font-bold cursor-pointer">
                  {item.name}
                </p>
                <Input
                  type="checkbox"
                  name="clauses"
                  value={item.name}
                  placeholder=""
                  onChange={(e) => {
                    chnageHandler(e);
                  }}
                  lable=""
                  className="border opacity-50"
                />
              </div>
            );
          })}
        </div>
        {/* ****************************** */}
        <div className="mx-auto ">
          {
            child.children ? (
              child.children.map((item: any, i: number) => {
                // console.log(item.question[i]);

                return (

                  <>
                    {
                      item.children ?
                        <div className="p-5 min-w-[1098px] grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1">
                          <div onClick={() => { chnageChildren(item.name) }} className="flex justify-between cursor-pointer p-5 items-center min-h-[77px] rounded-md bg-[#ffff] box">
                            <Button className="text-xl font-bold text-[#11386b]" text={item.name} type='' />
                            {/* {on ? <img src={img} alt="" /> : <img src={img1} alt="" />} */}
                            {item.children 
                            ? 
                            item.children.map((d: any, id: any) => d.question ? d.question.map((a:any)=> a.answer.length <= 0 ? <h1>yes...</h1> : <h1>No</h1> ) : console.log('sd')) : console.log('not')}
                          </div>
                        </div>

                        : item.hasQuestion === true ?
                          <div className="p-5 min-w-[1098px] grid md:grid-cols lg:grid-cols">
                            <div onClick={() => {
                              navigate('/updatequestionpage', { state: { question: item } })
                            }} className={`flex justify-between p-5 items-center cursor-pointer min-h-[77px] rounded-md bg-[#ffff] box`}>
                              <Button className="text-xl font-bold text-[#11386b]" text={`${item.name} ${[i]}`} type='' />

                              <div className="">
                                {item.question ? item.question.map((d: any, id: any) => d.answer === '' ? <img src={img1} alt="" /> : <img src={img} alt="" />) : console.log('not')}
                              </div>
                            </div>
                          </div>
                          : "nooooo"

                    }

                  </>
                );
              })
            ) : (
              <h1 className="animate__animated animate__fadeInDown p-5 text-[#075985] text-3xl font-bold">
                FILL THIS FIELD
              </h1>
            )
          }
          <Button onClick={() => { updateAnswer() }} className="bg-[#11386b] text-[#fff] rounded-md w-32 h-8 absolute bottom-0 left-[50%]" text="Update Question" type='' />
        </div>
      </div>
    </Layout>
  );
}


export default UpdateQuestionClauses