import React, { useEffect } from 'react'
import ContactUpper from '../../components/contactUpper/ContactUpper'
import ContactLower from '../../components/contactLower/ContactLower'
import ContactsLower from '../../components/contactsLower/ContactsLower'
import ContactsUpper from '../../components/contactsUpper/ContactsUpper'

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <section className='contact'>
            <div className="contact__container">
                <ContactUpper />
                <ContactLower />
                <ContactsUpper />
                <ContactsLower />
            </div>
        </section>
    )
}

export default Contact