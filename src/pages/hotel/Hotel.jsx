import React from 'react'
import "./Hotel.scss"
import { Link } from 'react-router-dom'

const Hotel = () => {
    return (
        <div className='hotel'>
            <h1>Page Under Construction</h1>
            <p>
                We are working on this page. Please come back later.
            </p>
            <Link to="/">
                <span>Go Back</span>
            </Link>
        </div>
    )
}

export default Hotel