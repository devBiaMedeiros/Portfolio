 interface Skill {
    name: string;
    level: string;
    percentage: number;
}

export const SkillList = () => {
    const skills: Skill[] = [
        { name: "JavaScript", level: "Básico", percentage: 40 },
        { name: "React", level: "Básico", percentage: 35 },
        { name: "TypeScript", level: "Básico", percentage: 30 },
        { name: "CSS", level: "Básico", percentage: 45 },
        { name: "HTML", level: "Básico", percentage: 50 },
        { name: "Node.js", level: "Básico", percentage: 25 },
        { name: "Git & GitHub", level: "Básico", percentage: 40 },
        { name: "Resolução de Problemas", level: "Avançado", percentage: 85 },
        { name: "Trabalho em Equipe", level: "Avançado", percentage: 90 }
    ];

    return (
        <section id="Skills">
            <h2>Minhas Habilidades</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-level">Nível: {skill.level}</div>
                        <div className="skill-bar">
                            <div 
                                className="skill-progress" 
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}