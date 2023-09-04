import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container containered'>
                <div className="footer__left">
                    <div className="footer__left__top">
                        <h1 className='logo__name'>il Rêve</h1>
                    </div>
                    <div className="footer__left__bottom">
                        <ul>
                            <li>
                                <a href="mailto:hello@ilreve.com" target="__blank">hello@ilreve.com</a>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/19gosn6UTL4ZSQAA7" target="__blank">Mirissa Beach, Mirissa, Sri Lanka</a>
                            </li>
                            <li>
                                <a href="tel:+94772222222" target="__blank">+94 77 222 2222</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__middle">
                    <h2>Sitemap</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/hotel">Hotel</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__right">
                    <div className="footer__right_top">
                        <Link to="/privacy"><h2>Privacy Policy</h2></Link>
                    </div>
                    <div className="footer__right_bottom">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/ilreve_restaurant/" target="__blank"><FaInstagram /></a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@ilreve_restaurant" target="__blank"><FaTiktok /></a>
                            </li>
                            <li>
                                <a href="https://wa.me/94772222222" target="__blank"><BsWhatsapp /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__footer">
                <div className="footer__footer__container containered">
                    <p>© 2021 il Rêve. All rights reserved.</p>
                    <span>
                        Coded & Developed by <a href="https://www.cairo-studio.com" target="__blank">Cairo Studio LLC</a>

                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer