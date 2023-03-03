import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../GlobalContex';
import axios from 'axios';
import fileDownload from 'js-file-download';

const url = 'http://localhost:5000'
// const url = 'https://api.auditmaster.koretechxhosting.com'

const token = localStorage.getItem("token")?.split('"')[1]
const id = localStorage.getItem('id')?.split('"')[1]
const stand = localStorage.getItem('standard')


const snotify = (data: any) => toast.success(data);
const enotify = (err: any) => toast.error(err);


export const LoginApi = (Email_address: string, password: string) => {
  // const navigate = useNavigate()
  // const {changeUser} =useGlobalContext()
  try {

    fetch(`${url}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: Email_address,
        password: password,
        // userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.status == 200) {
          res.json().then((data) => {
            snotify(data.msg)
            fetch(`${url}/user/` + data.id,
              {
                headers: {
                  "Content-type": "application/json",
                  "Authorization": "Bearer " + data.token,
                }
              }
            )

              .then((res) => {
                res.json().then((data) => {
                });

              })
            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('id', JSON.stringify(data.id))
            if (data.company) {
              localStorage.setItem('name', JSON.stringify(data.name))
              // navigate("/userdashboard")
              window.location.href = "/userdashboard"

            } else {
              // navigate('/companydetails')
              window.location.href = "/companydetails"

            }
          })
        } else {
          res.json().then((data) => {
            enotify(data.msg)

            console.log(data.error);

          });

        }


      })
  }
  catch (e) {

  }
}

export const RegisterApi = (email: string, password: string, conformpassword: string) => {
 
  fetch(`${url}/user/signup`, {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      conformpassword: conformpassword
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (res.status === 200) {
      res.json().then((data) => {
        snotify(data.msg)
        window.location.href = "/login"
      })
    } else {
      res.json().then((data) => { enotify(data.msg) })

    }
  })



}

export const CompanyDetailsApi = (
  Company_Name: string,
  Company_Address: string,
  Company_Phone: string,
  Company_Email: string,
  state: string,
  city: string,
  Designation: string,
  person_name: string,

) => {

  fetch(`${url}/company/companydetails`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: id,
      company_name: Company_Name,
      company_address: Company_Address,
      company_phone: Company_Phone,
      company_email: Company_Email,
      state: state,
      city: city,
      designation: Designation,
      person_name: person_name
    }),
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
    .then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
         localStorage.setItem('name', JSON.stringify(data.newCompany.person_name))
          snotify(data.msg)
          window.location.href = '/userdashboard'
        })
      } else {
        res.json().then((data) => {
          enotify(data.error)
          if (data.error) {
            localStorage.removeItem("token")
          }
        });

      }
    }).catch((err) => {
      console.log("====>  error", err);
    })
}

export const AuditorDetailsApi = (
  Auditor: string,
  siteName: string,
  Competencies: string,
  clauses: string,

) => {

  fetch(`${url}/auditor/auditorDetails`, {
    method: 'POST',
    body: JSON.stringify({
      name: Auditor,
      site: siteName,
      competencies: Competencies,
      auditStandards: clauses,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      "Authorization": "Bearer " + token
    },
  })
    .then((res) => {

      if (res.status == 200) {
        localStorage.setItem('standard', clauses)
        res.json().then((data) => {
          snotify(data.msg)
        })
        window.location.href = "/questionclauses"

      } else {
        res.json().then((data) => {
          enotify(data.error)
          if (data.error) {
            localStorage.removeItem("token")
          }
        });

      }
    }).catch((err) => {
      console.log(err);

    })

}

export const SelectClausesAnswer = (clause: object) => {
  // const { auditId, userAuditId } = useGlobalContext()
  var cla = clause;

  fetch(`${url}/audit/auditDetails`, {
    method: 'POST',
    body: JSON.stringify({
      standard: stand,
      score: 0,
      nonConformities: 0,
      user: id,
      clauses: cla
    }),
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json",
    }
  }).then((res) => {
    if (res.status === 200) {
      res.json().then((data:any) => {
        snotify(data.msg)
        localStorage.setItem('auditId', JSON.stringify(data.newAudit._id))
        // userAuditId(data.newAudit._id)
        
      })
    } else {
      res.json().then((data) => { enotify(data.msg) })
      
    }
  })
  // return data.newAudit._id
  
}

export const UpdateClausesAnswer = (clause: object) => {
   var audId =  localStorage.getItem('auditId')?.split('"')[1]
  var cal = clause;
  fetch(`${url}/audit/${audId}`, {
    method: 'PUT',
    body: JSON.stringify({
      score: 45,
      nonConformities: 0,
      clauses: cal
    }),
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json",
    }

  }).then((response) => response.json())
    .then((result) => {
      snotify(result.msg)
      console.log('Success:', result.msg);
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
}

export const pdfGenerateApi = (data:any) =>{
  var cal = data.clauses;
  axios.post(`http://localhost:5000/generate-pdf`, {
     standard :data.standard ,
     score : data.score,
     nonConformities :  data.nonConformities,
      clauses: cal
  },{responseType: 'blob'})
  .then((res)=> {
    console.log(res);
    // fileDownload(res.data ,'download.pdf' )

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    
  })    
   .catch((err)=>{
        console.log(err);
    })
  

}
