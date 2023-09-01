import React from 'react'
import Home from './Home'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'
import MenuHome from '../../components/menuHome/MenuHome'

const SiteHome = () => {
    return (
        <main className='main'>
            <Home />
            <AboutUs />
            <LowerAboutUs />
            <MenuHome />
        </main>
    )
}

export default SiteHome