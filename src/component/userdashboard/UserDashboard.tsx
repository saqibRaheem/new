import React, { useEffect, useState } from 'react'
import Card3Row from '../card/Card3Row'
import Layout from '../layout/Layout'
import Img from '../../assets/Laptop 1.png'
import Imge from '../../assets/second.png'
import Button from '../button/Button'
import { useGlobalContext } from '../../GlobalContex'
import { useNavigate } from 'react-router-dom'
import Card3 from '../card/Card3'
import {BallTriangle} from 'react-loader-spinner';
import CreateAccount from '../loginpage/CreateAccount'
import { pdfGenerateApi } from '../../api/Api'



function UserDashboard() {

  const [audits, setAudits] = useState([])

  const id: any = localStorage.getItem('id')?.split('"')[1]

  const token = localStorage.getItem("token")?.split('"')[1]

  useEffect(() => {
    fetch('http://localhost:5000/audit/user/' + id, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
      }
    }).then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          // console.log(data.auditData);
          setAudits(data.auditData);
        })
      }
    }).catch((err) => {
      console.log(err);

    })
  }, [])


  // console.log(audits);



  const navigate = useNavigate()
  const { changeUserId, userId, clauseData } = useGlobalContext()


  const name = localStorage.getItem('name')?.split('"')[1]
  // console.log("Username: " + name);
  // console.log(userId);

  const startAudit = () => {
    changeUserId(id);
    navigate('/audotordetails')
  }

  const createPDF = (data:any) =>{
   pdfGenerateApi(data)
  }

  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-1 sm:px-0'>
      <Layout>
        <div>
          <div className='p-8 nav max-w-[1240px] m-auto'>
            <div className="flex items-center  justify-center max-md:flex-col max-sm:flex-col" >
              <div className='flex flex-col justify-between gap-5 '>
                <h1 className='text-5xl font-bold  text-[#11386b]'> Welcome {name ? name : "user"} to the Audit Master dashboard </h1>
                <p className='text-lg font-poppin text-[#075985]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <Button text='start the audit' type="" className="bg-[#84CC06] text-white w-36 h-12" onClick={() => { startAudit() }} />
              </div>
              <div className='' >
                <img src={Img} alt="" className='' />
              </div>
            </div>
          </div>
        </div>
        {audits.length <= 0 
        ? 
        <div className='flex justify-center items-center'>
        <BallTriangle
        height={200}
        width={300}
        radius={5}
        color="#11386b"
        ariaLabel="ball-triangle-loading"
        // wrapperClass={{}}
        // wrapperStyle=""
        visible={true}
        />
        </div>
         :
         audits.slice(0).reverse().map((audit: any) => {
          // console.log(audit);
          return (
            <div className='cursor-pointer' onClick={() => {
              clauseData(audit.clauses);
              // navigate('/updatequestionclauses')
              // navigate('/report', {state:{data:audit}})
            }}>
              <Card3 
              compName={audit.user.name}
               per={audit.score}
                onClick={() => { createPDF(audit)} }
                // onClick1={() => console.log('click-1')}
                onClick2={() => navigate('/updatequestionclauses')}
                 btn1='contact company'
                  btn2='show Report' 
                 btn3={audit.nonConformities + " non conformities"}
                  classname1='rounded-md w-24 h-10 bg-[#CFFF7B] text-[#638D19]' 
                  img={Imge} 
                  record={audit.score} />
             </div>
          )
        })}

      </Layout>

    </div>
  )
}

export default UserDashboard