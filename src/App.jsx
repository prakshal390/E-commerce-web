import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
// import AboutCom from './Components/AboutCom'
import About from './Pages/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Collection from './Components/Collection'
import Product from './Pages/Product'
import CartPage from './Pages/CartPage'
import CheckoutPage from './Pages/CheckoutPage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/collection' element = {<Collection/>} />
        <Route path='/products/:pid' element={<Product/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Routes>
    </>
  )
}

export default App
