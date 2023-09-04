import React, { useState, useEffect } from 'react'
import "./AdminBreakfast.scss"
import { db } from '../../../../firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { LuEdit2 } from 'react-icons/lu';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../../../../components/loading/Loading.tsx';

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

    const deleteItem = async (itemId) => {
        try {
            await deleteDoc(doc(db, "menu/breakfast/items", itemId));
            // After deleting, fetch the updated list
            fetchBreakfastPosts();
        } catch (error) {
            console.log("Error deleting item:", error);
        }
    };


    useEffect(() => {
        fetchBreakfastPosts();
    }, []);
    if (!breakfastList) {
        return <Loading height={80} />
    }
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
                                    <button onClick={() => deleteItem(item.id)} className='delete_btn'>X</button>
                                    <Link to={`/edit/breakfast/${item.id}`} className='edit_btn'><LuEdit2 /></Link>
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