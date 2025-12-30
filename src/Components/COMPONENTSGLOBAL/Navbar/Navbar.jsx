import React, { useState } from 'react'
import './Navbar.scss'
import Button from '../../UI/Button/Button'
import { FaGraduationCap } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const links = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Course Selector", link: "/course-selector" },
        { id: 3, name: "Courses", link: "/courses" },
        { id: 4, name: "FAQ", link: "/FAQ" },
        { id: 5, name: "Contact", link: "/contact" },
        { id: 6, name: "About US", link: "/about-us" },
    ]

    const [active, setActive] = useState(links[0].link)
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <div className="hexagon">
                        <span className='cap'><FaGraduationCap /></span>
                    </div>
                    <div className="text-logo">
                        <h3>EZY</h3>
                        <h6>SKILLS</h6>
                        <p>EMPOWER YOUR SKILLS</p>
                    </div>
                </div>
                <div className="links">
                    <ul>
                        {links.map((link) => {
                            return (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.link}
                                        className={({ isActive }) => isActive ? 'active' : ''}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="btn">
                    <Link to="/login">
                        <Button name="Login" className="login" />
                    </Link>
                    <Link to="/sigin" >
                        <Button name="Create Account" className="Create-Account" />
                    </Link>
                </div>
            </div>
        </div>
    )
}