import React, { useState, useEffect } from 'react'
import { db } from '../../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import './Appetizers.scss'

const Appetizers = () => {

    const [appetizerLists, setAppetizersList] = useState([]);
    const fetchAppetizersPosts = async () => {
        try {
            const appetizersSnapshot = await getDocs(collection(db, "menu/appetizers/items"));
            const appetizersPosts = appetizersSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setAppetizersList(appetizersPosts);
        } catch (error) {
            console.log("Error fetching appetizers posts:", error);
        }
    };

    const midpoint = Math.ceil(appetizerLists.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = appetizerLists.slice(0, midpoint);
    const rightItems = appetizerLists.slice(midpoint);

    useEffect(() => {
        fetchAppetizersPosts();
    }, []);


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