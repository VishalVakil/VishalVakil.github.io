import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill out all fields.");
            return;
        }

        // Prepare data to send to FormSubmit.co
        const formDetails = {
            ...formData,
            _subject: "New Message from Contact Form",
            _next: "https://your-website.com/thank-you", // Customize to where you want to redirect
            _captcha: "false"
        };

        // Send form data to FormSubmit.co
        fetch('https://formsubmit.co/vakil.vishal17@gmail.com', {
            method: 'POST',
            body: JSON.stringify(formDetails),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setStatus("Your message has been sent!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                setStatus("Oops! Something went wrong.");
                console.error(error);
            });
    };

    return (
        <section id="contact-vishal">
        <div>
            <h2>Let's Talk!</h2>
            {status && <p>{status}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
        </section>
    );
};

export default Contact;
