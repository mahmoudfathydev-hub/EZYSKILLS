import React from 'react'
import { FaSearch } from "react-icons/fa";
import './HeroSection.scss'
import dotted from "../../../images/Dotted.png"
import girl from "../../../images/pretty-woman-with-modern-laptop-sitting-floor-with-win-gesture-grey-wall__1_-removebg-preview 1.png"
import content from "../../../images/Group 2005.png";
export default function HeroSection() {
    return (
        <div className='hero-section'>
            <div className="container">
                <div className="text-content">
                    <h1>Skill your way <br />
                        up to success <br />
                        with us
                    </h1>
                    <p>Get the skills you need for <br />
                        the future of work.
                    </p>
                    <div className="input-search">
                        <input type="text" placeholder="Search the course you want">
                        </input>
                        <span><FaSearch /></span>
                    </div>
                    <div className="image-content">
                        <img src={dotted} alt="" />
                    </div>
                </div>
                <div className="images-container">
                    <div className="big-circle">
                        <div className="small-circle">
                            <div className="img-girl">
                                <img src={girl} alt="girl" />
                                <div className="text">
                                    <img src={content} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

