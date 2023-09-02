import React from 'react'
import ContactUpper from '../../components/contactUpper/ContactUpper'
import ContactLower from '../../components/contactLower/ContactLower'
import ContactsLower from '../../components/contactsLower/ContactsLower'
import ContactsUpper from '../../components/contactsUpper/ContactsUpper'

const Contact = () => {
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