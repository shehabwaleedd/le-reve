import React, { useState, useEffect } from 'react'
import './MainCourse.scss'
import { db } from '../../../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const MainCourse = () => {
    const [mainCourseList, setMainCourseList] = useState([]);
    const fetchMainCoursePosts = async () => {
        try {
            const mainCourseSnapshot = await getDocs(collection(db, "menu/mainCourse/items"));
            const mainCoursePosts = mainCourseSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setMainCourseList(mainCoursePosts);
        } catch (error) {
            console.log("Error fetching main course posts:", error);
        }
    };

    const midpoint = Math.ceil(mainCourseList.length / 2);

    // Split the saladItems array into left and right arrays
    const leftItems = mainCourseList.slice(0, midpoint);
    const rightItems = mainCourseList.slice(midpoint);

    useEffect(() => {
        fetchMainCoursePosts();
    }, []);

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