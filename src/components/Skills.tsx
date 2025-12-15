 interface Skill {
    name: string;
    level: string;
    percentage: number;
    icon: string;
    category: string;
    description: string;
}

export const SkillList = () => {
    const skills: Skill[] = [
        { name: "JavaScript", level: "Básico", percentage: 40, icon: "⚡", category: "Frontend", description: "Lógica de programação e manipulação de DOM" },
        { name: "React", level: "Básico", percentage: 35, icon: "⚛️", category: "Frontend", description: "Componentes funcionais e hooks" },
        { name: "TypeScript", level: "Básico", percentage: 30, icon: "📘", category: "Frontend", description: "Tipagem estática e desenvolvimento seguro" },
        { name: "CSS", level: "Básico", percentage: 45, icon: "🎨", category: "Frontend", description: "Estilização, layouts e animações" },
        { name: "HTML", level: "Básico", percentage: 50, icon: "🏗️", category: "Frontend", description: "Semântica e estrutura web" },
        { name: "Node.js", level: "Básico", percentage: 25, icon: "🔧", category: "Backend", description: "Servidor e APIs REST" },
        { name: "Git & GitHub", level: "Básico", percentage: 40, icon: "🐙", category: "Tools", description: "Controle de versão e colaboração" },
        { name: "Resolução de Problemas", level: "Avançado", percentage: 85, icon: "🧠", category: "Soft Skills", description: "Pensamento crítico e análise lógica" },
        { name: "Trabalho em Equipe", level: "Avançado", percentage: 90, icon: "👥", category: "Soft Skills", description: "Comunicação e colaboração efetiva" }
    ];

    const categories = [...new Set(skills.map(s => s.category))];

    return (
        <section id="Skills">
            <h2>Minhas Habilidades</h2>
            
            <div className="skills-header">
                <p>Competências técnicas e profissionais que desenvolvimento continuamente</p>
                <div className="skills-summary">
                    <div className="summary-card">
                        <span className="summary-icon">💻</span>
                        <span className="summary-label">Técnicas</span>
                        <span className="summary-count">{skills.filter(s => s.category !== 'Soft Skills').length}</span>
                    </div>
                    <div className="summary-card">
                        <span className="summary-icon">🎯</span>
                        <span className="summary-label">Soft Skills</span>
                        <span className="summary-count">{skills.filter(s => s.category === 'Soft Skills').length}</span>
                    </div>
                </div>
            </div>

            {categories.map((category, catIndex) => (
                <div key={category} className="skills-section" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                    <div className="section-header">
                        <h3 className="category-title">{category}</h3>
                        <div className="category-divider"></div>
                    </div>
                    
                    <div className="skills-grid">
                        {skills.filter(s => s.category === category).map((skill, index) => (
                            <div 
                                key={index} 
                                className="skill-card"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="skill-card-header">
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span className="skill-level-badge">{skill.level}</span>
                                </div>

                                <h4 className="skill-name">{skill.name}</h4>
                                
                                <p className="skill-description">{skill.description}</p>
                                
                                <div className="skill-bar-container">
                                    <div className="skill-bar">
                                        <div 
                                            className="skill-progress" 
                                            style={{ width: `${skill.percentage}%` }}
                                        >
                                            <span className="progress-value">{skill.percentage}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="skill-footer">
                                    <span className="skill-level">Nível: {skill.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}