import React, { useState } from 'react'
import './Faq.scss'
import { faq } from '../../data/Faq'
import { FaPlus, FaMinus } from "react-icons/fa"
import wave from '../../images/Wave.png'
import dotted from '../../images/Dotted.png'

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='faq-section'>
            <div className="faq-header">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>

            <div className="faq-main-wrapper">
                <img src={wave} alt="wave" className="wave-bg" />
                <div className="circle5"></div>
                <div className="container">
                    <img src={dotted} alt="dotted" className="dotted-bg" />
                    <img src={dotted} alt="dotted" className="dotted-bg2" />

                    <div className="faq-list">
                        {faq.map((item, index) => (
                            <div
                                key={item.id}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div className="faq-question" onClick={() => toggleAccordion(index)}>
                                    <span className="icon">
                                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                    </span>
                                    <h3>{item.question || item.qiestion}</h3>
                                </div>
                                <div
                                    className="faq-answer"
                                    style={{
                                        maxHeight: activeIndex === index ? '500px' : '0',
                                        opacity: activeIndex === index ? '1' : '0'
                                    }}
                                >
                                    <div className="answer-content">
                                        <div className="vertical-line"></div>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}