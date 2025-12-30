import React from 'react'
import './TeamSection.scss'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import mahmoud from '../../../images/Mahmoudfathy.png'

export default function TeamSection() {
    const team = [
        {
            id: 1,
            name: 'Mahmoud Fathy',
            role: 'Founder & CEO',
            image: mahmoud
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Head of Content',
            image: 'https://i.pravatar.cc/300?img=5'
        },
        {
            id: 3,
            name: 'Michael Brown',
            role: 'Lead Instructor',
            image: 'https://i.pravatar.cc/300?img=3'
        },
        {
            id: 4,
            name: 'Sarah Wilson',
            role: 'Career Coach',
            image: 'https://i.pravatar.cc/300?img=9'
        }
    ]

    return (
        <section className="team-section">
            <div className="container">
                <div className="section-title">
                    <h4>Meet Our Team</h4>
                    <h2>The Minds Behind <span className="highlight">EZYSKILLS</span></h2>
                </div>
                <div className="team-grid">
                    {team.map(member => (
                        <div key={member.id} className="member-card">
                            <div className="image-wrapper">
                                <img src={member.image} alt={member.name} />
                                <div className="social-overlay">
                                    <FaLinkedin />
                                    <FaTwitter />
                                    <FaGithub />
                                </div>
                            </div>
                            <div className="info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}