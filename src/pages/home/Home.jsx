
import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <section className='home'>
            <div className="home__container containered">
                <div className="home__left">
                    <div className="home__left-container">
                        <h1 className="home__title">Le Rêve Group</h1>
                        <span>an oasis of luxury and tranquility at Il Reve Group's hotel and restaurant. Nestled on the world's 4th ranked beach, our destination offers exquisite accommodations, exceptional dining, and rejuvenating yoga. Immerse yourself in cooking and painting classes for an enriching escape like no other.</span>
                        <div className="home__left-lower">
                            <div className="left-lower-btns">
                                <button className="left-lower-btn">Book Now</button>
                                <button className="learn-more-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home