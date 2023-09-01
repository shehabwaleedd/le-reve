import React from 'react'
import Home from './Home'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'

const SiteHome = () => {
    return (
        <main className='main'>
            <Home />
            <AboutUs />
            <LowerAboutUs />
        </main>
    )
}

export default SiteHome