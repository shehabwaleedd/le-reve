import React from 'react'
import mainCourseItems from './Data'
import './MainCourse.scss'

const MainCourse = () => {
    const midpoint = Math.ceil(mainCourseItems.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = mainCourseItems.slice(0, midpoint);
    const rightItems = mainCourseItems.slice(midpoint);

    return (
        <div className='mainCourse'>
            <div className='mainCourse__content containered'>
                <h2> Main Course </h2>
                <div className='mainCourse__container'>
                    <div className='mainCourse__left'>
                        {leftItems.map((item, index) => (
                            <div className='menu__formula' key={index}>
                                <h3>{item.name}</h3>
                                <div className='menu__formula_lower'>
                                    <span>{item.description}</span>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mainCourse__right'>
                        {rightItems.map((item, index) => (
                            <div className='menu__formula' key={index}>
                                <h3>{item.name}</h3>
                                <div className='menu__formula_lower'>
                                    <span>{item.description}</span>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCourse