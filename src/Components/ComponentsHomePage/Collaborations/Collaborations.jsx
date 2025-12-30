import React from 'react'
import './Collaborations.scss'
import google from "../../../images/Vector.png"
import apple from "../../../images/apple.png"
import amazon from "../../../images/amazon.png"
import bmw from "../../../images/bmw.png"
import dottod from "../../../images/Dotted.png"

export default function Collaborations() {
    return (
        <div className='collabrations'>
            <img src={dottod} alt="" className='dotted' />
            <div className="container">
                <div className="heading">
                    <p>Our <span>Collaborations</span></p>
                </div>
                <div className="logos">
                    <img src={google} alt="google" />
                    <img src={apple} alt="apple" />
                    <img src={amazon} alt="amazon" />
                    <img src={bmw} alt="BMW" />
                </div>
            </div>
        </div>
    )
}