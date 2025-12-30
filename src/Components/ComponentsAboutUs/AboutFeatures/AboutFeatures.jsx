import React from 'react'
import './AboutFeatures.scss'
import { FaLaptopCode, FaClock, FaUsers, FaAward } from 'react-icons/fa'

export default function AboutFeatures() {
    const features = [
        {
            id: 1,
            icon: <FaLaptopCode />,
            title: 'Project-Based Learning',
            desc: 'Gain hands-on experience by working on real-world projects that simulate industry environments.'
        },
        {
            id: 2,
            icon: <FaClock />,
            title: 'Flexible Schedules',
            desc: 'Learn at your own pace with our flexible timing options designed to fit your busy life.'
        },
        {
            id: 3,
            icon: <FaUsers />,
            title: '1-1 Mentorship',
            desc: 'Get personalized guidance and support from experienced industry professionals.'
        },
        {
            id: 4,
            icon: <FaAward />,
            title: 'Global Certifications',
            desc: 'Earn recognized certificates that validate your skills and boost your employability globally.'
        }
    ]

    return (
        <section className="about-features">
            <div className="container">
                <div className="section-title">
                    <h4>Why Choose Us</h4>
                    <h2>The EZYSKILLS <span className="highlight">Advantage</span></h2>
                </div>
                <div className="features-grid">
                    {features.map(f => (
                        <div key={f.id} className="feature-card">
                            <div className="icon-box">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}