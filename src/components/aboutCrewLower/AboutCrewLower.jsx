import React from 'react'
import './AboutCrewLower.scss'
import crew from '../../assets/Snapinsta.app_374531490_842336783824494_7385154358647316026_n_1080.jpg'

const AboutCrewLower = () => {
    return (
        <div className='aboutCrewLower'>
            <div className="aboutCrewLower__container containered">
                <img src={crew} alt="" />
            </div>
        </div>
    )
}

export default AboutCrewLower