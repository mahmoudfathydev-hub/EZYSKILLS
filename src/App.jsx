import React from 'react'
import Navbar from './Components/COMPONENTSGLOBAL/Navbar/Navbar'
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import Footer from './Components/COMPONENTSGLOBAL/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import CourseSelector from './Components/CourseSelector/CourseSelector'
import Chat from './Components/ComponentsChat/Chat'
import Courses from './Pages/Courses/Courses'
import ScrollToTop from './Components/UI/ScrollToTop'
import BackToTopButton from './Components/UI/BackToTopButton/BackToTopButton'
import Course from './Pages/Course/Course'

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sigin" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course-selector" element={<CourseSelector />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-info/:id" element={<Course />} />
      </Routes>
      <BackToTopButton />
      <Footer />
    </div>
  )
}

