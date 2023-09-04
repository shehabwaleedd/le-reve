import React, { useState, useEffect } from 'react'
import { db } from '../../../../firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { LuEdit2 } from 'react-icons/lu';
import "./AdminAppetizers.scss"
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../../../../components/loading/Loading.tsx';

const AdminAppetizers = () => {
    const [appetizersList, setAppetizersList] = useState([])

    const fetchAppetizersMenu = async () => {
        try {
            const appetizersSnapshot = await getDocs(collection(db, "menu/appetizers/items"));
            const appetizersPosts = appetizersSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setAppetizersList(appetizersPosts);
        } catch (error) {
            console.log("Error fetching breakfast posts:", error);
        }
    };
    const deleteItem = async (itemId) => {
        try {
            await deleteDoc(doc(db, "menu/appetizers/items", itemId));
            // After deleting, fetch the updated list
            fetchAppetizersMenu();
        } catch (error) {
            console.log("Error deleting item:", error);
        }
    };
        useEffect(() => {
        fetchAppetizersMenu();
    }, []);

    if (!appetizersList) {
        return <Loading height={80}/>
    }


    return (
        <div className='adminbreakfast'>
            <div className="adminbreakfast__container">
                <h1>Appetizers</h1>
                <div className="adminbreakfast__container__content">
                    {appetizersList.map((item, index) => (
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

export default AdminAppetizers