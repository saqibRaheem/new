import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AudotorDetails from '../audotordetails/AudotorDetails'
import CompanyDetails from '../companydeatils/CompanyDetails'
import Layout from '../layout/Layout'
import AllRouts from './AllRouts'

function DetailsRout() {
  return (
    <div>
       <Layout>
       <Outlet/>
       </Layout>
    </div>
  )
}

export default DetailsRout