import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Features />

      {/* Services Section */}
      <section id="services">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Industrial Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem', opacity: 0.8 }}>
            End-to-end support for your manufacturing lifecycle, from initial consultation to maintenance.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
              <h3 style={{ marginBottom: '1rem' }}>Prototyping</h3>
              <p style={{ opacity: 0.7 }}>Rapid prototyping services to bring your concepts to life in record time.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ marginBottom: '1rem' }}>Quality Audit</h3>
              <p style={{ opacity: 0.7 }}>Rigorous testing and inspection to ensure zero-defect production.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📦</div>
              <h3 style={{ marginBottom: '1rem' }}>Logistics</h3>
              <p style={{ opacity: 0.7 }}>Global shipping and inventory management for seamless supply chains.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', background: 'var(--background)' }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
              EVOLVE <span style={{ color: '#fff' }}>TOOLING</span>
            </div>
            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>© 2026 Evolve Tooling Inc. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', opacity: 0.8, flexWrap: 'wrap' }}>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
