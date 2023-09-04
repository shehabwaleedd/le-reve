import React, { useState, useEffect } from 'react'
import './Salads.scss'
import { db } from '../../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const Salads = () => {
    const [saladsList, setSaladsList] = useState([]);

    const fetchSaladsPosts = async () => {
        try {
            const saladsSnapshot = await getDocs(collection(db, "menu/salads/items"));
            const saladsPosts = saladsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSaladsList(saladsPosts);
        } catch (error) {
            console.log("Error fetching salads posts:", error);
        }
    };
    const midpoint = Math.ceil(saladsList.length / 2);
    const leftItems = saladsList.slice(0, midpoint);
    const rightItems = saladsList.slice(midpoint);

    useEffect(() => {
        fetchSaladsPosts();
    }, []);

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