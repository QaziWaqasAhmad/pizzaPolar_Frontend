import { useState } from 'react'
import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Home from './containers/Home'
import Orders from './containers/Orders'
import About from './containers/About'
import Contact from './containers/Contact'
import Navbar from './components/Navbar'
import TopNavbar from './components/TopNavbar'
import Menu from './containers/Menu'
import Locations from './containers/Locations'
import Cart from './containers/Cart'
import Footer from './components/Footer'
import PrivacyPolicy from './containers/PrivacyPolicy'
import TermCondition from './containers/TermCondition'
import Login from './containers/Auth/Login'


function App() {

  return (
    <>
    <TopNavbar/>
    <Navbar/>
     <Routes>
      {/* <Route exact path='/login' element={<Login/>}/> */}
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/menu' element={<Menu/>}/>
      <Route exact path='/locations' element={<Locations/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route exact path='/term-condition' element={<TermCondition/>}/>
     </Routes>
     <Footer/>
    
    </>
  )
}

export default App
