import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Login from '../loginpage/Login'
import AllAudit from '../pages/AllAudit'
import Dashboard from '../pages/Dashboard'
import UpcomingAudits from '../pages/UpcomingAudits'

function AllRouts() {
  return (
    <>
    {/* <Dashboard /> */}
    <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/all-audit' element={<AllAudit />}/>
    </Routes>
    </>
  )
}

export default AllRouts