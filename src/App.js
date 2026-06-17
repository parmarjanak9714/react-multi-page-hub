import React, { useState } from 'react'
import NavBar from './Component/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contac from './Pages/Contac'
import Profile from './Pages/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Company from './Pages/Company'
import History from './Pages/History'
import CompanyProfile from './Pages/Company_Profile'
import Faq from './Pages/Faq'
import Users from './Pages/Users'
import Weather from './Pages/Weather'
import Products from './Pages/Products'
import CartPage from './Pages/CartPage'
import LoadMore from './Pages/LoadMore'
import LoadMoreUsers from './Pages/LodeMoreUsers'
import BlogGrid from './Pages/BlogGrid'
const App = () => {
  
  return (
    <div>
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/about' element={<About/>}>

        <Route path='company' element={<Company/>}/>
       <Route path='history' element={<History/>}/>

      </Route>

      <Route path='/company_profile' element={<CompanyProfile/>}/>
      
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact' element={<Contac/>}/>

      <Route path='/faq' element={<Faq/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/loadeMore' element={<LoadMore/>}/>
      <Route path='/loadMoreUsers' element={<LoadMoreUsers/>}/>
      <Route path='/BlogGrid' element={<BlogGrid/>}/>    
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
