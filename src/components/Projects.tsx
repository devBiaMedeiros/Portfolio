interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Portfólio Pessoal",
            description: "Site pessoal desenvolvido com React e TypeScript, apresentando minhas habilidades e projetos de forma profissional e responsiva.",
            technologies: ["React", "TypeScript", "CSS3", "Vite"],
            githubLink: "https://github.com/devBiaMedeiros/Portfolio"
        },
        {
            title: "Projetos do Curso Desenvolver",
            description: "Coleção de exercícios práticos desenvolvidos durante o curso, aplicando conceitos de HTML, CSS, JavaScript e outras tecnologias web modernas.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
            githubLink: "https://github.com/devBiaMedeiros"
        },
        {
            title: "Sistema de Gestão Hospitalar (Projeto Futuro)",
            description: "Ideia de projeto que combina minha experiência na área da saúde com desenvolvimento de software. Sistema para gestão de pacientes, prontuários e rotinas hospitalares, aplicando conhecimentos técnicos de enfermagem.",
            technologies: ["React", "Node.js", "TypeScript", "Database", "API REST"],
            githubLink: "https://github.com/devBiaMedeiros"
        }
    ];

    return (
        <section id="Projects">
            <h2>Projetos</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#cbd5e1' }}>
                Aqui estão alguns dos projetos que desenvolvi, aplicando os conhecimentos adquiridos 
                durante minha jornada de transição de carreira para a área de tecnologia.
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                            >
                                📁 Código
                            </a>
                            {project.liveLink && (
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="project-link"
                                >
                                    🚀 Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}