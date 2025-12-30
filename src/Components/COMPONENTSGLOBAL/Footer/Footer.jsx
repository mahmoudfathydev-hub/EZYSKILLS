import React from 'react'
import { FaGraduationCap, FaChevronRight, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import './Footer.scss'
export default function Footer() {
    const quiclLinks = [
        { id: 1, name: "Home" },
        { id: 2, name: "Our Story" },
        { id: 3, name: "Best Courses" },
        { id: 4, name: "Your FAQ’s" },
        { id: 5, name: "Cancellation & Refunds" },
        { id: 6, name: "Contact US" }
    ]
    return (
        <div className='footer'>
            <div className="container">
                <div className="top-footer">
                    <div className="col1">
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
                        <div className="content">
                            <p>
                                “This is a fictional project created for portfolio purposes only. No real affiliation with the mentioned companies.”
                            </p>
                        </div>
                        <div className="middle">
                            <h4>Subscribe Our Newsletter</h4>
                            <div className="content">
                                <input type="email" placeholder='Your Email address' />
                                <span><FaChevronRight /></span>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <p>Quick <span>Links</span></p>
                        <ul>
                            {
                                quiclLinks.map((item) => {
                                    return (
                                        <li key={item.id}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col3">
                        <p>Contact <span>Us</span></p>
                        <div className="content">
                            <span><RiMapPin2Fill /></span>
                            <p>Nile Business Center, <br />
                                5th Floor, Office 512 & 513,<br />
                                Tahrir Square, Downtown,<br />
                                Cairo, Egypt<br />
                                11511
                            </p>
                        </div>
                        <div className="content">
                            <span><MdEmail /></span>
                            <p>info@ezyskills.in</p>
                        </div>
                        <div className="content-number">
                            <span><FaPhoneAlt /></span>
                            <div className="number">
                                <p>+20 8428448903</p>
                                <p>+20 9475484959</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="col1">
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col2">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    )
}


