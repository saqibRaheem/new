import React, { useState, useContext, useEffect } from "react";
import Input from "../loginpage/Input";
import { useNavigate } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import Button from "../button/Button";
import img from '../../assets/on.png'
import img1 from '../../assets/off.png'
import { useGlobalContext } from "../../GlobalContex";
import { SelectClausesAnswer } from "../../api/Api";

export interface Data{
question:[]
}

function AddQuestionClauses() {

    const { clause } = useGlobalContext();
      // var data:any = clause
      console.log('QAS',clause);
      

  const navigate = useNavigate();

  const get:any = localStorage.getItem("clauses");
  const set:any = clause
   
    
       
      
  // useEffect(()=>{
  //   controlLight(set)
  // },[])
  
  const [question, setQuestion] = useState<Data[]>([]);

console.log(question);

  const submitAnswer = () =>{
            

    SelectClausesAnswer(clause)
   
      console.log(clause);
      // navigate('/userdashboard')
      
        
 }

const [form, setForm] = useState({clauses:''});
const [clause1, setClause1] = useState({clauses:''});
const [children, setChildren] = useState([]);
var child:any = children;


const [on ,setOn] = useState(false);

       var selectClause:any; 
       set.map((data:any,i:any)=>{
         var data1:any = data;
         console.log(data.name);
         console.log(form.clauses);
         return(
           data1.name ===  form.clauses ? selectClause = data1:'not found'  
           )
          }) 
          console.log(selectClause);
        var childe:any;
      
   selectClause ?  childe = selectClause.children.find((clause:any)=> clause.name === clause1.clauses ): console.log('not found');
     console.log(childe,'child1111');
      // var secondChilde:any;
      childe ? childe.children.find((clausee:any)=> clausee.children ) : console.log('not found');
    //  console.log("====",secondChilde.question.answer === " " ? "not blank":"blank");

     
      

    // var secondChild = child.children.find((clause:any)=> clause._id === heading.name);
    // var questions = secondChild.question;
    //    for(var i = 0; i < questions.length; i++){
    //     questions[i].answer = ansList[i];
    //   }

 

// const isCompleted:any = []
// const controlLight = (set:any) =>{
//       // console.log(set);
//       const _isCompleted:any = []
//      set.map((d:any,i:any)=>{
//          d.data.children.map((da:any,i:any)=>{
//           // console.log(da.children);
//            const __isCompleted:any = []
//            da.children.map((dd:any,ii:any)=>{
//           // console.log(dd);
          
//           __isCompleted.push(false)
//         })
//         _isCompleted.push(__isCompleted)
//         })
//         isCompleted.push(_isCompleted)
//         })  
//     // for (var i=0 ;i < set.lenght ; i++){
//     // console.log('child->>>' + set[i]); 
//   // const _isCompleted:any = []
//   //   for(var j=0;j<set[i].children ;j++){
//   //     isCompleted.push(false)
//   // }
//   // isCompleted.push(_isCompleted)
// // }

// }



  const chnageHandler = (e:any) => {
    const chacked = e.target.checked;
      setForm({ ...form, [e.target.name]: e.target.value });
    set.map((item:any) => {
      return item.name === e.target.value
        ? setChildren(item)
        : "Not Match";
    });
  };
console.log(clause1.clauses);

  const chnageChildren = (e:any) => {
    setClause1({ ...clause1, clauses: e });

    
    child.children.map((item:any) => {
      return item.name === e ? setChildren(item) : "Not Match";
    });
    // setClause1(false);
  };
 
  
  return (
    
    <div className="flex">
      {/* ********************************* */}
      <div className="min-h-screen shadow-md bg-[#ffff] w-72 duration-300 overflow-auto">
        {set.map((item:any, index:number) => {
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
            child.children.map((item:any, i:number) => {
              // console.log(item.question[0][i]);
              item.question ? item.question.map((d:any)=> console.log('=>>>',d.answer)) : console.log('not');
              return (

                <>
                  { 
                      item.children ?                       
                      <div className="p-5 min-w-[1098px] grid md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1">
                        <div onClick={() =>{ chnageChildren(item.name)}} className="flex justify-between cursor-pointer p-5 items-center min-h-[77px] rounded-md bg-[#ffff] box">
                            <Button className="text-xl font-bold text-[#11386b]"  text={item.name} type='' />
                            {!on ? <img src={img} alt="" /> : <img src={img1} alt="" />} 
                        </div>
                      </div>
                      : item.hasQuestion === true ? 
                       <div className="p-5 min-w-[1098px] grid md:grid-cols lg:grid-cols">
                        <div onClick={() =>{
                          // chnageChildren(item.name)
                           navigate('/questionpage', {state:{question:item}}) 
                           }} className={`flex justify-between p-5 items-center cursor-pointer min-h-[77px] rounded-md bg-[#ffff] box`}>
                             <Button className="text-xl font-bold text-[#11386b]"  text={item.name} type='' />
                            {/* {item ? <img src={img} alt="" /> : <img src={img1} alt="" />}  */}
                            {item.question ? item.question.map((d:any,id:any)=> d.answer === '' ?  <div className=""><img src={img1} alt="" /></div>  : <img src={img} alt="" />) : console.log('not')} 
                            </div>
                        </div>
                      : item.question  ? <h1>hello</h1> : 'non'
                    
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
       <Button onClick={()=>{submitAnswer()}} className="bg-[#11386b] text-[#fff] rounded-md w-32 h-8 absolute bottom-0 left-[50%]" text="Submit" type='' />
      </div>
    </div>
  );
}




export default AddQuestionClauses;
