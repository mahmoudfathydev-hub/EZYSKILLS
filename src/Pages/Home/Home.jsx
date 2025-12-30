import React from 'react'
import HeroSection from '../../Components/ComponentsHomePage/HeroSection/HeroSection'
import AdsSection from '../../Components/ComponentsHomePage/AdsSection/AdsSection'
import WhoCanJoin from '../../Components/ComponentsHomePage/WhoCanJoin/WhoCanJoin'
import HowItWorking from '../../Components/ComponentsHomePage/HowItWorking/HowItWorking'
import PopoularCourses from '../../Components/ComponentsHomePage/PopoularCourses/PopoularCourses'
import OurAchievements from '../../Components/ComponentsHomePage/OurAchievements/OurAchievements'
import Trainers from '../../Components/ComponentsHomePage/Trainers/Trainers'
import Certifications from '../../Components/ComponentsHomePage/Certifications/Certifications'
import Collaborations from '../../Components/ComponentsHomePage/Collaborations/Collaborations'

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AdsSection />
            <WhoCanJoin />
            <HowItWorking />
            <PopoularCourses />
            <OurAchievements />
            <Trainers />
            <Certifications />
            <Collaborations />
        </div>
    )
}