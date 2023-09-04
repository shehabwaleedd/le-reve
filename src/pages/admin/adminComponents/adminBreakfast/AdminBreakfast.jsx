import React, { useState, useEffect } from 'react'
import "./AdminBreakfast.scss"
import { db, auth, storage } from '../../../../firebase-config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { LuEdit2 } from 'react-icons/lu';

const AdminBreakfast = () => {
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


    useEffect(() => {
        fetchBreakfastPosts();
    }, []);
    return (
        <div className='adminbreakfast'>
            <div className="adminbreakfast__container">
                <h1>Breakfast</h1>
                <div className="adminbreakfast__container__content">
                    {breakfastList.map((item, index) => (
                        <div className="adminbreakfast__container__content__item" key={index}>
                            <div className="content__item_upper">
                                <h3>{item.name}</h3>
                                <div className="item__upper_lower">
                                    <button className='delete_btn'>X</button>
                                    <button className='edit_btn'><LuEdit2 /></button>
                                </div>
                            </div>
                            <span>{item.description}</span>
                            <span>${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminBreakfast