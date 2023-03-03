import React, { useState, useContext, useEffect } from "react";
import Input from "../loginpage/Input";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
// import { GlobalState } from "../../GlobalContex";

function AddAuditQuestion() {
  
//    const state = useContext(GlobalState);
//    const [product] = state.getClause
//    console.log(state.getClause);
   

    const navigate = useNavigate();
    const token = localStorage.getItem("token")?.split('"')[1]
    useEffect(() => {
        fetch("http://localhost:5000/clause/parent/ISO 9001:2015", {
            method: "GET",
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
                    // var names = data.clauses
                    console.log(data);
                    console.log(data.clauses);
                    
                    setData(data.clauses);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const get: any = localStorage.getItem("clauses");
    const set = JSON.parse(get);

    
    // console.log("====> localStorage",JSON.parse(get));

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [form, setForm] = useState({});
    const [clause, setClause] = useState({});
    const [children, setChildren] = useState([]);
    const [question, setQuestion] = useState();
    // console.log("====> Question", question);
    console.log(data.map((item:any) => item.name === '5 Leadership' ? item: 'not found'));    

    const chnageHandler = (e: any) => {
        setForm({ ...form, clauses: e });

        data.map((item: any) => {
            console.log(item.name);
            
            return item.name === e
                ? setChildren(item)
                : "Not Match";
        });
    };

    var child: any = children;
    console.log("===> child", child.children);
    // console.log("===>", child.children);

    const chnageChildren = (e: any) => {
        setClause({ ...clause, clauses: e });
        console.log(e);
        // setClause(e.target.chacked = false);



        child.children.map((item: any) => {
            console.log(item);
            return item.name === e ? setChildren(item) : "Not Match";
        });
        setClause(false);
    };

    return (<>
        <div className="flex">
            {/* ********************************* */}
            <div className="min-h-screen shadow-md bg-[#ffff] w-72 duration-300 overflow-auto">
                {data.map((item: any, index: number) => {
                    // console.log(data);
                       
                    return (
                        <div key={index}  onClick={() => { chnageHandler(item.name); setOpen(!open)}} className="flex items-center m-4 h-12">
                            <Button text={item.name} type='' className='ml-1 text-sm text-[#075985] font-bold cursor-pointer'/>
                            {/* className={`${open ? 'bg-[#075985] text-white text-sm font-bold cursor-pointer ml-1' : 'ml-1 text-sm text-[#075985] font-bold cursor-pointer'}`} */}           
                        </div>
                    );
                })}
            </div>
            {/* ****************************** */}
            <div className="mx-auto ">
                {/* {console.log("child ===>", child)} */}
                {
                    child.children ? (
                        child.children.map((item: any, i: number) => {
                            {
                                console.log("maping items==>", item)
                            }
                            return (
                                <>
                                    {
                                          
                                        //    item.name  ? 
                                        //    <div className="p-5 min-w-[1098px] grid md:grid-cols lg:grid-cols">
                                        //          <div className="flex justify-between p-5 items-center min-h-[77px] rounded-md bg-[#ffff] box">
                                        //              <Button className="text-xl font-bold text-[#11386b]" onClick={() => { chnageChildren(item.name) }} text={item.name} type='' />
                                        //      </div>
                                        //    </div>
                                        //    :'not' 
                                        item.hasQuestion === false ? (
                                            <div className="p-5 min-w-[1098px] grid md:grid-cols lg:grid-cols">
                                                <div className="flex justify-between p-5 items-center min-h-[77px] rounded-md bg-[#ffff] box">
                                                    <Button className="text-xl font-bold text-[#11386b]" onClick={() => { chnageChildren(item.name) }} text={item.name} type='' />
                                                </div>
                                            </div>
                                        ) : navigate('/editquestion')
                                            // (
                                            // navigate('/editquestion')
                                            // )
                                    }
                                </>
                            );
                            // (

                                // );
                        })
                    ) : (
                        <h1 className="animate__animated animate__fadeInDown p-5 text-[#075985] text-3xl font-bold">
                            FILL THIS FIELD
                        </h1>
                    )
                }
            </div>
                 <div onClick={()=>{navigate('/addquestion')}} className="w-20 h-20 bg-[#F3F3F3] cursor-pointer flex items-center justify-center text-4xl font-bold text-[#075985] rounded-full absolute bottom-5 right-20"><span className="mb-2">+</span></div>
        </div>
  </> );
}



export default AddAuditQuestion