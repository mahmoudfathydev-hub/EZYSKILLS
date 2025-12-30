import React from 'react'
import Navbar from './Components/COMPONENTSGLOBAL/Navbar/Navbar'
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import Footer from './Components/COMPONENTSGLOBAL/Footer/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import CourseSelector from './Components/CourseSelector/CourseSelector'
import Chat from './Components/ComponentsChat/Chat'
import Courses from './Pages/Courses/Courses'
import ScrollToTop from './Components/UI/ScrollToTop'
import BackToTopButton from './Components/UI/BackToTopButton/BackToTopButton'
import Course from './Pages/Course/Course'
import FAQ from './Pages/FAQ/FAQ'
import ContactUs from './Pages/ContactUs/ContactUs'
import Pricing from './Pages/Pricing/Pricing'
import AboutUs from './Pages/AboutUs/AboutUs'

export default function App() {
  const location = useLocation();
  const isFAQPage = ['/FAQ', '/contact', '/about-us'].includes(location.pathname);
  const isPricingPage = location.pathname === '/pricing';

  return (
    <div>
      <ScrollToTop />
      <Navbar isFAQ={isFAQPage} isPricing={isPricingPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sigin" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course-selector" element={<CourseSelector />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-info/:id" element={<Course />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <BackToTopButton />
      <Footer />
    </div>
  )
}