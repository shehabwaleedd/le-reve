import React from 'react'
import "./MenuArrowsHome.scss"
import arrow from "../../assets/arrow.png"

const MenuArrowsHome = () => {
    return (
        <div className='menuArrowsHome'>
            <div className="menuArrowsHome__container containered">
                <div className="menuArrowsHome__left">
                    <img src={arrow} alt="" />
                    <img src={arrow} alt="" />
                    <img src={arrow} alt="" />
                    <img src={arrow} alt="" />
                    <img src={arrow} alt="" />
                </div>
                <div className="menuArrowsHome__right">
                    <span>
                        Restaurant Menu 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuArrowsHome