import React from 'react'
import Navbar from './Components/COMPONENTSGLOBAL/Navbar/Navbar'
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import Footer from './Components/COMPONENTSGLOBAL/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sigin" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}
