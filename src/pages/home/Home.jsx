import React from 'react'
import './Home.scss'
import main from "../../assets/main.jpg"
const Home = () => {
    return (
        <section className='home'>
            <div className="home__container containered">
                <div className="home__left">
                    <div className="home__left-container">
                        <h1 className="home__title">Fine Dining Restaurant In Mirissa</h1>
                        <span>A fancy tropical experience offering a unique twist on international flavors with our touch</span>
                    </div>
                    <div className="book__now">
                        <button className="book__now-btn">Book a table</button>
                    </div>
                </div>
                <div className="home__right">
                    <img src={main} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Home