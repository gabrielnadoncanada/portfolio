import React, { Component } from 'react'
import ContactForm from './contactForm/ContactForm'

export default class ContactsPage extends Component {
    render() {
        return (
            <div className="bg-white contact-container">
                 <h1 className="mb-4">Contactez-moi</h1>
                <ContactForm id='main-contact-form' className="contact-form" name="contact-form" method='post' action="" />
            </div>
        )
    }
}
