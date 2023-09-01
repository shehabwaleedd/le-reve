import React from 'react'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'
import AboutBoss from './aboutComponents/aboutBoss/AboutBoss'
import AboutBossLower from './aboutComponents/aboutBossLower/AboutBossLower'

const About = () => {
    return (
        <section className='about'>
            <div className="about__container">
                <AboutUs />
                <LowerAboutUs />
                <AboutBoss />
                <AboutBossLower />
            </div>
        </section>
    )
}

export default About