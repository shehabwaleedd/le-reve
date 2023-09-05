import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import MenuSections from './menuComponents/menuSections/MenuSections';
const Menu = () => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Fetch the available sections from the "menuSections" collection
        const fetchSections = async () => {
            try {
                const sectionsSnapshot = await getDocs(collection(db, 'menu'));
                const sectionsData = sectionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setSections(sectionsData);
            } catch (error) {
                console.error('Error fetching menu sections:', error);
            }
        };

        fetchSections();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className='menuSection'>
            {sections.map((section) => (
                <MenuSections key={section.id} section={section} />
            ))}
        </section>
    )
}

export default Menu