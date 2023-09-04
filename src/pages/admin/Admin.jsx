import React from 'react'
import "./Admin.scss"
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useUserAuth } from '../../login/authContext/AuthContext';
import AdminBreakfast from './adminComponents/adminBreakfast/AdminBreakfast';

const Admin = () => {

    const [breakfastOpen, setBreakfastOpen] = useState(true);
    const [saladsOpen, setSaladsOpen] = useState(false);
    const [appetizersOpen, setAppetizersOpen] = useState(false);
    const [mainCourseOpen, setMainCourseOpen] = useState(false);
    const { user } = useUserAuth();


    const handleBreakfastOpen = () => {
        setBreakfastOpen(true);
        setSaladsOpen(false);
        setAppetizersOpen(false);
        setMainCourseOpen(false);
    }

    const handleSaladsOpen = () => {
        setBreakfastOpen(false);
        setSaladsOpen(true);
        setAppetizersOpen(false);
        setMainCourseOpen(false);
    }

    const handleAppetizersOpen = () => {
        setBreakfastOpen(false);
        setSaladsOpen(false);
        setAppetizersOpen(true);
        setMainCourseOpen(false);
    }

    const handleMainCourseOpen = () => {
        setBreakfastOpen(false);
        setSaladsOpen(false);
        setAppetizersOpen(false);
        setMainCourseOpen(true);
    }


    return (
        <section className='admin'>
            <div className="admin__container containered">
                <div className="admin__left">
                    <h1>Admin Dashboard</h1>
                    <div className="admin__left__container">
                        <ul>
                            <li onClick={handleBreakfastOpen}>
                                <h3>Breakfast</h3>
                            </li>
                            <li onClick={handleSaladsOpen}>
                                <h3>Salads</h3>
                            </li>
                            <li onClick={handleAppetizersOpen}>
                                <h3>Appetizers</h3>
                            </li>
                            <li onClick={handleMainCourseOpen}>
                                <h3>Main Course</h3>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="admin__right">
                    <div className="admin__right__container">
                        {breakfastOpen && ( <AdminBreakfast /> )}
                        {saladsOpen && ( <AdminBreakfast /> )}
                        {appetizersOpen && ( <AdminBreakfast /> )}
                        {mainCourseOpen && ( <AdminBreakfast /> )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin