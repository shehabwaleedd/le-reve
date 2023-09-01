import React from 'react'
import Home from './Home'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'
import MenuHome from '../../components/menuHome/MenuHome'
import MenuArrowsHome from '../../components/menuArrowsHome/MenuArrowsHome'
import ContactUpper from '../../components/contactUpper/ContactUpper'
import ContactLower from '../../components/contactLower/ContactLower'

const SiteHome = () => {
    return (
        <main className='main'>
            <Home />
            <AboutUs />
            <LowerAboutUs />
            <MenuHome />
            <MenuArrowsHome />
            <ContactUpper />
            <ContactLower />
        </main>
    )
}

export default SiteHome