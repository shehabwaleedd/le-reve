import React from 'react'
import shape from "../../../../assets/shape.png"
import surv from "../../../../assets/surv.webp"
import "./AboutBeachLower.scss"

const AboutBeachLower = () => {
    return (
        <div className='aboutBeachLower'>
            <div className="aboutBeachLower__container containered">
                <div className="aboutBeachLower__left">
                    <div className="aboutBeachLower__left_imgs">
                        <img src={shape} alt="" />
                        <img src={shape} alt="" className='secondshape'/>
                    </div>
                </div>
                <div className="aboutBeachLower__right">
                    <img src={surv} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutBeachLower