import React from 'react'
import './OurStats.scss'
import { FaUserGraduate, FaCertificate, FaGlobe, FaProjectDiagram } from 'react-icons/fa'

export default function OurStats() {
    const stats = [
        { id: 1, icon: <FaUserGraduate />, value: '10K+', label: 'Graduated Students' },
        { id: 2, icon: <FaCertificate />, value: '50+', label: 'Expert Courses' },
        { id: 3, icon: <FaGlobe />, value: '25+', label: 'Countries Reached' },
        { id: 4, icon: <FaProjectDiagram />, value: '500+', label: 'Successful Projects' },
    ]

    return (
        <section className="our-stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map(stat => (
                        <div key={stat.id} className="stat-card">
                            <div className="icon-wrapper">{stat.icon}</div>
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}