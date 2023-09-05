import React, { useEffect } from 'react'
import "./AdminSection.scss"
import { Link } from 'react-router-dom'
import { LuEdit2 } from 'react-icons/lu';


const AdminSection = ({ sectionData, onDeleteItem, section }) => {

    useEffect (() => {
        console.log(sectionData)
    }, [])
    return (
        <div className='adminSection'>
            <div className="adminSection__container">
                <h1>{section}</h1>
                <div className="adminSection__container__content">
                    {sectionData.map((item) => (
                        <div className="adminSection__container__content__item"  key={item.id}>
                            <div className="content__item_upper">
                                <h3>{item.name}</h3>
                                <div className="item__upper_lower">
                                    <button onClick={() => onDeleteItem(item.id)} className='delete_btn'>X</button>
                                    <Link to={`/edit/${section}/${item.id}`} className='edit_btn'><LuEdit2 /></Link>
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

export default AdminSection