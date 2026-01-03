import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="glass nav-container">
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                EVOLVE <span style={{ color: '#fff' }}>TOOLING</span>
            </div>
            <div className="nav-links">
                <Link href="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Home</Link>
                <Link href="#about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>About</Link>
                <Link href="#products" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Products</Link>
                <Link href="#solutions" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Solutions</Link>
                <Link href="#services" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Services</Link>
                <Link href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Contact</Link>
            </div>
        </nav >
    );
}
