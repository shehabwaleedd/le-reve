import React from 'react'
import "./MenuHome.scss"
import { Link } from 'react-router-dom'

const MenuHome = () => {
    return (
        <div className='menuHome'>
            <div className="menuHome__container containered">
                <div className="menuHome__left">
                    <h1>
                        Menu
                    </h1>
                    {/* <Link to="/menu" className='book__now'>
                        <span className="menuHome__button">
                            View Menu
                        </span>
                    </Link> */}
                </div>
                <div className="menuHome__right">
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

export default MenuHome