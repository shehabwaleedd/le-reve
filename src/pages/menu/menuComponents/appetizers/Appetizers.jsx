import React from 'react'
import appetizerItems from './Data'
import './Appetizers.scss'

const Appetizers = () => {
    const midpoint = Math.ceil(appetizerItems.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = appetizerItems.slice(0, midpoint);
    const rightItems = appetizerItems.slice(midpoint);

    return (
        <div className='appetizers'>
            <div className='appetizers__content containered'>
                <h2> Appetizers </h2>
                <div className='appetizers__container'>
                    <div className='appetizers__left'>
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
                    <div className='appetizers__right'>
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

export default Appetizers