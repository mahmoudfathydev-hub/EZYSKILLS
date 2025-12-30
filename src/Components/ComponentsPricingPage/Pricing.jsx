import React from 'react'
import './Pricing.scss'
import wave from '../../images/Wave.png'
import dotted from '../../images/Dotted.png'
import { FaGraduationCap, FaUserTie, FaUsers, FaCalendarAlt, FaCalendarCheck } from 'react-icons/fa'

export default function Pricing() {
    return (
        <div className='pricing-section'>
            <div className="pricing-header">
                <div className="container">
                    <h2>Our <span className="light-text">Pricing</span></h2>
                </div>
            </div>

            <div className="pricing-main-wrapper">
                <img src={wave} alt="wave" className="wave-bg" />
                <div className="circle5"></div>
                <div className="container">
                    <img src={dotted} alt="dotted" className="dotted-bg" />
                    <img src={dotted} alt="dotted" className="dotted-bg2" />

                    <div className="pricing-cards-container">
                        {}
                        <div className="pricing-card side-card">
                            <div className="card-top">
                                <div className="price-tag">2000$+</div>
                                <div className="tax-info">(Exclusive of GST & Taxes)</div>
                                <div className="program-label">College Program</div>
                            </div>
                            <div className="card-body">
                                <div className="info-item">
                                    <FaGraduationCap className="icon" />
                                    <p>For Colleges, Universities & Group Of Students</p>
                                </div>
                                <div className="info-item">
                                    <FaCalendarAlt className="icon" />
                                    <p>Common Timings</p>
                                </div>
                                <button className="pricing-btn">Get Started</button>
                            </div>
                        </div>

                        {}
                        <div className="pricing-card main-card">
                            <div className="card-top">
                                <div className="price-tag">2500$+</div>
                                <div className="tax-info">(Exclusive of GST & Taxes)</div>
                                <div className="program-label">Employee Program</div>
                            </div>
                            <div className="card-body">
                                <div className="info-item">
                                    <FaUsers className="icon" />
                                    <p>1-1 Individuals</p>
                                </div>
                                <div className="info-item">
                                    <FaCalendarCheck className="icon" />
                                    <p>Choose Timings</p>
                                </div>
                                <button className="pricing-btn">Get Started</button>
                            </div>
                        </div>

                        {}
                        <div className="pricing-card side-card">
                            <div className="card-top">
                                <div className="price-tag">4500$+</div>
                                <div className="tax-info">(Exclusive of GST & Taxes)</div>
                                <div className="program-label">Complete Transformation Program</div>
                            </div>
                            <div className="card-body">
                                <div className="info-item">
                                    <FaUsers className="icon" />
                                    <p>1-1 Individuals</p>
                                </div>
                                <div className="info-item">
                                    <FaCalendarAlt className="icon" />
                                    <p>flexable Timings</p>
                                </div>
                                <button className="pricing-btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}