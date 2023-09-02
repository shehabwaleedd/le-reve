import React from 'react'
import saladItems from './Data'
import './Salads.scss'
const Salads = () => {
    const midpoint = Math.ceil(saladItems.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = saladItems.slice(0, midpoint);
    const rightItems = saladItems.slice(midpoint);

    return (
        <div className='salads'>
            <div className='salads__content containered'>
                <h2> Salads </h2>
                <div className='salads__container'>
                    <div className='salads__left'>
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
                    <div className='salads__right'>
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

export default Salads