import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Category from './Pages/Category'
import {Route,Routes,} from "react-router-dom";


export default function Admin() {
  return (
    <div className="row m-o p-o">
      <div className="col-md-3  m-o p-o  bg-dark" style={{height : '100vh'}}> 
        <Sidebar/>
      </div>
      <div className="col-md-9">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="*" element={<Home/>} />
      </Routes>

      </div>
    </div>
  )
}
