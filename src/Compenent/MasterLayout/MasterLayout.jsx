import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
      <Navbar/>
      <div className="container">
         <div className="row">
         <div className="col-md-3 bg-danger">
          
         </div>
         <div className="col-md-9"><Outlet></Outlet></div>
         </div>
      </div>
      <Footer/>
    </>
  )
}
