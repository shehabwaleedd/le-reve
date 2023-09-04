import React, { useState, useEffect } from 'react';
import './Breakfast.scss';
import { db } from '../../../../firebase-config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

const Breakfast = () => {
    const [breakfastList, setBreakfastList] = useState([]);

    const fetchBreakfastPosts = async () => {
        try {
            const breakfastSnapshot = await getDocs(collection(db, "menu/breakfast/items"));
            const breakfastPosts = breakfastSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setBreakfastList(breakfastPosts);
        } catch (error) {
            console.log("Error fetching breakfast posts:", error);
        }
    };
    const midpoint = Math.ceil(breakfastList.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = breakfastList.slice(0, midpoint);
    const rightItems = breakfastList.slice(midpoint);


    useEffect(() => {
        fetchBreakfastPosts();
    }, []);

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
