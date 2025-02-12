import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const styles = {
        container: {
            padding: '40px 20px',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        },
        header: {
            textAlign: 'center',
            marginBottom: '48px'
        },
        title: {
            fontSize: '36px',
            color: '#111827',
            fontWeight: '700',
            marginBottom: '16px'
        },
        subtitle: {
            color: '#4B5563',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto'
        },
        form: {
            maxWidth: '500px',
            margin: '0 auto',
            padding: '32px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        formGroup: {
            marginBottom: '24px'
        },
        label: {
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #D1D5DB',
            borderRadius: '6px',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s',
        },
        textarea: {
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #D1D5DB',
            borderRadius: '6px',
            fontSize: '14px',
            minHeight: '120px',
            outline: 'none',
            transition: 'border-color 0.2s',
        },
        button: {
            width: '100%',
            padding: '10px 20px',
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background-color 0.2s',
            opacity: status === 'sending' ? '0.5' : '1'
        },
        thankYouContainer: {
            minHeight: '100vh',
            backgroundColor: '#F9FAFB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        thankYouCard: {
            maxWidth: '400px',
            width: '100%',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            padding: '32px',
            textAlign: 'center'
        },
        errorMessage: {
            marginTop: '16px',
            padding: '12px',
            backgroundColor: '#FEE2E2',
            color: '#DC2626',
            borderRadius: '6px'
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/vakil.vishal17@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setShowThankYou(true);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (showThankYou) {
        return (
            <section id="contact-vishal">
            <div style={styles.thankYouContainer}>
                <div style={styles.thankYouCard}>
                    <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                        <CheckCircle size={64} style={{ color: '#10B981' }} />
                    </div>

                    <h2 style={{ ...styles.title, marginBottom: '16px' }}>
                        Thank You!
                    </h2>

                    <p style={{ ...styles.subtitle, marginBottom: '32px' }}>
                        Your message has been successfully sent. I will get back to you as soon as possible.
                    </p>

                    <button
                        onClick={() => setShowThankYou(false)}
                        style={{ ...styles.button, maxWidth: '200px', margin: '0 auto' }}
                    >
                        Back to Contact
                    </button>
                </div>
            </div>
            </section>
        );
    }

    return (
        <section id="contact-vishal">
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>Drop me a Message!</h2>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.label}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={styles.textarea}
                    />
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    disabled={status === 'sending'}
                >
                    <Send size={18} />
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'error' && (
                    <div style={styles.errorMessage}>
                        Oops! Something went wrong. Please try again later.
                    </div>
                )}
            </form>
            </div>
        </section>
    );
};

export default Contact;