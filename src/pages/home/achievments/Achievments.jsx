import React from 'react'
import './Achievments.css'

const Achievments = () => {
    return (
        <section className='achievments'>
            <div className="achievments__container">    
                <div className="achievments__card"> 
                    <h1>1000+</h1>
                    <p>Satisfied Guests</p>
                </div>
                <div className="achievments__card"> 
                    <h1>20K+</h1>
                    <p>Served Guests</p>
                </div>
                <div className="achievments__card"> 
                    <h1>10+</h1>
                    <p>Years Of Experience</p>
                </div>
                <div className="achievments__card"> 
                    <h1>2x</h1>
                    <p>best restaurant in Sri Lanka</p>
                </div>
            </div>
        </section>
    )
}

export default Achievments