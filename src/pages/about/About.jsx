import React, { useEffect } from 'react'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'
import AboutBoss from './aboutComponents/aboutBoss/AboutBoss'
import AboutBossLower from './aboutComponents/aboutBossLower/AboutBossLower'
import AboutBeach from './aboutComponents/aboutBeach/AboutBeach'
import AboutBeachLower from './aboutComponents/aboutBeachLower/AboutBeachLower'
import AboutCrew from '../../components/aboutCrew/AboutCrew'
import AboutCrewLower from '../../components/aboutCrewLower/AboutCrewLower'
import Marquee from '../../components/marquee/Marquee'

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section className='about'>
            <div className="about__container">
                <AboutUs />
                <LowerAboutUs />
                <Marquee />
                <AboutBoss />
                <AboutBossLower />
                <AboutCrew />
                <AboutCrewLower />
                <AboutBeach />
                <AboutBeachLower />
            </div>
        </section>
    )
}

export default About