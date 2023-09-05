import React from 'react'
import "./ContactsLower.scss"
import contact1 from "../../assets/contact1.webp"

const ContactsLower = () => {
    return (
        <div className='contactsLower'>
            <div className="contactsLower__container containered">
                <div className="contactsLower__left">
                    <div className="contactsLower__left_upp">
                        <h2> Mirissa Beach, Mirissa, Sri Lanka</h2>
                    </div>
                    <div className="contactsLower__left_low">
                        <h2> +94 41 2 225 071</h2>
                    </div>
                </div>
                <div className="contactsLower__right">
                    <img src={contact1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactsLower