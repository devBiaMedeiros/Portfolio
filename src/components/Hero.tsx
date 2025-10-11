export default function Hero() {
    const scrollToProjects = () => {
        const element = document.getElementById('Projects');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const scrollToContacts = () => {
        const element = document.getElementById('Contatos');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Olá, eu sou a Beatriz! 👋</h1>
                    <p className="hero-subtitle">
                        Desenvolvedora Frontend em Transição de Carreira
                    </p>
                    <p className="hero-description">
                        Técnica de enfermagem migrando para o desenvolvimento de software. 
                        Transformando minha experiência em cuidado e atenção aos detalhes 
                        em código limpo e soluções tecnológicas inovadoras.
                    </p>
                    <div className="hero-buttons">
                        <button 
                            onClick={scrollToProjects}
                            className="hero-btn primary"
                        >
                            Ver Projetos 💼
                        </button>
                        <button 
                            onClick={scrollToContacts}
                            className="hero-btn secondary"
                        >
                            Entre em Contato 📞
                        </button>
                    </div>
                </div>
                <div className="hero-stats">
                    <div className="stat-card">
                        <span className="stat-number">32</span>
                        <span className="stat-label">Anos</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">RJ</span>
                        <span className="stat-label">Localização</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">2025</span>
                        <span className="stat-label">Início na Tech</span>
                    </div>
                </div>
            </div>
        </section>
    )
}