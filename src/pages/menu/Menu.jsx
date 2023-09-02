import React, { useEffect } from 'react'
import Breakfast from './menuComponents/breakfast/Breakfast'
import MainCourse from './menuComponents/mainCourse/MainCourse'
import Appetizers from './menuComponents/appetizers/Appetizers'
import Salads from './menuComponents/salads/Salads'

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section>
            <Breakfast />
            <Appetizers />
            <MainCourse />
            <Salads />
        </section>
    )
}

export default Menu