export default function Contact() {
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
                            <button className="button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Open in Maps
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
