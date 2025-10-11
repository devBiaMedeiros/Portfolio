import { useEffect, useState } from 'react';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            
            // Só esconde o header no mobile
            if (window.innerWidth <= 768) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);
        window.addEventListener('resize', controlHeader);

        return () => {
            window.removeEventListener('scroll', controlHeader);
            window.removeEventListener('resize', controlHeader);
        };
    }, [lastScrollY]);

    return (
        <header className={!isVisible ? 'hidden' : ''}>
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