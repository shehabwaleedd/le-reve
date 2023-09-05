import React, { useEffect, useState } from 'react'
import "./AdminSection.scss"
import { Link } from 'react-router-dom'
import { LuEdit2 } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';


const AdminSection = ({ sectionData, onDeleteItem, section }) => {
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDeleteConfirmation = (item) => {
        setItemToDelete(item);
        setDeleteConfirmation(true);
    };

    const handleDeleteCancel = () => {
        setDeleteConfirmation(false);
        setItemToDelete(null);
    };

    const handleDeleteItem = () => {
        onDeleteItem(itemToDelete.id);
        setDeleteConfirmation(false);
        setItemToDelete(null);
    };

    if (deleteConfirmation) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }






    useEffect(() => {
        console.log(sectionData)
    }, [])
    return (
        <div className='adminSection'>
            <div className="adminSection__container">
                <h1>{section}</h1>
                <div className="adminSection__container__content">
                    {sectionData.map((item) => (
                        <div className="adminSection__container__content__item" key={item.id}>
                            <div className="content__item_upper">
                                <h3>{item.name}</h3>
                                <div className="item__upper_lower">
                                    <button onClick={() => handleDeleteConfirmation(item)} className='delete_btn'>X</button>
                                    <Link to={`/edit/${section}/${item.id}`} className='edit_btn'><LuEdit2 /></Link>
                                </div>
                            </div>
                                <AnimatePresence mode='wait'>
                                    {deleteConfirmation && itemToDelete?.id === item.id && (
                                        <motion.div
                                            key="delete-confirmation"
                                            className="deleteConfirmation"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <p>Are you sure you want to delete this item?</p>
                                            <div className="deleteConfirmation__btns">
                                                <button onClick={handleDeleteItem} className="deleteConfirmation__btns__yes">
                                                    Yes
                                                </button>
                                                <button onClick={handleDeleteCancel} className="deleteConfirmation__btns__no">
                                                    No
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            <span>{item.description}</span>
                            <span>${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminSection