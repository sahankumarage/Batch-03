"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Features() {
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isLightMode) {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
    }, [isLightMode]);

    return (
        <div suppressHydrationWarning>
            {/* Background animated blobs */}
            <div className="blob-c">
                <div className="shape blob1"></div>
                <div className="shape blob2"></div>
                <div className="shape blob3"></div>
            </div>
            
            {/* Navigation bar */}
            <nav className="navbar glass">
                <div className="logo"><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Stellar.</Link></div>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="/#contact">Contact</Link></li>
                </ul>
                <button 
                    className="btn-primary" 
                    id="theme-toggle"
                    onClick={() => setIsLightMode(!isLightMode)}
                >
                    {isLightMode ? 'Dark Mode' : 'Light Mode'}
                </button>
            </nav>

            {/* Features Content */}
            <main className="features-section">
                <div className="features-header">
                    <h1>Powerful <span className="gradient-text">Capabilities</span></h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
                        Discover the tools and technologies that make Stellar the perfect choice for your next web project.
                    </p>
                    <div style={{ margin: '0 auto', borderRadius: '24px', overflow: 'hidden', maxWidth: '800px', boxShadow: '0 20px 50px rgba(99, 102, 241, 0.2)' }}>
                        <Image src="/feature_graphic.png" alt="Stellar Features Graphic" width={800} height={400} priority style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature-card glass">
                        <div className="feature-icon">🚀</div>
                        <h3 className="feature-title">Lightning Fast</h3>
                        <p className="feature-desc">Built on modern architectures to ensure your site loads instantly and performs brilliantly under heavy traffic.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="feature-icon">✨</div>
                        <h3 className="feature-title">Stunning UI</h3>
                        <p className="feature-desc">Leveraging glassmorphism, dynamic gradients, and fluid animations for an unforgettable user experience.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="feature-icon">🔒</div>
                        <h3 className="feature-title">Secure & Scalable</h3>
                        <p className="feature-desc">Enterprise-grade security built directly into the foundation, scaling seamlessly alongside your growing business.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
