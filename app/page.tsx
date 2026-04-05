"use client";

import Link from "next/link";

export default function Home() {
    return (
        <div suppressHydrationWarning>
            {/* Massive top glowing orb */}
            <div className="blob-c"></div>
            
            {/* Navigation bar */}
            <nav className="navbar">
                <div className="logo"><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Fintech.</Link></div>
                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/features">Features</Link></li>
                    <li><Link href="#pricing">Pricing</Link></li>
                    <li><Link href="#solutions">Solutions</Link></li>
                    <li><Link href="#about">About</Link></li>
                </ul>
                <div className="cta-buttons" style={{ gap: '1rem' }}>
                    <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Request A Demo</button>
                    <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Get Started</button>
                </div>
            </nav>

            <div className="page-container">
                {/* Hero section */}
                <main className="hero" id="home">
                    <div className="hero-content">
                        <h1>Innovating Tomorrow.<br />Building Today.</h1>
                        <p className="subtitle">Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success.</p>
                        <div className="cta-buttons">
                            <button className="btn-primary">Get a Free Consultation</button>
                            <button className="btn-secondary">See Our Work</button>
                        </div>
                    </div>
                </main>

                {/* Trust Banner */}
                <div className="trust-banner glass">
                    <div className="trust-banner-item">
                        <div style={{ color: '#fbbf24', letterSpacing: '2px' }}>★★★★★</div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>Rated 4.9/5 by</div>
                            <span className="highlight">1,200+</span>
                            <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>users on</div>
                        </div>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-banner-item" style={{ fontSize: '1.2rem', color: '#fff' }}>
                        ★ Trustpilot
                    </div>
                    <div className="trust-banner-item" style={{ fontSize: '1.2rem', color: '#fff' }}>
                        Capterra
                    </div>
                    <div className="trust-banner-item" style={{ fontSize: '1.5rem', color: '#fff' }}>
                        G<span style={{ fontSize: '1rem' }}>2</span>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="section-header">
                    <h2>Innovating Tomorrow. <span style={{ color: "var(--primary-bright)" }}>Building Today.</span></h2>
                    <p>Empowering businesses with next-gen technology solutions from custom<br/>software to AI-driven platforms.</p>
                </div>

                <div className="grid-6">
                    <div className="dark-card">
                        <div className="dark-card-icon">{'</>'}</div>
                        <h3>Custom Software Development</h3>
                        <p>Scalable, secure, and high-performance apps tailored to your needs.</p>
                    </div>
                    <div className="dark-card">
                        <div className="dark-card-icon">⚙️</div>
                        <h3>AI & Machine Learning</h3>
                        <p>Automate decisions, forecast trends, and power your product with data.</p>
                    </div>
                    <div className="dark-card">
                        <div className="dark-card-icon">☁️</div>
                        <h3>Cloud Solutions</h3>
                        <p>Future-proof your infrastructure with AWS, Azure, or GCP deployments.</p>
                    </div>
                    <div className="dark-card">
                        <div className="dark-card-icon">✨</div>
                        <h3>UI/UX Design</h3>
                        <p>Seamless, human-centered digital experiences that drive engagement.</p>
                    </div>
                    <div className="dark-card">
                        <div className="dark-card-icon">📱</div>
                        <h3>Web & Mobile App Development</h3>
                        <p>From MVPs to enterprise apps — we code what you imagine.</p>
                    </div>
                    <div className="dark-card">
                        <div className="dark-card-icon">🔒</div>
                        <h3>Cybersecurity</h3>
                        <p>Protect what matters with advanced security frameworks and audits.</p>
                    </div>
                </div>

                {/* Process Section */}
                <div className="process-section">
                    <div className="section-header">
                        <h2>Built on Trust. Driven by Results.</h2>
                        <p>We don't just build software we build relationships. Our clients<br/>trust us to deliver tech that works.</p>
                    </div>
                    <div className="grid-4">
                        <div className="process-card">
                            <div className="process-num">01</div>
                            <h3>10+ Years of Tech Expertise</h3>
                        </div>
                        <div className="process-card">
                            <div className="process-num">02</div>
                            <h3>Transparent Agile Process</h3>
                        </div>
                        <div className="process-card">
                            <div className="process-num">03</div>
                            <h3>Dedicated Full-Stack Teams</h3>
                        </div>
                        <div className="process-card">
                            <div className="process-num">04</div>
                            <h3>24/7 Support & Maintenance</h3>
                        </div>
                    </div>
                </div>

                {/* Real Impact Section */}
                <div className="section-header">
                    <h2>Real Impact. <span style={{ color: "var(--primary-bright)" }}>Proven Results.</span></h2>
                    <p>Explore how we've helped startups and enterprises alike<br/>scale and innovate.</p>
                </div>
                
                <div className="grid-3">
                    <div className="dark-card project-card">
                        <div className="project-tag">Fintech</div>
                        <h3>Fintech Dashboard</h3>
                        <p>Streamlined user analytics & real-time transactions.</p>
                    </div>
                    <div className="dark-card project-card">
                        <div className="project-tag">E-Commerce</div>
                        <h3>E-commerce Platform</h3>
                        <p>300% increase in conversion through custom storefront.</p>
                    </div>
                    <div className="dark-card project-card">
                        <div className="project-tag">AI</div>
                        <h3>AI-Powered Tool</h3>
                        <p>Reduced support tickets by 40% using predictive models.</p>
                    </div>
                </div>
                
                <div style={{ marginBottom: '6rem' }}>
                   <button className="btn-primary" style={{ padding: '0.8rem 3rem' }}>View All Projects</button>
                </div>

            </div>
        </div>
    );
}
