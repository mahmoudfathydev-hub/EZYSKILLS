import React from 'react'
import AboutHero from '../../Components/ComponentsAboutUs/AboutHero/AboutHero'
import OurStats from '../../Components/ComponentsAboutUs/OurStats/OurStats'
import MissionVision from '../../Components/ComponentsAboutUs/MissionVision/MissionVision'
import AboutFeatures from '../../Components/ComponentsAboutUs/AboutFeatures/AboutFeatures'
import TeamSection from '../../Components/ComponentsAboutUs/TeamSection/TeamSection'
import './AboutUs.scss'

export default function AboutUs() {
    return (
        <div className='about-us-page'>
            <AboutHero />
            <OurStats />
            <MissionVision />
            <AboutFeatures />
            <TeamSection />
        </div>
    )
}