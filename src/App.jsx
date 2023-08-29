import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Signup from './pages/Signup'
import Page404 from './pages/Page404'
import NavigationBar from './components/NavigationBar'
import { useState } from 'react'
import FooterSection from './components/FooterSection'
import CategoryPage from './pages/CategoryPage'
import ProductsPage from './pages/ProductsPage'
import './App.css'
import Login from './pages/Login'
import Admin from './Admin'
import Guest from './Guest'
import User from './User'

 
const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']


export default function App() {
const [role, setRole] = useState('admin')
const CurrentUser = getUserRole(role)


  const [user,setUser] = useState(true)
  return(
  <>
  <NavigationBar/>
<CurrentUser/>
        

 

        {
          user

           ?
          (
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productID" element={<ProductsPage />} />
            <Route path="/products/category/:categoryName" element={<CategoryPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          )
          :
          (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
          </Routes>
          )
        }
      

         <FooterSection/>



          

      
  
   </>
  )
}