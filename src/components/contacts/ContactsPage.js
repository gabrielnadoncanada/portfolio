import React, { Component } from 'react'
import ContactForm from './contactForm/ContactForm'

export default class ContactsPage extends Component {
    render() {
        return (
            <div className="bg-white p-5 contact-container">
                <ContactForm id='main-contact-form' className="contact-form" name="contact-form" method='post' action="" />
            </div>
        )
    }
}
