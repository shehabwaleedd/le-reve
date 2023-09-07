import React from 'react'
import Home from './Home'
import AboutUs from '../../components/aboutus/AboutUs'
import LowerAboutUs from '../../components/lowerAboutUs/LowerAboutUs'
import MenuHome from '../../components/menuHome/MenuHome'
import MenuArrowsHome from '../../components/menuArrowsHome/MenuArrowsHome'
import ContactUpper from '../../components/contactUpper/ContactUpper'
import ContactLower from '../../components/contactLower/ContactLower'
import ContactsUpper from '../../components/contactsUpper/ContactsUpper'
import ContactsLower from '../../components/contactsLower/ContactsLower'
import DeliveryUpper from '../../components/deliveryUpper/DeliveryUpper'
import DeliveryLower from '../../components/deliverLower/DeliveryLower'
import FAQs from '../../components/faqs/FAQs'

const SiteHome = () => {
    return (
        <main className='main'>
            <Home />
            <AboutUs />
            <LowerAboutUs />
            <MenuHome />
            <MenuArrowsHome />
            <DeliveryUpper />
            <DeliveryLower />
            <ContactUpper />
            <ContactLower />
            <ContactsUpper />
            <ContactsLower />
            <FAQs />
        </main>
    )
}

export default SiteHome