import React from 'react'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'
import AboutBoss from './aboutComponents/aboutBoss/AboutBoss'
import AboutBossLower from './aboutComponents/aboutBossLower/AboutBossLower'
import AboutBeach from './aboutComponents/aboutBeach/AboutBeach'

const About = () => {
    return (
        <section className='about'>
            <div className="about__container">
                <AboutUs />
                <LowerAboutUs />
                <AboutBoss />
                <AboutBossLower />
                <AboutBeach />
            </div>
        </section>
    )
}

export default About