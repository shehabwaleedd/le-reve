import React, { useState, useEffect } from 'react';
import { db } from '../../../../firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './AdminAddNewItem.scss';
import { useNavigate } from 'react-router-dom';

const AdminAddNewItem = () => {
    const [section, setSection] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sections, setSections] = useState([]); // To store existing sections
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the existing sections from the database
        const fetchSections = async () => {
            try {
                const sectionsSnapshot = await getDocs(collection(db, 'menu'));
                const existingSections = sectionsSnapshot.docs.map((doc) => doc.id);
                setSections(existingSections);
            } catch (error) {
                console.error('Error fetching existing sections:', error);
            }
        };

        fetchSections();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newItemData = {
                name,
                description,
                price,
            };

            // Add the new item to the appropriate section collection
            await addDoc(collection(db, `menu/${section}/items`), newItemData);

            // Clear the form fields after successfully adding the item
            setName('');
            setDescription('');
            setPrice('');

            // Navigate to the admin page
            navigate('/admin');
        } catch (error) {
            console.error('Error adding new item:', error);
        }
    };


    return (
        <div className='adminAdd'>
            <form onSubmit={handleSubmit} className='containered'>
                <h2>Add New Item</h2>
                <div className='add-group'>
                    <label htmlFor='section'>Section:</label>
                    <select
                        id='section'
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        required
                    >
                        <option value='' disabled>
                            Select a section
                        </option>
                        {sections.map((existingSection) => (
                            <option key={existingSection} value={existingSection}>
                                {existingSection}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='add-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='add-group'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className='add-group'>
                    <label htmlFor='price'>Price:</label>
                    <input
                        type='text'
                        id='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
};

export default AdminAddNewItem;
