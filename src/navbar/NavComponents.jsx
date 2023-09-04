import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import "./NavComponents.scss"
import { useUserAuth } from '../login/authContext/AuthContext'

const NavComponents = () => {
    const { user } = useUserAuth();
    return (
        <motion.div className="nav__links-links" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
            <div className="nav__links_container">
                <Link className="nav__link" to="/">
                    <span>Home</span>
                </Link>
                <Link className="nav__link" to="/about">
                    <span>About Us </span>
                </Link>
                <Link className="nav__link" to="/menu">
                    <span>Menu </span>
                </Link>
                <Link className="nav__link" to="/contact">
                    <span>Contact</span>
                </Link>
                {user && <Link className="nav__link" to="/admin">
                    <span>Admin</span>
                </Link>}

                <div className="nav-footer">
                    <div className="navbar-social-media">
                        <ul>
                            <li>
                                <Link to="https://www.instagram.com/ilreve/" target="__blank" rel="noreferrer">
                                    <span>Instagram</span>
                                    <FiArrowUpRight style={{color: "var(--container-color)"}}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/in/ilreve/" target="__blank" rel="noreferrer">
                                    <span>Facebook</span>
                                    <FiArrowUpRight style={{color: "var(--container-color)"}}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__location">
                        <h2>Mirrisa, Sri Lanka.</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default NavComponents