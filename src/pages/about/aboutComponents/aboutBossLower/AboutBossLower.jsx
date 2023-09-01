import React from 'react'
import "./AboutBossLower.scss"
import chef from "../../../../assets/main.jpg"
const AboutBossLower = () => {
    return (
        <div className='aboutBossLower'>
            <div className="aboutBossLower__container containered">
                <div className="aboutBossLower__left">
                    <img src={chef} alt="" />
                </div>
                <div className="aboutBossLower__right">
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ab quis eos harum. Enim obcaecati adipisci voluptatibus atque?
                    </span>
                </div>

            </div>
        </div>
    )
}

export default AboutBossLower 