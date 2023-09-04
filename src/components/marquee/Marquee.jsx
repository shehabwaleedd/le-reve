import React from 'react'
import './Marquee.css'

const Marquee = () => {
    return (
        <div className='marquee'>
            <div className="marquee__container containered">
                <h3>
                    <div className="marquee-wrapper">
                        <div className="marquee-title">
                            We think <span className="text-stroke-black">creative </span>
                            &amp;
                            / We Are <span className="text-stroke-black">The Best Fine Dining Restaurant </span>
                            &amp;
                            / We give <span className="text-stroke-black">Unique Experiences </span>
                            &amp;
                        </div>
                    </div>
                </h3>
            </div>
        </div>
    )
}

export default Marquee