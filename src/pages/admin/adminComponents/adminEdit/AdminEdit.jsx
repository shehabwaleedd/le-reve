import React from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../../../firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import "./AdminEdit.scss"


const AdminEdit = () => {
    const navigate = useNavigate()
    const { section, id } = useParams(); // Get section and item ID from the URL
    const [itemData, setItemData] = useState({});
    const [updatedItemData, setUpdatedItemData] = useState({});

    useEffect(() => {
        const fetchItemToEdit = async () => {
            try {
                const itemDocSnapshot = await getDoc(doc(db, `menu/${section}/items`, id));
                if (itemDocSnapshot.exists()) {
                    const itemData = itemDocSnapshot.data();
                    setItemData(itemData);
                    // Set the initial value of updatedItemData with itemData
                    setUpdatedItemData(itemData);
                } else {
                    // Handle item not found
                }
            } catch (error) {
                console.log('Error fetching item to edit:', error);
            }
        };

        fetchItemToEdit();
    }, [section, id]);
    
    if (!section || !id) {
        navigate('/admin'); // Redirect to the admin page if the parameters are missing
        return null; // Render nothing
    }

    const handleEditClick = async () => {
        try {
            const itemDocRef = doc(db, `menu/${section}/items`, id);
            await updateDoc(itemDocRef, updatedItemData);
            navigate(`/admin`);
            // Handle successful edit, e.g., show a confirmation message
        } catch (error) {
            console.log('Error editing item:', error);
        }
    };

    return (
        <section className='adminEdit'>
            <h2>Edit Menu Item</h2>
            <div className="adminEdit__container containered">
                <div className='edit-form'>
                    <input
                        type='text'
                        placeholder='Name'
                        value={updatedItemData.name || itemData.name}
                        onChange={(e) => setUpdatedItemData({ ...updatedItemData, name: e.target.value })}
                    />
                    <textarea
                        placeholder='Description'
                        value={updatedItemData.description || itemData.description}
                        onChange={(e) => setUpdatedItemData({ ...updatedItemData, description: e.target.value })}
                    />
                    <input
                        type='text'
                        placeholder='Price'
                        value={updatedItemData.price || itemData.price}
                        onChange={(e) => setUpdatedItemData({ ...updatedItemData, price: e.target.value })}
                    />
                    <button onClick={handleEditClick}>Save</button>
                </div>
            </div>
        </section>
    );
}

export default AdminEdit