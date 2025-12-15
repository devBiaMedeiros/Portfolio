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
            <div className="hero-animated-bg">
                <div className="animated-circle circle-1"></div>
                <div className="animated-circle circle-2"></div>
                <div className="animated-circle circle-3"></div>
            </div>
            
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-greeting">Bem-vindo! 👋</div>
                    <h1>Olá, eu sou a Beatriz!</h1>
                    <div className="hero-divider"></div>
                    <p className="hero-subtitle">
                        Desenvolvedora Frontend em Transição de Carreira
                    </p>
                    <p className="hero-description">
                        Técnica de enfermagem migrando para o desenvolvimento de software. 
                        Transformando minha experiência em cuidado e atenção aos detalhes 
                        em código limpo e soluções tecnológicas inovadoras.
                    </p>
                    
                    <div className="hero-tech-tags">
                        <span className="tech-badge">React</span>
                        <span className="tech-badge">TypeScript</span>
                        <span className="tech-badge">JavaScript</span>
                        <span className="tech-badge">CSS</span>
                    </div>

                    <div className="hero-buttons">
                        <button 
                            onClick={scrollToProjects}
                            className="hero-btn primary"
                        >
                            <span className="btn-icon">💼</span>
                            Ver Projetos
                        </button>
                        <button 
                            onClick={scrollToContacts}
                            className="hero-btn secondary"
                        >
                            <span className="btn-icon">📞</span>
                            Entre em Contato
                        </button>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-card stat-card-1">
                        <div className="stat-icon">🎯</div>
                        <span className="stat-number">32</span>
                        <span className="stat-label">Anos</span>
                        <div className="stat-glow"></div>
                    </div>
                    <div className="stat-card stat-card-2">
                        <div className="stat-icon">📍</div>
                        <span className="stat-number">RJ</span>
                        <span className="stat-label">Localização</span>
                        <div className="stat-glow"></div>
                    </div>
                    <div className="stat-card stat-card-3">
                        <div className="stat-icon">🚀</div>
                        <span className="stat-number">2025</span>
                        <span className="stat-label">Início na Tech</span>
                        <div className="stat-glow"></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-dot"></div>
                <p>Scroll para explorar</p>
            </div>
        </section>
    )
}