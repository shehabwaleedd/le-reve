import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="home__container">
                <div className="home__left">
                    <h1 className="home__title">Il Rêve</h1>
                </div>
                <div className="home__right">
                    <div className="home__right-cards">
                        <div className="home__right-card">
                            <div className="right_card-icon">
                            </div>
                            <div className="right_card-title">
                                <h1>Hotel</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home