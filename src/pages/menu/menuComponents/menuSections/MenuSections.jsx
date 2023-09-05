import React, { useEffect, useState } from 'react';
import { db } from '../../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import "./MenuSection.scss"
const MenuSections = ({ section }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        // Fetch the items within the section's sub-collection
        const fetchItems = async () => {
            try {
                const itemsSnapshot = await getDocs(collection(db, `menu/${section.id}/items`));
                const itemsData = itemsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setItems(itemsData);
            } catch (error) {
                console.error(`Error fetching items for section ${section.id}:`, error);
            }
        };
        fetchItems();
    }, [section.id]);
    const midpoint = Math.ceil(items.length / 2);
    // Split the saladItems array into left and right arrays
    const leftItems = items.slice(0, midpoint);
    const rightItems = items.slice(midpoint);
    return (
        <div className="menu__content containered">
            <h2>{section.id}</h2>
            <div className='menu__container'>
                <div className='menu__left'>
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
                <div className='menu__right'>
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
    )
}

export default MenuSections