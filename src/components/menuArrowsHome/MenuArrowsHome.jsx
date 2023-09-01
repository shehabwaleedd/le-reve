import React from 'react'
import "./MenuArrowsHome.scss"
import arrow from "../../assets/arrow.png"
import { Link } from 'react-router-dom'

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
                <Link to="/menu" className="menuArrowsHome__right">
                    <span>
                        Restaurant Menu 
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default MenuArrowsHome