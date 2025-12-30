import React from 'react'
import './HowItWorking.scss'
import Group2224 from "../../../images/Group2224.png"
import dotted from "../../../images/Dotted.png"

export default function HowItWorking() {
    return (
        <div className='Working'>
            <div className="content">
                <div className="circle"></div>
                <div className="rectangle">
                    <div className="text">
                        <h2>How it works?</h2>
                    </div>
                    <img src={Group2224} alt="" />
                    <div className="dotted">
                        <img src={dotted} alt="dotted" />
                    </div>
                </div>
            </div>
        </div>
    )
}