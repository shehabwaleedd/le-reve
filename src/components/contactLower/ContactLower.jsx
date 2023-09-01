import React from 'react'
import "./ContactLower.scss"
import shape from "../../assets/shape.png"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactLower = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        emailjs.sendForm('service_z591qpo', 'template_3xzot3e', formData, '4nyzjigYhVGMwCX0W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    const form = useRef();
    const [name, setName] = useState("");
    const [budget, setBudget] = useState("budget");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = (e) => {
        // Validate form fields
        const errors = {};
        if (name.trim() === "") {
            errors.name = "Name is required";
        }
        if (budget === "budget") {
            errors.budget = "Please select a budget";
        }
        if (email.trim() === "") {
            errors.email = "Email is required";
        }
        if (message.trim() === "") {
            errors.message = "Message is required";
        }
        if (!agreed) {
            errors.agreed = "You must agree to the storage and processing of your personal data";
        }
        if (
            !formErrors.name &&
            !formErrors.budget &&
            !formErrors.email &&
            !formErrors.message &&
            !formErrors.agreed
        ) {
            const formData = new FormData(e.target);
            sendEmail(formData);
            setFormErrors({});
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className='contactLower'>
            <div className="contactLower__container containered">
                <div className="contactLower__left">
                    <div className="contactLower__left_imgs">
                        <img src={shape} alt="" />
                        <img src={shape} alt="" />
                    </div>
                </div>
                <div className="contactLower__right">
                    <div className="contact__lower">
                        <form className="contact__lower_form" onSubmit={handleSubmit} ref={form}>
                            <div className="conlo__container">
                                <div className="conlocon__input">
                                    <input type="text" name="name" className={`contact__form-input ${formErrors.name ? "error" : ""}`} placeholder="Your Name / Your Company" value={name} onChange={(e) => setName(e.target.value)} required />
                                    {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                                </div>
                                <div className="conlocon__input">
                                    <input type="email" name="email" className={`contact__form-input ${formErrors.email ? "error" : ""}`} placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                                </div>
                                <div className="conlocon__input">
                                    <input type="tel" name="number" className={`contact__form-input ${formErrors.email ? "error" : ""}`} placeholder="Your Number" value={number} onChange={(e) => setNumber(e.target.value)} required />
                                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                                </div>
                                <div className="conlocon__input contact__form-area">
                                    <textarea name="message" cols="30" rows="5" className={`contact__form-input ${formErrors.message ? "error" : ""}`} placeholder="Tell Us About Your Project" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                    {formErrors.message && <p className="error-message">{formErrors.message}</p>}
                                    <div className="contact__form-line"></div>
                                </div>
                            <button type='submit'>
                                <span>Send Message</span>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLower