import React from 'react'
import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <div className='aboutus'>
            <div className="aboutus__container containered">
                <div className="aboutus__left">
                    <h1>
                        About Us
                    </h1>
                </div>
                <div className="aboutus__right">
                    <span>
                        Mirissa il Reve fine dining restaurant is a place where you can enjoy a unique combination of authentic Pacific cuisine and the best of Sri Lankan hospitality.
                    </span>
                    <p>
                    Our culinary voyage transports you from the vibrant spices of North Africa to the diverse flavors of Greece, Turkey, and the cherished traditions of Jewish cuisine found in Poland, Russia, and Ukraine. This exquisite journey converges with contemporary gastronomic trends, promising an opulent and shared dining experience that transcends the ordinary.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutUs