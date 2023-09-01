import React from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.scss'
import logo from "../assets/minimal-logo-for-coconut-s-tree- (2).svg"
const Navbar = ({ setNavOpen, navOpen, setIsMobile, setIsTablet, isTablet, isMobile }) => {
    const location = useLocation();
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 468);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMobile]);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 935);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsTablet]);
    return (
        <motion.nav className={`nav`} >
            <div className="nav__container containered">
                <div className="nav__left">
                    <Link className="nav__logo" to="/">
                        <h1 className='logo__name'>il Rêve</h1>
                        <img src={logo} alt="" className='svg' style={{ width: "15rem" }} />
                    </Link>
                </div>
                <div className="nav__right">
                    <div className="nav__middle_left">
                        <ul className="nav__list">
                            <motion.li className="nav__item">
                                <div className="hotel__circle"></div>
                                <Link className="nav__link" to="/hotel">Hotel</Link>
                            </motion.li>
                            <motion.li className="nav__item">
                                <div className="restaurant__circle"></div>
                                <Link className="nav__link" to="/restaurant">Restaurant</Link>
                            </motion.li>
                            <motion.li className="nav__item">
                                <Link className="nav__link" to="/about">About</Link>
                            </motion.li>
                            <motion.li className="nav__item">
                                <Link className="nav__link" to="/contact">Contact</Link>
                            </motion.li>
                        </ul>
                    </div>

                    {/* <a href="#menu" className="nav__right">
                    <svg className={`ham hamRotate ham1 ${navOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="100" height="50" onClick={() => setNavOpen(!navOpen)}>
                        <path
                            className={`${navOpen ? "line open" : "line"} top`}
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                            className={`${navOpen ? "line open" : "line"} middle`}
                            d="m 30,50 h 40" />
                        <path
                            className={`${navOpen ? "line open" : "line"} bottom`}
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                </a> */}
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar