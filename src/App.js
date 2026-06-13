import React from 'react'
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
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
