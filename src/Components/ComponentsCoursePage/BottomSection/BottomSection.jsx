import React, { useState } from 'react';
import './BottomSection.scss';
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import computer from '../../../images/computer.png'
import pin from '../../../images/pin.png'
import cloud from '../../../images/cloud.png'

export default function BottomSection({ course }) {
    const [activeCardId, setActiveCardId] = useState(null);

    const toggleCard = (id) => {
        setActiveCardId(activeCardId === id ? null : id);
    };

    if (!course) return null;

    return (
        <div className='course-projects-area'>
            <div className="circle1"></div>
            <div className='container'>
                <div className='projects-header'>
                    <h2>{course.name} Projects</h2>
                    <div className='header-underline'></div>
                </div>

                <div className='projects-list-layout'>
                    {course.projects?.map((project) => (
                        <div
                            key={project.id}
                            className={`project-display-card ${activeCardId === project.id ? 'card-expanded' : ''}`}
                            onClick={() => toggleCard(project.id)}
                        >
                            <div className='project-icon-box'>
                                <FaLaptopCode />
                            </div>

                            <div className='project-details-box'>
                                {activeCardId === project.id && (
                                    <div className='expanded-content'>
                                        <h4>{project.taxtProjects}</h4>
                                        <p>{project.descPro}</p>
                                    </div>
                                )}
                            </div>

                            <div className='project-card-footer'>
                                <span className='footer-text'>{activeCardId === project.id ? 'Show Less' : 'View Details'}</span>
                                <FaArrowRight
                                    className='footer-arrow'
                                    style={{ transform: activeCardId === project.id ? 'rotate(90deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="blue">
                    <div className="extra-content">
                        <div className="text-bottom-section">
                            <h5>Wanna check more <br /> about the course?</h5>
                        </div>
                        <div className="btn-section-bottom">
                            <div className="top-bottom-btn">
                                <button>
                                    <img src={computer} alt="" />
                                    <p>Demo</p>
                                </button>
                                <button>
                                    <img src={pin} alt="" />
                                    <p>Enroll Now</p>
                                </button>
                            </div>
                            <div className="bottom-bottom-btn">
                                <button className='cloud'>
                                    <img src={cloud} alt="" />
                                    <p>Download Curriculam</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
