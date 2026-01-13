'use client';

import { useState } from 'react';

export default function Contact() {
    const address = "Ganesh Nagar, Right Canal Road, Near Shri Saptashrungi Mata Mandir Praveshdwar, Satpur, Nashik, Maharashtra 422007";

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const openInMaps = () => {
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just show a success message
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.85rem',
        opacity: 0.7,
        marginBottom: '0.5rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.5px'
    };

    return (
        <section id="contact" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 8vw, 4rem)' }}>
                    <h2>Contact <span style={{ color: 'var(--primary)' }}>Us</span></h2>
                    <p style={{ opacity: 0.8 }}>Get in touch with our precision experts today.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
                    <div className="glass" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>Company Details</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem', textTransform: 'uppercase' }}>Trade Name</label>
                                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>EVOLVE TOOLING SOLUTION</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem', textTransform: 'uppercase' }}>Proprietor</label>
                                <p style={{ fontSize: '1.1rem' }}>Sandip Shaligram Patil</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem', textTransform: 'uppercase' }}>GSTIN</label>
                                <p style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 500 }}>27DEJPP7775D1ZY</p>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem', textTransform: 'uppercase' }}>Email</label>
                                <a
                                    href="mailto:evolvetooling19@gmail.com"
                                    style={{ fontSize: '1.1rem', color: 'var(--primary)', textDecoration: 'none', display: 'block' }}
                                >
                                    evolvetooling19@gmail.com
                                </a>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.3rem', textTransform: 'uppercase' }}>IndiaMart</label>
                                <a
                                    href="https://www.indiamart.com/evolve-tooling-solution/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '1rem', color: 'var(--primary)', textDecoration: 'none', display: 'block', wordBreak: 'break-word' }}
                                >
                                    View our IndiaMart Profile →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)' }}>Headquarters</h3>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                            <div style={{ fontSize: '1.5rem' }}>📍</div>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Ganesh Nagar, Right Canal Road,<br />
                                    Near Shri Saptashrungi Mata Mandir Praveshdwar,<br />
                                    Satpur, Nashik, Maharashtra - 422007
                                </p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', display: 'flex' }}>
                            <button
                                className="button-primary"
                                style={{ width: '100%', justifyContent: 'center' }}
                                onClick={openInMaps}
                            >
                                Open in Maps
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enquiry Form */}
                <div className="glass" style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', marginTop: '2rem' }}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--primary)', textAlign: 'center' }}>
                        Send us an Enquiry
                    </h3>

                    {isSubmitted ? (
                        <div style={{
                            textAlign: 'center',
                            padding: '3rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '12px',
                            border: '1px solid var(--primary)'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Thank You!</h4>
                            <p style={{ opacity: 0.8 }}>Your enquiry has been received. We&apos;ll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                                gap: '1.5rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div>
                                    <label style={labelStyle} htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={labelStyle} htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell us about your requirements, the products you're interested in, or any questions you have..."
                                    style={{
                                        ...inputStyle,
                                        resize: 'vertical',
                                        minHeight: '120px'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="button-primary"
                                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                            >
                                Submit Enquiry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

