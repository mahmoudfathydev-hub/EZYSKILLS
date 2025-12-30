import React, { useState } from 'react';
import './MiddleSection.scss';
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import plus from '../../../images/plus.png'
import arrow from '../../../images/arrow.png'
import dotted from '../../../images/Dotted.png'
import arrowdown1 from '../../../images/arrowdown1.png'

export default function MiddleSection({ course }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!course) return null;

    return (
        <div className="bg">
            <img className="plus" src={plus} alt="" />
            <img className="dotted" src={dotted} alt="" />
            <img className='arrow up' src={arrow} alt="" />
            <img className='arrow down' src={arrowdown1} alt="" />
            <div className='middle-section container'>
                <div className='left-column'>
                    <div className='about-box'>
                        <h3>About The Course</h3>
                        <p>{course.about}</p>
                    </div>

                    <div className='objectives-box'>
                        <h3>Objectives</h3>
                        <ul className='objectives-list'>
                            {course.objectives?.map((obj) => (
                                <li key={obj.id}>
                                    <FaCheckCircle className='check-icon' />
                                    <span>{obj.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='right-column'>
                    <div className='course-content-accordion'>
                        <h3>Course Content</h3>
                        {course.contnent?.map((item, index) => { 
                            const isOpen = openIndex === index;
                            return (
                                <div key={item.id} className={`accordion-item ${isOpen ? 'active' : ''}`}>
                                    <div className='accordion-header' onClick={() => toggleAccordion(index)}>
                                        <div className='header-left'>
                                            <span className='item-num'>{String(item.num).padStart(2, '0')}</span>
                                            <span className='item-title'>{item.textContent}</span>
                                        </div>
                                        <div className='header-right'>
                                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div className='accordion-body'>
                                            <ul>
                                                {item.requirements?.map((req) => (
                                                    <li key={req.id}>{req.textReq}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}