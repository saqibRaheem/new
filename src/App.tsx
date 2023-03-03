import React, { useEffect } from 'react';
import './App.css';
import Login from './component/loginpage/Login';
import CreateAccount from './component/loginpage/CreateAccount';
import { Route, Routes, useNavigate } from 'react-router-dom'
import CompanyDetails from './component/companydeatils/CompanyDetails';
import AudotorDetails from './component/audotordetails/AudotorDetails';
import DetailsRout from './component/Routes/DetailsRout';
import UserDashboard from './component/userdashboard/UserDashboard';
// import QuestioonClauses from './component/questionclauses/QuestionClauses';
import AllAudit from './component/pages/AllAudit';
import Dashboard from './component/pages/Dashboard';
import AddQuestion from './component/auditquestionclauses/AddQuestion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditQuestion from './component/editquestion/AdminEditQuestion';
import Layout from './component/layout/Layout';
import AdminAddQuestion from './component/editquestion/AdminAddQuestion';
import AdminEditQuestion from './component/editquestion/AdminEditQuestion';
import SelectClauses from './component/questionclauses/SelectClauses';
import QuestioonClauses from './component/questionclauses/QuestionClauses';
import QuestionPageLayot from './component/auditquestionclauses/QuestionPageLayot';
import AddAuditQuestion from './component/editquestion/AddAuditQuestion';
import Report from './component/Report';
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'
import UpdateQuestionClauses from './component/auditquestionclauses/UpdateQuestionClauses';
import UpdateQuestionPage from './component/auditquestionclauses/UpdateQuestionPage';
// import QuestionClauses from './component/questionclauses/QuestionClauses';

function App() {

  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token') === 'undefined' || !localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  // const [copy, setCopy] = useState<string>('updated')
  return (<>
    <ToastContainer
      position="bottom-left"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <div className='grid md:grid-cols-1 lg:grid-cols-1 sm:px-0'>
      {/* <MyGlobalContext.Provider value= {{ copy, setCopy }}> */}
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/companydetails' element={<CompanyDetails />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/audotordetails' element={<AudotorDetails />} />
        <Route path='/questionclauses' element={<QuestioonClauses />} />
        <Route path='/addquestionclauses' element={<AddQuestion />} />
        <Route path='/updatequestionclauses' element={<UpdateQuestionClauses/>} />
        <Route path='/updatequestionpage' element={<UpdateQuestionPage/>} />
        <Route path='/questionpage' element={<QuestionPageLayot />} />
        <Route path='/report' element={ <Report /> 
        //     <div className="mx-auto w-[1240px] my-8">
        //       <PDFViewer
        //     className="m-auto bg-transparent"
        //     width={500}
        //     height={700}
        //     showToolbar={false}
        //     style={{ backgroundColor: 'white' }}
        //   >
        //     <Report />
        //   </PDFViewer>
        // </div>
      } />
        <Route path='/' element={<DetailsRout />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='all-audit' element={<AllAudit />} />
          <Route path='addaudit' element={<AddAuditQuestion />} />
          <Route path='editquestion' element={<AdminEditQuestion />} />
          <Route path='addquestion' element={<AdminAddQuestion />} />
        </Route>
      </Routes>


      {/* </MyGlobalContext.Provider> */}
      {/* <Layout>
        <div className="mx-auto w-[1240px] my-8">
          <PDFViewer
            className="m-auto bg-transparent"
            width={500}
            height={700}
            showToolbar={false}
            style={{ backgroundColor: 'white' }}
          >
            <Report />
          </PDFViewer>
        </div>

      </Layout > */}

    </div>
  </>
  );
}

export default App;

// what is contextApi