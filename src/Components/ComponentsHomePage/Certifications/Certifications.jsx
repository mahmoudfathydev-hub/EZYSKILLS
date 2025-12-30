import React from 'react'
import './Certifications.scss'
import cert1 from "../../../images/cert1.png"
import cert2 from "../../../images/cert2.png"
import cert3 from "../../../images/cert3.png"
import cert4 from "../../../images/cert4.png"


export default function Certifications() {
    return (
        <div className='certifications'>
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <div className="bg-circle3"></div>
            <div className="container">
                <div className="heading">
                    <p>Our <span>Certifications</span></p>
                </div>
                <div className="content">
                <img src={cert1} alt="certifications" />
                <img src={cert2} alt="certifications" />
                <img src={cert3} alt="certifications" />
                <img src={cert4} alt="certifications" />
                </div>
            </div>
        </div>
    )
}
