import Image from 'next/image';

const features = [
    {
        title: "Precision Machining",
        desc: "Tolerance levels down to microns, ensuring perfect fit and finish for every component.",
        icon: "⚙️"
    },
    {
        title: "Advanced Materials",
        desc: "Utilizing titanium nitride coatings and carbide substrates for extreme longevity.",
        icon: "💎"
    },
    {
        title: "Custom Solutions",
        desc: "Tailor-made tooling designed specifically for your unique manufacturing needs.",
        icon: "📐"
    }
];

export default function Features() {
    return (
        <section id="solutions" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <div className="feature-grid">
                    <div style={{ position: 'relative', height: '500px' }} className="glass animate-fade-in feature-image-container">
                        <Image
                            src="/images/bits.png"
                            alt="Precision Tools"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '16px' }}
                        />
                    </div>

                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>
                            Why Choose <span style={{ color: 'var(--primary)' }}>Evolve</span>?
                        </h2>
                        <p style={{ marginBottom: '3rem', opacity: 0.8 }}>
                            Our commitment to excellence drives us to innovate constantly. From design to production, we ensure every tool meets the highest standards of the industry.
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {features.map((f, i) => (
                                <div key={i} className="glass info-card">
                                    <div style={{ fontSize: '2rem' }}>{f.icon}</div>
                                    <div>
                                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{f.title}</h3>
                                        <p style={{ opacity: 0.7, fontSize: '0.95rem' }}>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
