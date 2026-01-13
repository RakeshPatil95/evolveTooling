'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="glass nav-container">
            <div className="nav-header">
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                    EVOLVE <span style={{ color: '#fff' }}>TOOLING</span>
                </div>
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link href="#home" onClick={closeMenu} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Home</Link>
                <Link href="#about" onClick={closeMenu} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>About</Link>
                <Link href="#products" onClick={closeMenu} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Products</Link>
                <Link href="#solutions" onClick={closeMenu} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Solutions</Link>
                <Link href="#services" onClick={closeMenu} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Services</Link>
                <Link href="#contact" onClick={closeMenu} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, opacity: 0.8 }}>Contact</Link>
            </div>
        </nav >
    );
}

