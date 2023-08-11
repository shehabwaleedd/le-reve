import React from 'react'
import './Home.css'
import { LuHotel } from "react-icons/lu"
import { BsArrowUpRight } from "react-icons/bs"
import {IoRestaurantOutline} from "react-icons/io5"
import {PiCookingPot} from "react-icons/pi"
import {IoColorPaletteOutline} from "react-icons/io5"
import {GiMeditation} from "react-icons/gi"
const Home = () => {
    return (
        <section className='home'>
            <div className="home__container">
                <div className="home__left">
                    <div className="home__left-container">
                        <h1 className="home__title">Il Rêve Group</h1>
                        <span>an oasis of luxury and tranquility at Il Reve Group's hotel and restaurant. Nestled on the world's 4th ranked beach, our destination offers exquisite accommodations, exceptional dining, and rejuvenating yoga. Immerse yourself in cooking and painting classes for an enriching escape like no other.</span>
                        <div className="home__left-lower">
                            <div className="left-lower-btns">
                                <button className="left-lower-btn">Book Now</button>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__right">
                    <div className="home__right-cards">
                        <div className="home__right-card hotel">
                            <div className="right_card-icon">
                                <LuHotel style={{ fontSize: "3rem", border: "0.6px solid var(--border-color)", borderRadius: "2rem", padding: "0.8rem", color: "var(--container-color)", backgroundColor: "var(--nav-overlay-color)" }} />
                            </div>
                            <div className="right_card-title">
                                <h1 style={{ color: "var(--container-color)" }}>Hotel</h1>
                                <BsArrowUpRight style={{ fontSize: "3.5rem", border: "1px solid var(--container-color)", borderRadius: "2rem", padding: "1rem", color: "var(--container-color)" }} />
                            </div>
                        </div>
                        <div className="home__right-card restaurant">
                            <div className="right_card-icon">
                                <IoRestaurantOutline style={{ fontSize: "3rem", border: "0.6px solid var(--border-color)", borderRadius: "2rem", padding: "0.8rem", color: "var(--container-color)", backgroundColor: "var(--nav-overlay-color)" }} />
                            </div>
                            <div className="right_card-title">
                                <h1 style={{ color: "var(--container-color)" }}>Restaurant</h1>
                                <BsArrowUpRight style={{ fontSize: "3.5rem", border: "1px solid var(--container-color)", borderRadius: "2rem", padding: "1rem", color: "var(--container-color)" }} />
                            </div>
                        </div>
                        <div className="home__right-card cooking">
                            <div className="right_card-icon">
                                <PiCookingPot style={{ fontSize: "3rem", border: "0.6px solid var(--border-color)", borderRadius: "2rem", padding: "0.8rem", color: "var(--container-color)", backgroundColor: "var(--nav-overlay-color)" }} />
                            </div>
                            <div className="right_card-title">
                                <h1 style={{ color: "var(--container-color)" }}>Cooking Class</h1>
                                <BsArrowUpRight style={{ fontSize: "3.5rem", border: "1px solid var(--container-color)", borderRadius: "2rem", padding: "1rem", color: "var(--container-color)" }} />
                            </div>
                        </div>
                        <div className="home__right-card painting">
                            <div className="right_card-icon">
                                <IoColorPaletteOutline style={{ fontSize: "3rem", border: "0.6px solid var(--border-color)", borderRadius: "2rem", padding: "0.8rem", color: "var(--container-color)", backgroundColor: "var(--nav-overlay-color)" }} />
                            </div>
                            <div className="right_card-title">
                                <h1 style={{ color: "var(--container-color)" }}>Painting Class</h1>
                                <BsArrowUpRight style={{ fontSize: "3.5rem", border: "1px solid var(--container-color)", borderRadius: "2rem", padding: "1rem", color: "var(--container-color)" }} />
                            </div>
                        </div>
                        <div className="home__right-card yoga">
                            <div className="right_card-icon">
                                <GiMeditation style={{ fontSize: "3rem", border: "0.6px solid var(--border-color)", borderRadius: "2rem", padding: "0.8rem", color: "var(--container-color)", backgroundColor: "var(--nav-overlay-color)" }} />
                            </div>
                            <div className="right_card-title">
                                <h1>Yoga</h1>
                                <BsArrowUpRight style={{ fontSize: "3.5rem", border: "1px solid var(--text-color)", borderRadius: "2rem", padding: "1rem" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home