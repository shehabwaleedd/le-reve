import React from 'react';
import './Breakfast.scss';
import breakfastItems from "./Data"

const Breakfast = () => {
    const midpoint = Math.ceil(breakfastItems.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = breakfastItems.slice(0, midpoint);
    const rightItems = breakfastItems.slice(midpoint);

    return (
        <div className='breakfast'>
            <div className='breakfast__content containered'>
                <h2> Breakfast </h2>
                <div className='breakfast__container'>
                    <div className='breakfast__left'>
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
                    <div className='breakfast__right'>
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
    );
};

export default Breakfast;
