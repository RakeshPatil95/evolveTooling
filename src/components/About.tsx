
export default function About() {
    return (
        <section id="about" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="glass" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>About <span style={{ color: 'var(--primary)' }}>Us</span></h2>
                    <p style={{
                        lineHeight: '1.8',
                        opacity: 0.9,
                        fontSize: '1.1rem',
                        color: '#eee'
                    }}>
                        At Evolve Tooling Solution, we are committed to delivering high-quality and reliable industrial
                        solutions that enhance productivity and efficiency. We offer a comprehensive range of products
                        including tapping machines, resharpening machines, machine tools, machine vises, drill grinders, and
                        PCD inserts. With a strong focus on innovation, precision, and customer satisfaction, we ensure
                        every product meets stringent quality standards and industry requirements. Our dedicated team
                        strives to provide effective, timely delivery and responsive support, making us a trusted partner for
                        businesses seeking durable and performance-driven tooling solutions across diverse manufacturing
                        and engineering applications.
                    </p>
                </div>
            </div>
        </section>
    );
}
