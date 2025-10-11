export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header>
            <h1>Beatriz Medeiros</h1>
            <nav>
                <ul>
                    <li>
                        <a 
                            href="#Profile" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Profile');
                            }}
                        >
                            👤 Perfil
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#Skills" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Skills');
                            }}
                        >
                            🚀 Habilidades
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#Projects" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Projects');
                            }}
                        >
                            💼 Projetos
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#Contatos" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('Contatos');
                            }}
                        >
                            📞 Contatos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}