
'use client';

import Image from 'next/image';
import { useState } from 'react';

const products = [
    {
        id: 1,
        name: "Vertical Tapping Machine",
        description: "High-precision electric vertical tapping machine designed for efficiency and accuracy. Perfect for rapid threading operations on a wide range of materials with adjustable torque and speed control.",
        image: "/images/products/tapping-vertical.jpg"
    },
    {
        id: 2,
        name: "Universal Tapping Arm",
        description: "Versatile flexible arm tapping machine capable of both vertical and horizontal operations. Features a long-reach articulated arm for tapping large workpieces without repositioning.",
        image: "/images/products/tapping-universal.jpg"
    },
    {
        id: 3,
        name: "Drill Bit Resharpener",
        description: "Professional drill grinding machine for restoring dulled drill bits to factory sharpness. Easy to use with precise geometry control, extending the life of your expensive cutting tools.",
        image: "/images/products/drill-resharpener.jpg"
    },
    {
        id: 4,
        name: "Portable Beveling Machine",
        description: "Compact handheld chamfering tool for preparing plate edges, pipe ends, and various profiles. Ideal for weld preparation and deburring with high-quality surface finish.",
        image: "/images/products/beveling-machine.jpg"
    },
    {
        id: 5,
        name: "Pneumatic Chamfer Tool",
        description: "Mini-style handheld pneumatic chamfering machine. Features one-handed operation for fast cutting, metal trimming, and deburring. Lightweight and efficient.",
        image: "/images/products/pneumatic-chamfer.jpg"
    },
    {
        id: 6,
        name: "Industrial Air Belt Sander",
        description: "20mm pneumatic belt sander designed for deburring, smoothing welds, and finishing metal or wood in hard-to-reach areas. Versatile and powerful.",
        image: "/images/products/air-belt-sander.jpg"
    },
    {
        id: 7,
        name: "Precision Magnetic Sine Plate",
        description: "Adjustable angle magnetic workholding device for high-precision grinding and milling applications. Ensures secure holding and accurate angle settings.",
        image: "/images/products/magnetic-sine-plate.jpg"
    },
    {
        id: 8,
        name: "End Mill Resharpener",
        description: "High-accuracy end mill grinding machine. Restores the cutting edges of end mills with precision, supporting various flute numbers and diameters.",
        image: "/images/products/end-mill-sharpener.jpg"
    },
    {
        id: 9,
        name: "Swift Clean Solution",
        description: "Premium machine cleaning solution designed to remove grease, oil, and grime from industrial tools. Non-corrosive formula ensures longevity of your equipment.",
        image: "/images/products/swift-clean.jpg"
    },
    {
        id: 10,
        name: "Auto-Coolant Tapping Arm",
        description: "Advanced electric tapping machine integrated with an automatic oil spray coolant system. Extends tap life and ensures high-quality threads in difficult materials.",
        image: "/images/products/tapping-arm-coolant.jpg"
    },
    {
        id: 11,
        name: "Mini 45° Chamfer Tool",
        description: "Ultra-compact pneumatic chamfering tool with 45-degree angle. Lightweight composite body, ideal for single-handed operation in tight spaces.",
        image: "/images/products/chamfer-tool-black.jpg"
    },
    {
        id: 12,
        name: "Industrial Mold Clamp Set",
        description: "Heavy-duty steel mold clamp set for secure workpiece holding on milling machines and injection molding equipment. Includes various sizes for versatile clamping.",
        image: "/images/products/mold-clamp-set.jpg"
    },
    {
        id: 13,
        name: "Precision Machine Vise",
        description: "High-accuracy lock-down machine vise for milling and grinding operations. Features high clamping force and durable construction for industrial use.",
        image: "/images/products/precision-vise.jpg"
    }
];

export default function Products() {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

    const handleCardClick = (id: number) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <section id="products" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 4rem)' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Our <span style={{ color: 'var(--primary)' }}>Products</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8, padding: '0 1rem' }}>
                        Engineered for performance and durability, our comprehensive range of tooling solutions drives industrial productivity.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: 'clamp(1rem, 3vw, 2rem)'
                }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={`flip-card ${flippedCards.has(product.id) ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(product.id)}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div style={{ position: 'relative', width: '100%', height: '80%' }}>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            style={{ objectFit: 'contain', padding: '1rem' }}
                                        />
                                    </div>
                                    <div style={{
                                        height: '20%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(0,0,0,0.2)',
                                        backdropFilter: 'blur(5px)',
                                        padding: '0 0.5rem'
                                    }}>
                                        <h3 style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)', margin: 0, textAlign: 'center' }}>{product.name}</h3>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{product.name}</h3>
                                    <p style={{ opacity: 0.9, lineHeight: '1.6', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

