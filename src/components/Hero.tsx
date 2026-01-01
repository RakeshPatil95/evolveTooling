import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            paddingTop: '6rem'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.4
            }}>
                <Image
                    src="/images/hero.png"
                    alt="Mechanical Component"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 0%, var(--background) 100%)'
                }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '700px' }}>
                    <h1>
                        Engineering <span className="premium-gradient-text">Precision</span> For The Future
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '2.5rem', opacity: 0.9 }}>
                        Elevate your industrial capabilities with Evolve Tooling. We provide cutting-edge mechanical solutions designed for maximum efficiency and durability.
                    </p>
                    <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
                        <button className="button-primary">
                            Explore Our Tools
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
