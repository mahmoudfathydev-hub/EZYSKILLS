import React, { useState } from 'react'
import './Contact.scss'
import wave from '../../images/Wave.png'
import dotted from '../../images/Dotted.png'
import { FaChevronDown } from 'react-icons/fa'

export default function Contact() {
    const [issue, setIssue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = ["Course Structure", "Payment Failure", "Other"];

    const handleOptionClick = (val) => {
        setIssue(val);
        setIsDropdownOpen(false);
    }

    return (
        <div className='contact-section'>
            <div className="contact-header">
                <div className="container">
                    <h2>Contact Our Team</h2>
                </div>
            </div>

            <div className="contact-main-wrapper">
                <img src={wave} alt="wave" className="wave-bg" />
                <div className="circle5"></div>
                <div className="container">
                    <img src={dotted} alt="dotted" className="dotted-bg" />
                    <img src={dotted} alt="dotted" className="dotted-bg2" />

                    <div className="contact-form-card">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="input-group">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="input-group">
                                    <label>Contact Email</label>
                                    <input type="email" placeholder="Enter your email" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="Enter phone number" required />
                                </div>
                                <div className="input-group custom-select-wrapper">
                                    <label>Issue Related to</label>
                                    <div className={`custom-select ${isDropdownOpen ? 'open' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                        <div className="select-trigger">
                                            <span>{issue || "Select an option"}</span>
                                            <FaChevronDown />
                                        </div>
                                        <div className="custom-options">
                                            {options.map(opt => (
                                                <div
                                                    key={opt}
                                                    className={`option ${issue === opt ? 'selected' : ''}`}
                                                    onClick={() => handleOptionClick(opt)}
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row single">
                                <div className="input-group full-width">
                                    <label>Message</label>
                                    <textarea placeholder="Write your message here..." rows="6" required></textarea>
                                </div>
                            </div>

                            <p className="privacy-text">
                                By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.
                            </p>

                            <div className="form-footer">
                                <button type="submit" className="send-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}