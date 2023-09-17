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


function App() {

  return (
    <>
    <TopNavbar/>
    <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/menu' element={<Menu/>}/>
      <Route exact path='/locations' element={<Locations/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
