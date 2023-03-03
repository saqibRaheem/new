import React, { useEffect, useState } from 'react'
import Card3Row from '../card/Card3Row'
import Card4 from '../card/Card4'
import Imge from '../../assets/23.png'
import Card3 from '../card/Card3'
import { useNavigate } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'
import { pdfGenerateApi } from '../../api/Api'


export interface Props {
  auditData: []
}

function AllAudit() {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")?.split('"')[1]
  const [allClause, setAllClause] = useState<Props[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/audit', {
      // method:'GET',
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
      }
    }).then((res) => {
      res.json().then((data) => {
        var names: any = data.auditData
        // console.log(data)
        setAllClause(names)
      });

    }).catch((err) => {
      console.log(err);

    })

  }, [])

  const createPDF = (data:any) =>{
        pdfGenerateApi(data) 
  }

  var audiT: any = allClause
  return (
    <>
      <div className='mt-8'>
        <Card4 />
      </div>
      <div className='m-11'>
        <h1 className='text-5xl font-bold text-[#11386b]' >Recent Audit Report</h1>
      </div>
      {audiT.length <= 0 ?
        // <h1 className='text-8xl'>Loading......</h1>
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
        audiT.slice(0).reverse().map((audit: any) => {
          // console.log(audit.user);
          // navigate('/report', { state: { data: audit } })
          return (
            <div>

              <Card3
                compName={audit.user ? audit.user.name : ""}
                per={audit.score}
                onClick={() => {createPDF(audit)}}
                onClick1={() => console.log('click-1')}
                onClick2={() => navigate('/updatequestionclauses')}
                btn1='contact company'
                btn2='show Report'
                btn3={audit.nonConformities + " non conformities"}
                classname1='rounded-md w-24 h-10 bg-[#CFFF7B] text-[#638D19]'
                img={Imge}
                record={audit.score} />
            </div>
          )
        })
      }

      {/* <Card3Row /> */}
    </>
  )
}

export default AllAudit