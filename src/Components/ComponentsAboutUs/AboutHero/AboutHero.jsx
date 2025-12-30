import React from 'react'
import './AboutHero.scss'

export default function AboutHero() {
    return (
        <section className="about-hero">
            <div className="container">
                <div className="content">
                    <h1>Empowering Minds, <span className="highlight">Transforming Futures</span></h1>
                    <p>
                        EZYSKILLS is dedicated to providing world-class digital education that is practical,
                        accessible, and aligned with the demands of the modern workforce. We don't just teach;
                        we inspire the next generation of innovators.
                    </p>
                    <div className="hero-btns">
                        <button className="btn-primary">Our Courses</button>
                        <button className="btn-secondary">Join Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}