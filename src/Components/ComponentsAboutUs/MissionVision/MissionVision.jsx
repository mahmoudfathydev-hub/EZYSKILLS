import React from 'react'
import './MissionVision.scss'
import { FaBullseye, FaEye } from 'react-icons/fa'

export default function MissionVision() {
    return (
        <section className="mission-vision-section">
            <div className="container">
                <div className="grid">
                    <div className="box mission">
                        <div className="icon"><FaBullseye /></div>
                        <h2>Our Mission</h2>
                        <p>
                            To empower individuals with practical, industry-relevant skills that bridge
                            the gap between education and employment, enabling them to build meaningful
                            and successful careers in the digital age.
                        </p>
                    </div>
                    <div className="box vision">
                        <div className="icon"><FaEye /></div>
                        <h2>Our Vision</h2>
                        <p>
                            To be the leading global platform for digital transformation through education,
                            where every learner has the tools and support to turn their potential into
                            extraordinary achievements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}