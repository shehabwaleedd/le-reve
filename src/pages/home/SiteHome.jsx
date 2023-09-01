import React from 'react'
import Home from './Home'
import AboutUs from '../../components/loading/aboutus/AboutUs'

const SiteHome = () => {
    return (
        <main className='main'>
            <Home />
            <AboutUs />
        </main>
    )
}

export default SiteHome